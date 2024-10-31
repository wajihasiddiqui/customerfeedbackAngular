import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError, Observable, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) {}
   private apiUrl = 'https://localhost:7130/api/Feedback';
  submitFeedback(feedback: any): Observable<any> {
    return this.http.post(this.apiUrl, feedback);
  }
}
