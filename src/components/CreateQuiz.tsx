import { AddOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Question } from "./Question";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allQuestionsAction, allQuizIdsAction } from "../store/quizSlice";
import { BASE_URL, QUIZ_SIZE } from "../constants/constants";

const initialInputData: any = {
  questionText: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  answer: "",

  // questionText: "questionText",
  // option1: "option1",
  // option2: "option2",
  // option3: "option3",
  // option4: "option4",
  // answer: "option2",
};

export const CreateQuiz = () => {
  const dispatch = useDispatch();

  const allQuizCategories = useSelector(
    (state: any) => state.quiz.allQuizCategories,
  );
  const allQuizIds = useSelector((state: any) => state.quiz.allQuizIds);
  const allQuestions = useSelector((state: any) => state.quiz.allQuestions);

  const [open, setOpen] = useState<boolean>(false);
  const [inputData, setInputData] = useState<any>(initialInputData);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [tech, setTech] = useState<string>("");
  const [filteredQuestions, setFilteredQuestions] =
    useState<any[]>(allQuestions);

  useEffect(() => {
    if (tech) {
      const selectedQuizCategoryIdByTech: any = allQuizCategories.find(
        (x: any) => x.tech === tech,
      )?.id;
      setFilteredQuestions(
        allQuestions.filter(
          (x: any) => x.quizCategoryId === selectedQuizCategoryIdByTech,
        ),
      );
    }
  }, [tech]);

  const handleTextChange = (e: any) => {
    const { name, value } = e.target;
    setInputData((x: any) => ({ ...x, [name]: value }));
  };

  const handleDropdownChange = (_event: any, value: any) => {
    setTech(value);
    const selectedQuizCategoryIdByTech: any = allQuizCategories.find(
      (x: any) => x.tech === value,
    )?.id;
    if (value) {
      setFilteredQuestions(
        allQuestions.filter(
          (x: any) => x.quizCategoryId === selectedQuizCategoryIdByTech,
        ),
      );
    } else {
      setFilteredQuestions(allQuestions);
    }
  };

  const handleSave = async () => {
    const selectedQuizCategoryIdByTech: any = allQuizCategories.find(
      (x: any) => x.tech === tech,
    )?.id;
    const quizIdsBySelectedQuizCategoryId: any[] = allQuestions
      .filter((y: any) => y.quizCategoryId === selectedQuizCategoryIdByTech)
      .map((z: any) => z.quizId);
    console.log({ selectedQuizCategoryIdByTech });
    console.log({ quizIdsBySelectedQuizCategoryId });

    const maxQuizId: number = Math.max(...quizIdsBySelectedQuizCategoryId);
    const maxQuizIdsCount = quizIdsBySelectedQuizCategoryId.filter(
      (x: number) => x === maxQuizId,
    ).length;

    console.log({ maxQuizIdsCount });

    const options: string[] = [
      inputData.option1,
      inputData.option2,
      inputData.option3,
      inputData.option4,
    ];
    let request: any = {
      id: Math.max(...allQuestions.map((x: any) => x.id)) + 1,
      questionText: inputData.questionText,
      options,
      answer: inputData.answer,
      quizCategoryId: selectedQuizCategoryIdByTech,
    };

    if (maxQuizIdsCount !== 0 && maxQuizIdsCount < QUIZ_SIZE) {
      // adding question to existing quiz
      request.quizId = Math.max(...quizIdsBySelectedQuizCategoryId);
    } else {
      // creating new quiz
      request.quizId = Math.max(...allQuizIds) + 1;
    }
    try {
      const url: string = `${BASE_URL}/api/questions`;
      const res: any = await axios.post(url, request);
      console.log("res.data.id : ", res.data.id);
      if (res.data.id > -1) {
        console.log("log add question success");
        dispatch(allQuestionsAction([...allQuestions, res.data]));
        if (!allQuizIds.includes(request.quizId)) {
          dispatch(allQuizIdsAction([...allQuizIds, request.quizId]));
        }
        setInputData(initialInputData);
      }
    } catch (error) {
      console.log({ error });
    }
    setOpen(false);
  };

  const handleAnswerChange = (questionId: string, choice: string) => {
    setAnswers((prev: any) => ({ ...prev, [questionId]: choice }));
  };

  const addQuestion = () => {
    if (tech) {
      setOpen(true);
    } else {
    }
  };

  return (
    <Box sx={{ m: 5 }}>
      <Stack
        spacing={2}
        direction={"row"}
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "start",
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
        <Typography>Questions Count : {filteredQuestions.length}</Typography>
        <Tooltip title="Add Question">
          <AddOutlined
            sx={{ mr: 2, border: "1px solid", ":hover": { bgcolor: "cyan" } }}
            onClick={addQuestion}
          />
        </Tooltip>
      </Stack>

      {filteredQuestions.map((q: any) => (
        <Question
          key={q.id}
          q
          {...q}
          onAnswerChange={handleAnswerChange}
          currentValue={answers[q.id]}
          createMode={true}
        />
      ))}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        fullWidth
        keepMounted
        // slots={{ transition: Transition }}
      >
        <DialogTitle variant="h4">Question</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12 }}>
              <TextField
                id="questionText"
                name="questionText"
                label={"Question Text"}
                value={inputData.questionText}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option1"
                name="option1"
                label={"Option - 1"}
                value={inputData.option1}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option2"
                name="option2"
                label={"Option - 2"}
                value={inputData.option2}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option3"
                name="option3"
                label={"Option - 3"}
                value={inputData.option3}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option4"
                name="option4"
                label={"Option - 4"}
                value={inputData.option4}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="answer"
                name="answer"
                label={"Answer"}
                value={inputData.answer}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
