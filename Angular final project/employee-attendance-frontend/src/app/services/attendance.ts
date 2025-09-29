import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Angular’s built-in service for making HTTP requests.
import { Observable } from 'rxjs';//to handle HTTP responses
import { Attendance } from '../models/attendance.model';//Imports the Attendance

@Injectable({
  providedIn: 'root' //Registers the service at the root level
})
export class AttendanceService {
  private apiUrl = 'https://localhost:7008/api/attendance'; // Your .NET backend

  constructor(private http: HttpClient) { } //Injects HttpClient

  // GET all attendances
  getAttendances(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.apiUrl);
  }

  // GET attendance by id
  getAttendance(id: number): Observable<Attendance> {
    return this.http.get<Attendance>(`${this.apiUrl}/${id}`);
  }

  // POST (create new attendance)
  addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance);
  }

  // PUT (update attendance)
  updateAttendance(id: number, attendance: Attendance): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, attendance);
  }

  // DELETE attendance
  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Search by EmployeeId
  searchByEmployee(employeeId: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}/search?employeeId=${employeeId}`);
  }

  // Filter by Date Range
  getByDateRange(from: string, to: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}/date?from=${from}&to=${to}`);
  }
}
