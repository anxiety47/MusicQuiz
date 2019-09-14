import { Routes } from '@angular/router'
import { IntroductionComponent } from './introduction/introduction.component';
import { QuizComponent } from './quiz/quiz.component';
import { SummaryComponent } from './summary/summary.component';

export const appRoutes : Routes = [
    {path:'introduction',component: IntroductionComponent},
    {path:'quiz',component: QuizComponent},
    {path:'summary',component: SummaryComponent},
    {path:'',redirectTo:'/introduction',pathMatch:'full'}
];