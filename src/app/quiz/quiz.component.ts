import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    console.log('onInit');
    if (this.quizService.currentQuestion) {
      console.log('not first question')
      // this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.currentQuestion = parseInt(localStorage.getItem('currentQuestion'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));
      if (this.quizService.currentQuestion == 10)
        this.router.navigate(['/result']);
      else {
        this.quizService.startTimer();
        console.log('next');
      }
    }
    else {
      console.log('first question')
      // this.quizService.seconds = 0;
      this.quizService.currentQuestion = 0;
      this.quizService.getQuestions().subscribe(
        (data: any) => {
          console.log('get questions');
          this.quizService.questions = data;
          this.quizService.startTimer();
        }
      );
    }

    // this.quizService.currentQuestion = 0;
    // this.quizService.getQuestions().subscribe(
    //   (data: any) => {
    //     console.log('get questions');
    //     this.quizService.questions = data;
    //   }
    // );
  }

  answerQuestion(answerId) {
    console.log("id odp:", answerId);
    this.quizService.questions[this.quizService.currentQuestion].answer = answerId;
    localStorage.setItem('questions', JSON.stringify(this.quizService.questions));
    this.quizService.currentQuestion++;
    localStorage.setItem('currentQuestion', this.quizService.currentQuestion.toString());

    this.quizService.time = 30;

    if (this.quizService.currentQuestion == 10) {
      this.router.navigate(['/summary']);
    }
  }
}
/*
if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.quizService.qnProgress == 10)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      this.quizService.getQuestions().subscribe(
        (data: any) => {
          this.quizService.qns = data;
          this.startTimer();
        }
      );
    }
*/