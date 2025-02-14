import React from "react";
import {
  Box,
  Card,
  Typography,
  Chip,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";
import { Add, Visibility, Edit, Delete } from "@mui/icons-material";
import TaskModal from "./modals/TaskModal";
import { useDispatch } from "react-redux";
import { handleTaskPopup } from "../redux/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box p={3} pt={0}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Total Tasks (1)
          </Typography>
          <Button variant="contained" color="success">
            + New Task
          </Button>
        </Box>

        {/* Filters */}
        <Box mt={2} display="flex" gap={1} flexWrap="wrap">
          {[
            { label: "All Tasks", count: 1, color: "success" },
            { label: "Today", count: 0, color: "error" },
            { label: "This Week", count: 0, color: "info" },
            { label: "Due Next Week", count: 0, color: "success" },
            { label: "In-progress", count: 0, color: "warning" },
            { label: "In QA", count: 0, color: "secondary" },
            { label: "To do", count: 1, color: "success" },
            { label: "Overdue", count: 0, color: "error" },
          ].map((chip) => (
            <Chip
              key={chip.label}
              label={`${chip.label} (${chip.count})`}
              color={chip.color}
              variant={chip.count > 0 ? "filled" : "outlined"}
            />
          ))}
        </Box>

        {/* Task Item */}
        <Card sx={{ mt: 2, p: 2 }}>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Box flexGrow={1}>
              <Typography variant="subtitle1" fontWeight="bold">
                #new1
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                sx={{ textDecoration: "underline", cursor: "pointer", mb: 1 }}
                onClick={() => dispatch(handleTaskPopup(true))}
              >
                Test Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                📅 Due in 11 days, 26th Feb &nbsp;&nbsp; ⏳ Medium
              </Typography>
            </Box>
            <Chip label="Not Started" variant="outlined" />
            <Box display="flex" ml={2}>
              <IconButton>
                <Add />
              </IconButton>
              <IconButton>
                <Visibility />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton color="error">
                <Delete />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Box>
      <TaskModal />
    </>
  );
};

export default TaskList;
