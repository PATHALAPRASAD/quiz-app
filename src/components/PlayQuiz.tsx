import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Question } from "./Question";
import { useSelector } from "react-redux";

export const PlayQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const selectedQuizId: any = useSelector(
    (state: any) => state.quiz.selectedQuizId,
  );
  const selectedQuizQuestions: any = useSelector(
    (state: any) => state.quiz.selectedQuizQuestions,
  );
  const allQuizCategories: any = useSelector(
    (state: any) => state.quiz.allQuizCategories,
  );

  const handleAnswerChange = (questionId: string, choice: string) => {
    setAnswers((x: any) => ({ ...x, [questionId]: choice }));
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 5,
        m: 1,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack
        spacing={2}
        direction={"row"}
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="primary">
          Quiz - {selectedQuizId}
        </Typography>
        <Typography>
          {
            allQuizCategories.find(
              (x: any) => x.id === selectedQuizQuestions[0]?.quizCategoryId,
            )?.tech
          }
        </Typography>
      </Stack>

      {selectedQuizQuestions.map((question: any, questionIndex: number) => (
        <Question
          key={question.id}
          questionNumber={questionIndex + 1}
          {...question}
          onAnswerChange={handleAnswerChange}
          currentValue={answers[question.id]}
        />
      ))}
    </Paper>
  );
};
