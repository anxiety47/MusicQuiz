import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl:string = "http://localhost:4200";
  
  mode;
  categories;
  questions = [];

  constructor(private httpClient: HttpClient) { }

  chooseModeAndCategories(selectedMode, selectedCategories) {
    console.log("sending data");
    this.mode = selectedMode;
    this.categories = selectedCategories;
    console.log("przeslane dane: " , this.mode,  " ", this.categories);
  }

  // getQuestions() {
  //   console.log("get questions");
  //   return this.tmpData;
  //   // return new Observable<any>();
  // }

  getQuestions(){
    return this.httpClient.get(this.baseUrl + '/questions?modeId=' + this.mode + '&genreId=' + this.categories);
}
}
