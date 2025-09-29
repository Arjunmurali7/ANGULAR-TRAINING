import { Component, OnInit } from '@angular/core'; //lifecycle
import { CommonModule } from '@angular/common'; // for ngif ngfor
import { FormsModule } from '@angular/forms'; // forms
import { AttendanceService } from '../../services/attendance';//Importsaserviceforbackendcommunicationandamodelfortypesafety.
import { Attendance } from '../../models/attendance.model';

@Component({ //standalone component
  selector: 'app-attendance-list',
  standalone: true,                  // Must be standalone
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance-list.html',
  styleUrls: ['./attendance-list.css'] // 
})
export class AttendanceListComponent implements OnInit { //Implements OnInit to run logic when the component initializes.
  attendances: Attendance[] = []; //stores the list of attendance records
  showAddForm = false; //toggles the visibility of the form
  editMode = false;// check if it is in editmode
  searchEmployeeId = ''; //holds the search input

  attendanceForm: Partial<Attendance> = { //form model for adding or editing
    employeeName: '',
    employeeId: '',
    date: '',
    status: 'Present'
  };
//Injects the service to interact with backend APIs.
  constructor(private attendanceService: AttendanceService) {} 

  ngOnInit(): void {
    this.loadAttendances(); // loads attendence data
  }

  loadAttendances() {
    this.attendanceService.getAttendances().subscribe({
      next: (data) => this.attendances = data,
      error: (err) => console.error(err)
    });
    this.showAddForm = false;
    this.editMode = false;
    this.attendanceForm = { employeeName: '', employeeId: '', date: '', status: 'Present' };
  }

  saveAttendance() {
    if (this.editMode && this.attendanceForm.id) {
      this.attendanceService.updateAttendance(this.attendanceForm.id, this.attendanceForm as Attendance).subscribe({
        next: () => this.loadAttendances()
      });
    } else {
      this.attendanceService.addAttendance(this.attendanceForm as Attendance).subscribe({
        next: () => this.loadAttendances()
      });
    }
  }

  editAttendance(record: Attendance) {
  this.editMode = true;
  this.showAddForm = true;

  // Convert date to yyyy-MM-dd format for input type="date"
  const formattedDate = record.date.split('T')[0]; 

  this.attendanceForm = { 
    ...record,
    date: formattedDate 
  };

  }

  deleteAttendance(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.attendanceService.deleteAttendance(id).subscribe({
        next: () => this.loadAttendances()
      });
    }
  }

  search() {
    if (this.searchEmployeeId.trim() === '') {
      this.loadAttendances();
      return;
    }
    this.attendanceService.searchByEmployee(this.searchEmployeeId).subscribe({
      next: (data) => this.attendances = data,
      error: (err) => console.error(err)
    });
  }
}
