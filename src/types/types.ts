// types.ts
export interface QuestionProps {
  id: string;
  questionText: string;
  options: string[];
  onAnswerChange: (questionId: string, selectedOption: string) => void;
  currentValue?: string;
}
