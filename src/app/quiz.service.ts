import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from './quiz/question.model';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  // baseUrl: string = "http://localhost:3000";
  baseUrl: string = "https://javaee-spring-boot-rest-api.azurewebsites.net";
  mode;
  categories;
  questions ;//= Array<Question>();
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

  getModes() {
    return this.httpClient.get(this.baseUrl + "/modes");

  }

  getGenres() {
    return this.httpClient.get(this.baseUrl + "/modes/" + this.mode + "/genres");
  }

  getQuestions() {
    let idsList: string = "";
    console.log(idsList);
    for(let id of this.categories) {
      console.log("idsList:", idsList);
      idsList += id + ",";
    }
    idsList = idsList.substring(0, idsList.length-1);
    console.log("idsList", idsList);
    return this.httpClient.get(this.baseUrl + "/questions/genresQuestions?genreIds=" + idsList + "&questionsAmount=11");
  }

  getAnswers() {
    return this.httpClient.post(this.baseUrl + '/results',this.questions);
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

