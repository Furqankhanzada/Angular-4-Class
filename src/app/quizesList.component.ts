import { Component } from '@angular/core';
import Quiz from './quiz.model'

@Component({
  selector: 'quizes-list',
  template: `
  <quiz-form (quizAdded)='addQuiz($event)' ></quiz-form>
  <ul>
    <quiz *ngFor="let q of quizes" [quiz]="q"></quiz>
  <ul>`,
  styles: [
  ]
})
export class QuizesListComponent{
  quizes: Quiz[] //Array<Object> ;
  constructor(){
    this.quizes = [
      new Quiz('How old are you?', 'I am 27 year old.'),
      new Quiz('Do you angular?', 'Yes! Learning it nowadays'),
      new Quiz('Are you in love?', 'Yes! with angular.'),
     ];
  }
  addQuiz(q){
    console.log('asda', q)
    this.quizes.unshift(q)
  }
}

