import { Component } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers: [FeedbackService] 
})
export class FeedbackComponent {
  feedback = {
    name: '',
    email: '',
    message: ''
  };
   constructor(private feedbackService: FeedbackService) {}

  submitFeedback() {
    this.feedbackService.submitFeedback(this.feedback).subscribe(
      response => {
      console.log('Feedback submitted:', response);

      this.feedback = {
        name: '',
        email: '',
        message: ''
      };
      alert('Thank you for your feedback!');  
    },
    error => {
      console.error('Error submitting feedback:', error);
      alert('There was an error submitting your feedback. Please try again later.');
    });
  
  }
}
