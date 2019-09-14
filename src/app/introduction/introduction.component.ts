import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  categories1 = ['Rock', 'Pop', 'Lata 90.', 'jeszcze jakieś inne'];
  categories2 = ['Rock', 'Pop'];
  categories3 = ['Rock', 'Pop', 'Lata 90.'];
  categories;
  options = ['Zgadnij tytuł piosenki', 'Zgadnij autora piosenki', 'Wybierz brakujący fragment'];
  optionChecked = false;
  selectedOption = '';
  selectedCategories = [];
  constructor() { }

  ngOnInit() {
  }

  test(event) {
    let elementId: string = event.target.id;
    console.log("klik", elementId);
    this.optionChecked = true;
    if (elementId == 'div1') {
      this.categories = this.categories1;
    }
    else if (elementId == 'div2') {
      this.categories = this.categories2;
    }
    else {
      this.categories = this.categories3;
    }
    this.selectedOption = elementId;
    
    console.log("seelectedOPtion", this.selectedOption)
  }

}
