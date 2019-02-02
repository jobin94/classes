import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  stu:Student[];

  constructor(private http:HttpClient) { }
store(s:Student): Observable<Student[]>{
  return this.http.post(`http://localhost/reg.php`,{ data: Student }).pipe(
    map((res) => {
      this.stu = (res['data']);
      return this.stu;
    }),
  
  catchError(this.handleError));
  
}
private handleError(error:HttpErrorResponse) { 
  console.log(error);
  return throwError('Error! Something went wrong');
}
  subscribe(){}
}

