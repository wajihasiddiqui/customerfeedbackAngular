/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [HttpClientModule] // Add HttpClientModule here
});




// import { bootstrapApplication } from '@angular/platform-browser';
// import { FeedbackComponent } from './app/feedback/feedback.component'; // Your standalone component

// bootstrapApplication(FeedbackComponent)
//   .catch(err => console.error(err));