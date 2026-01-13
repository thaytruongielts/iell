
import { Question } from './types';

export const AUDIO_URL = "https://tinyurl.com/ieltsliste2";

export const QUESTIONS: Question[] = [
  { id: 11, label: "Adult's ticket cost", type: 'table', correctAnswers: ["24", "twenty-four", "twenty four"] },
  { id: 12, label: "Child's ticket cost", type: 'table', correctAnswers: ["18", "eighteen"] },
  { id: 13, label: "Children under X years", type: 'table', correctAnswers: ["5", "five"] },
  { id: 14, label: "Reduced tariff cost", type: 'table', correctAnswers: ["19", "nineteen"] },
  { id: 15, label: "Ticket bundle name", type: 'table', correctAnswers: ["family ticket", "family"] },
  { id: 16, label: "Annual membership cost", type: 'table', correctAnswers: ["107", "one hundred and seven", "one hundred seven"] },
  { id: 17, label: "Buy tickets X", type: 'sentence', correctAnswers: ["online"] },
  { id: 18, label: "Receive a X of your booking", type: 'sentence', correctAnswers: ["confirmation email", "confirmation e-mail", "confirmation"] },
  { id: 19, label: "Book tickets X", type: 'sentence', correctAnswers: ["by telephone", "telephone", "phone", "by phone"] },
  { id: 20, label: "Purchase tickets X", type: 'sentence', correctAnswers: ["in person", "person"] },
];
