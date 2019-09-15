import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from 'app/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('currentQuestion')) == 10) {
      // this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.currentQuestion = parseInt(localStorage.getItem('currentQuestion'));
      this.quizService.questions = JSON.parse(localStorage.getItem('questions'));

      this.quizService.getAnswers().subscribe(
        (data: any) => {
          this.quizService.correctAnswersCount = 0;
          // this.quizService.questions.forEach((element, index) => {
          //   if (element.answer == data[index])
          //     this.quizService.correctAnswersCount++;
          //   element.correct = data[index];
          // });
          for(let element in data) {
            if (data.userAnswerId === data.correctAnswerId) {
              this.quizService.correctAnswersCount++;
            }
          }
          console.log(this.quizService.correctAnswersCount);
        }
      );
    }
    else {
      this.router.navigate(['/quiz']);
    }

    //TODO: remove after adding routing from summary component
    localStorage.clear();
  }


  ngOnDestroy() {
    localStorage.clear();
  }
}
