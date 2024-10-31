import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
    private apiUrl = 'https://localhost:7154/api/Feedback';

   constructor(private http: HttpClient) {}

  submitFeedback(feedback: any): Observable<any> {
    return this.http.post(this.apiUrl, feedback);
  }

  // submitFeedback(feedback: any): Observable<any> {
  //   console.log('Sending feedback:', feedback); // Log feedback data before sending
  //   return this.http.post<any>('https://localhost:7154/api/feedback', feedback)
  //     .pipe(
  //       tap(response => console.log('Feedback submitted successfully:', response)), // Log success
  //       catchError(error => {
  //         console.error('Error occurred while submitting feedback:', error); // Log error
  //         return throwError(error);
  //       })
  //     );
  //   }
 
}
