import { Delete, Edit, PlayArrow } from "@mui/icons-material";
import { Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectedQuizIdAction,
  selectedQuizQuestionsAction,
} from "../store/quizSlice";
import axios from "axios";

const quizList: any[] = [1, 2];

export const Quiz = ({ quizId }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getQuestionsByQuizId = async () => {
    const url: string =
      "http://localhost:6004/api/questions/byQuizId/" + quizId;
    const res: any = await axios.get(url);
    console.log({ res });
    if (res.data.length > 0) {
      dispatch(selectedQuizQuestionsAction([...res.data]));
    }
  };

  const playQuiz = () => {
    getQuestionsByQuizId();
    dispatch(selectedQuizIdAction(quizId));
    dispatch(
      selectedQuizQuestionsAction(
        quizList.filter((x: any) => x.quizId === quizId),
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
