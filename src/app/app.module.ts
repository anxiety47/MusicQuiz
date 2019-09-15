import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { QuizComponent } from './quiz/quiz.component';
import { SummaryComponent } from './summary/summary.component';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule, MatIconModule} from '@angular/material';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    QuizComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
