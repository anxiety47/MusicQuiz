import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from './quiz/question.model';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  baseUrl: string = "http://localhost:3000";

  mode;
  categories;
  questions = Array<Question>();
  currentQuestion: number;
  correctAnswersCount;

  time = 30;
  interval;

  constructor(private httpClient: HttpClient) { }

  chooseModeAndCategories(selectedMode, selectedCategories) {
    console.log("sending data");
    this.mode = selectedMode;
    this.categories = selectedCategories;
    console.log("przeslane dane: ", this.mode, " ", this.categories);
  }

  // getQuestions() {
  //   console.log("get questions");
  //   return this.tmpData;
  //   // return new Observable<any>();
  // }

  getQuestions() {
    return this.httpClient.get(this.baseUrl + '/questions'/*?modeId=' + this.mode + '&genreId=' + this.categories*/);
  }

  getAnswers() {
    return this.httpClient.get(this.baseUrl + '/results'/*?modeId=' + this.mode + '&genreId=' + this.categories*/);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        // this.time = 30;
        this.currentQuestion++;
        this.time=30;
      }
    }, 1000);
  }
}

