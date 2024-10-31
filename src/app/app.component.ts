import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackComponent } from "./feedback/feedback.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer_Feedback_System';
}
