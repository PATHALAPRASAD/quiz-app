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
} from "@mui/material";
import { QuestionProps } from "../types/types";

export const Question: React.FC<QuestionProps> = ({
  id,
  questionText,
  options,
  onAnswerChange,
  currentValue,
  questionNumber,
}: any) => {
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
      <Box mb={2} sx={{ display: "flex", justifyContent: "start" }}>
        <Typography variant="h6" component="legend" sx={{ fontWeight: 600 }}>
          {questionNumber}. {questionText}
        </Typography>
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
    </Paper>
  );
};
