import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksAsync, handleTaskPopup } from "../redux/taskSlice";
import { formatDate, getDateDifference } from "../utils";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasksAsync()); // Fetch tasks on mount
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

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
        {tasks?.map((item, index) => (
          <Card sx={{ mt: 2, p: 2 }} key={index}>
            <Box display="flex" alignItems="center">
              <Checkbox />
              <Box flexGrow={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item?.taskId}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer", mb: 1 }}
                  onClick={() => dispatch(handleTaskPopup(true))}
                >
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📅 Due in {getDateDifference(item?.deadline, item?.createdAt)}{" "}
                  days, {formatDate(item?.deadline)} &nbsp;&nbsp; ⏳ Medium
                </Typography>
              </Box>
              <Chip label={item?.statusName} variant="outlined" />
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
        ))}
      </Box>
      <TaskModal />
    </>
  );
};

export default TaskList;
