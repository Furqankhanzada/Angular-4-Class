import { Component } from '@angular/core';

@Component({
  selector: 'questions-list',
  template: `
  <ul>
    <li *ngFor="let q of questions">
      <div class='question'>
      <b>Question:</b> 
      {{ q.question }}
      </div>
      <div class='answer'>
      <b>Answer:</b> 
      {{ q.answer }}
      </div>
    </li>
  <ul>`,
  styles: []
})
export class QuestionsListComponent{
  questions: Object[] //Array<Object> ;
  constructor(){
    this.questions = [{
      question: 'How old are you?',
      answer: 'I am 27 year old.'
    },{
      question: 'Do you angular?',
      answer: 'Yes! Learning it nowadays'
    },{
      question: 'Are you in love?',
      answer: 'Yes! with angular.'
    }];
  }
}

