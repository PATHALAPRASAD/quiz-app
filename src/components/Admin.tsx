import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Quiz } from "./Quiz";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Admin = () => {
  const navigate = useNavigate();
  const allQuizIds = useSelector((state: any) => state.quiz.allQuizIds);
  const allQuizCategories = useSelector(
    (state: any) => state.quiz.allQuizCategories,
  );
  const allQuestions = useSelector((state: any) => state.quiz.allQuestions);

  const [tech, setTech] = useState("");
  const [filteredQuizIds, setFilteredQuizIds] = useState(allQuizIds);

  const handleDropdownChange = (_event: any, value: any) => {
    setTech(value);
    if (value) {
      const selectedQuizCategoryIdByTech: any = allQuizCategories.find(
        (x: any) => x.tech === value,
      )?.id;
      const quizIdsSelectedQuizCategoryId: any[] = allQuestions
        .filter((y: any) => y.quizCategoryId === selectedQuizCategoryIdByTech)
        .map((z: any) => z.quizId);

      setFilteredQuizIds(
        allQuizIds.filter((x: any) =>
          quizIdsSelectedQuizCategoryId.includes(x),
        ),
      );
    } else {
      setFilteredQuizIds([...allQuizIds]);
    }
  };

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
        <Autocomplete
          options={allQuizCategories.map((c: any) => c.tech)}
          renderInput={(params) => <TextField {...params} label="Tech" />}
          value={tech}
          onChange={(_event, newValue) =>
            handleDropdownChange(_event, newValue)
          }
          freeSolo
          sx={{
            textAlign: "center",
            mx: 10,
            my: 2,
            width: "200px",
          }}
        />
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
        {filteredQuizIds.map((q: any) => (
          <Quiz key={q} quizId={q} />
        ))}
      </Stack>
    </Paper>
  );
};
