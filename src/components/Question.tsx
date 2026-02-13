import React from "react";
import {
  Paper,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { QuestionProps } from "../types/types";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allQuestionsAction } from "../store/quizSlice";
import { BASE_URL } from "../constants/constants";

// const createMode: boolean = true;

export const Question: React.FC<QuestionProps> = ({
  id,
  questionText,
  options,
  onAnswerChange,
  currentValue,
  questionNumber,
  createMode = false,
  isSubmitted = false,
  answer,
}: any) => {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state: any) => state.quiz.allQuestions);

  const handleDelete = async () => {
    try {
      const url: string = `${BASE_URL}/api/questions/${id}`;
      const res: any = await axios.delete(url);
      console.log({ res });
      if (res.data.id > 0) {
        dispatch(
          allQuestionsAction(allQuestions.filter((x: any) => x.id !== id)),
        );
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleEdit = async () => {
    // try {
    //   const request: any = {};
    //   const url: string = `${BASE_URL}/api/questions/${id}`;
    //   const res: any = await axios.put(url, request);
    //   if (res.data.length > 0) {
    //     dispatch(allQuestionsAction([...res.data]));
    //   }
    // } catch (error) {
    //   console.log({ error });
    // }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        mb: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box mb={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="legend" sx={{ fontWeight: 600 }}>
          {questionNumber}. {questionText}
        </Typography>
        {createMode && (
          <Stack spacing={2} direction={"row"}>
            <Edit onClick={handleEdit} />
            <Delete onClick={handleDelete} />
          </Stack>
        )}
      </Box>

      <FormControl component="fieldset" variant="standard" fullWidth>
        <RadioGroup
          aria-labelledby={id}
          name={id}
          value={currentValue || ""}
          onChange={(e) => onAnswerChange(id, e.target.value)}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            {options.map((option: any, index: number) => (
              <Grid
                // size={{ xs: 12, sm: 6 }}
                size={{ xs: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
                key={index}
              >
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio color="primary" />}
                  label={option}
                  sx={{
                    my: 0.5,
                    p: 1,
                    borderRadius: 1,
                    "&:hover": { bgcolor: "action.hover" },
                    transition: "background-color 0.2s",
                    // Highlights selected row
                    bgcolor:
                      currentValue === option ? "primary.50" : "transparent",
                    width: "100%",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>

      {isSubmitted && (
        <Stack spacing={2} direction={"row"}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "start",
              px: 1,
              py: 2,
              fontStyle: "italic",
              fontWeight: "bold",
              // bgcolor: "lightgray",
            }}
          >
            Answer:{" "}
          </Typography>
          <Typography
            variant="h6"
            color="success"
            sx={{ textAlign: "start", py: 2, fontWeight: "bold" }}
          >
            {answer}
          </Typography>
        </Stack>
      )}
    </Paper>
  );
};
