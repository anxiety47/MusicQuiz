export class Answer {
    id: number;
    text: string;
}

export class Question {
    id: number;
    text: string;
    answers: Array<Answer>;
    userAnswerId: number;
    correctAnswerId: number;
}