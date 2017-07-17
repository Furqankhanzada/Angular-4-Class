export default class Quiz {
  question: string;
  answer: string;
  hide: boolean;
  constructor(question: string, answer: string){
    this.question = question;
    this.answer = answer;
    this.hide = true;
  }
  toggleAnswer(){
    this.hide = !this.hide
  }
}