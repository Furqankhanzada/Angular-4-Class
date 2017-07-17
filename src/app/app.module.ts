import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizFormComponent } from './quizForm.component';
import { QuizComponent } from './quiz.component';
import { QuizesListComponent } from './quizesList.component';

@NgModule({
  declarations: [
    QuizFormComponent,
    QuizComponent,
    QuizesListComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
