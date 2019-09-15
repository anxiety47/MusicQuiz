import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe(
      (data: any) => {
        console.log('get questions');
        this.questions = data;
      }
    );
  }

}
