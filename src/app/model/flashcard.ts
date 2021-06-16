export interface Flashcard{
    cards: Card[]
}

export interface Card{
    language: string;
    question: string;
    answer: string
}