import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Question } from "./Question";
// import { allQuestions } from "../stub_db/stub_data_questions";
import { useSelector } from "react-redux";

export const PlayQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const selectedQuizId: any = useSelector(
    (state: any) => state.quiz.selectedQuizId,
  );
  const selectedQuizQuestions: any = useSelector(
    (state: any) => state.quiz.selectedQuizQuestions,
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="primary">
          Quiz - {selectedQuizId}
        </Typography>
        <Typography>{selectedQuizQuestions[0].tech}</Typography>
      </Stack>

      {
        // allQuestions
        //   .filter((q: any) => q.quizId === selectedQuizId)
        selectedQuizQuestions.map((q: any) => (
          <Question
            key={q.id}
            {...q}
            onAnswerChange={handleAnswerChange}
            currentValue={answers[q.id]}
          />
        ))
      }
    </Paper>
  );
};
