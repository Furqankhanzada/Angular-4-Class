import { Component, Input } from '@angular/core';
import Quiz from './quiz.model'

@Component({
  selector: 'quiz',
  template: `
  <li>
      <div class='question'>
      <b>Question:</b> 
      {{ quiz.question }}
      </div>
      <div class='answer' [hidden]='quiz.hide'>
      <b>Answer:</b> 
      {{ quiz.answer }}
      </div>
      <button (click)="quiz.toggleAnswer()" >Show/Hide Answer</button>
    </li>
  `,
  styles: [
    'li {border-bottom: 1px solid #ccc; padding-bottom: 20px; margin-bottom: 10px;}',
    'button {margin-top: 20px;}'
  ]
})
export class QuizComponent {
  @Input() quiz: Quiz
}

