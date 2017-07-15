import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionsListComponent } from './questionsList.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
