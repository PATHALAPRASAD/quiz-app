import { AddOutlined } from "@mui/icons-material";
import {
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
} from "@mui/material";
import { useState } from "react";
import { Question } from "./Question";

const allQuestions: any[] = [];

const initialInputData: any = {
  tech: "",
  questionText: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  answer: "",
};

export const CreateQuiz = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputData, setInputData] = useState<any>(initialInputData);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [tech, setTech] = useState<string>("");
  const [isTechError, setIsTechError] = useState<boolean>(false);
  const [techErrorMessage, setTechErrorMessage] = useState<string>("");

  const handleTextChange = (e: any) => {
    const { name, value } = e.target;
    setInputData((x: any) => ({ ...x, [name]: value }));
  };

  const handleSave = () => {
    alert(JSON.stringify(inputData));
    setOpen(false);
  };

  const handleAnswerChange = (questionId: string, choice: string) => {
    setAnswers((prev: any) => ({ ...prev, [questionId]: choice }));
  };

  const addQuestion = () => {
    if (tech) {
      setOpen(true);
      setIsTechError(false);
      setTechErrorMessage("");
    } else {
      setIsTechError(true);
      setTechErrorMessage("Please enter Tech");
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
        <TextField
          id="tech"
          name="tech"
          label={"Tech"}
          value={tech}
          onChange={(e: any) => setTech(e.target.value)}
          error={isTechError}
          helperText={techErrorMessage}
        />
        <Tooltip title="Add Question">
          <AddOutlined
            sx={{ mr: 2, border: "1px solid", ":hover": { bgcolor: "cyan" } }}
            onClick={addQuestion}
          />
        </Tooltip>
      </Stack>

      {allQuestions.map((q: any) => (
        <Question
          key={q.id}
          q
          {...q}
          onAnswerChange={handleAnswerChange}
          currentValue={answers[q.id]}
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
                id="option_1"
                name="option_1"
                label={"Option - 1"}
                value={inputData.option1}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option_2"
                name="option_2"
                label={"Option - 2"}
                value={inputData.option2}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option_3"
                name="option_3"
                label={"Option - 3"}
                value={inputData.option3}
                fullWidth
                onChange={handleTextChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="option_4"
                name="option_4"
                label={"Option - 4"}
                value={inputData.option4}
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
