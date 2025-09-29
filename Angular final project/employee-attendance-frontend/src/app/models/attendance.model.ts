export interface Attendance {
  id: number;
  employeeName: string;
  employeeId: string;
  date: string;   // use string for dates when working with HTTP
  status: 'Present' | 'Absent' | 'Leave'; // enum mapping
}
  //defines structure of an attendence record