import { Delete, Edit, PlayArrow } from "@mui/icons-material";
import { Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allQuestions } from "../stub_db/stub_data_questions";
import {
  selectedQuizIdAction,
  selectedQuizQuestionsAction,
} from "../store/quizSlice";

export const Quiz = ({ quizId }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const playQuiz = () => {
    dispatch(selectedQuizIdAction(quizId));
    dispatch(
      selectedQuizQuestionsAction(
        allQuestions.filter((x: any) => x.quizId === quizId),
      ),
    );
    navigate("/play-quiz");
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mb: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack
        spacing={5}
        direction={"row"}
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        <Stack
          spacing={1}
          direction={"column"}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Typography variant="h6">Quiz - {quizId}</Typography>
          <Typography variant="body2">React</Typography>
        </Stack>
        <Tooltip title="Play Quiz">
          <PlayArrow
            onClick={playQuiz}
            sx={{
              "&:hover": { bgcolor: "action.hover" },
            }}
          />
        </Tooltip>
      </Stack>
      <Stack
        spacing={5}
        direction={"row"}
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        <Tooltip title="Edit Quiz">
          <Edit />
        </Tooltip>
        <Tooltip title="Delete Quiz">
          <Delete />
        </Tooltip>
      </Stack>
    </Paper>
  );
};
