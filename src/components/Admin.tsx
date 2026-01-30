import { Add } from "@mui/icons-material";
import { Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Quiz } from "./Quiz";
import { useSelector } from "react-redux";

export const Admin = () => {
  const navigate = useNavigate();
  const allQuizIds = useSelector((state: any) => state.quiz.allQuizIds);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" p={2}>
          Quizzes List
        </Typography>
        <Tooltip title="Add Quiz">
          <Add
            sx={{ border: "1px solid" }}
            onClick={() => navigate("/create-quiz")}
          />
        </Tooltip>
      </Stack>

      <Stack spacing={2} direction={"column"}>
        {allQuizIds.map((q: any, qIndex: number) => (
          <Quiz key={qIndex} quizId={q} />
        ))}
      </Stack>
    </Paper>
  );
};
