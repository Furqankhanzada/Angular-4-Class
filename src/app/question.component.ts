import { Component } from '@angular/core';

@Component({
  selector: 'question',
  template: `<div class='question'>
  <b>Question:</b> 
  {{ question }}
  </div>
  <div class='answer'>
  <b>Answer:</b> 
  {{ answer }}
  </div>`,
  styles: [
    '.question b {color: red}',
    '.answer b {color: green}',
  ]
})
export class QuestionComponent{
  question: string;
  answer: string;
  constructor(){
    this.question = 'How old are you?';
    this.answer = 'I am 27 year old.'
  }
}

