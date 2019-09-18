import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  categories1 = new Map();
  categories2 =new Map();
  categories3 = new Map()
  categories;// = new Map();

  quizMode;//= new Map();
  quizModeChecked = false;
  selectedMode = '';
  selectedCategories;
  // selectedCategories = [];

  constructor( private quizService: QuizService, private route: Router) {

    this.quizService.getModes().subscribe(
      (data: any) => {
        console.log('get modes');
        this.quizMode = data;
      }
    );

    // this.categories1.set("1", "Rock");
    // this.categories1.set("2", "Pop");

    // this.categories2.set("1", "Rock");
    // this.categories2.set("2", "Pop");
    // this.categories2.set("3", "Lata 90.");

    // this.categories3.set("1", "Rock");
    // this.categories3.set("2", "Pop");
    // this.categories3.set("3", "Lata 90.");
    // this.categories3.set("4", "Inne");
    // this.categories3.set("5", "Inne");
    // this.categories3.set("6", "Inne");
    // this.categories3.set("7", "Inne");
    // this.categories3.set("8", "Inne");
    
    // this.quizMode.set("mode1", "Zgadnij tytuł piosenki");
    // this.quizMode.set("mode2", "Zgadnij autora piosenki");
    // this.quizMode.set("mode3", "Wybierz brakujący fragment");
  }

  ngOnInit() {
  }

  test(event) {
    let elementId: string = event.target.id;
    // let elementClasses = document.getElementById(elementId).classList;
    // if (elementClasses.contains("selected-mode")) {
    //   elementClasses.remove("selected-mode");
    // } else {
    //   elementClasses.add("selected-mode");
    // }

    // event.addEventListener('click', () => {
    //   elementClasses.toggle('selected-mode');
    // });

    console.log("klik", this.selectedMode);
    console.log("elementId", elementId);
    this.quizModeChecked = true;
    // if (elementId == 'mode1') {
    //   this.categories = this.categories1;
    // }
    // else if (elementId == 'mode2') {
    //   this.categories = this.categories2;
    // }
    // else {
    //   this.categories = this.categories3;
    // }

    this.selectedMode = elementId;
    this.quizService.mode = elementId;//this.selectedMode;

    this.quizService.getGenres().subscribe(
      (data: any) => {
        console.log('get genres');
        this.categories = data;
      }
    );
    console.log("seelectedOPtion", this.quizService.mode)
  }


  startQuiz() {
    console.log('wybrane kategorie', this.selectedCategories);
    console.log('wybrany tryb', this.selectedMode);
    this.quizService.categories = this.selectedCategories;
    for(let i of this.quizService.categories)
    console.log("selected categories ", i);
    console.log("selected mode ", this.quizService.mode)
    // this.quizService.chooseModeAndCategories(this.selectedMode, this.selectedCategories);
    this.route.navigate(['/quiz']);

  }
}
