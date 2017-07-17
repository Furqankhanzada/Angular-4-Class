import { Component, Output, EventEmitter } from '@angular/core';
import Quiz from './quiz.model'

@Component({
  selector: 'quiz-form',
  template: `
  <h2>Add Quiz</h2>
  <form>
    <input #question name='question' type='text'>
    <input #answer name='answer' type='text'>
    <button (click)='addQuiz($event, question.value, answer.value)' >Add Quiz</button>
  </form>
  `,
  styles: [
  ]
})
export class QuizFormComponent {
  @Output() quizAdded: EventEmitter<Quiz> = new EventEmitter<Quiz>()
  addQuiz(e, q, a){
    e.preventDefault()
    this.quizAdded.emit(new Quiz(q, a))
  }
}

