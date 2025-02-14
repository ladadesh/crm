import React from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Chip,
  Grid,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Modal,
  IconButton,
} from "@mui/material";
import { AccessTime, Flag, Comment, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { handleTaskPopup } from "../../redux/taskSlice";

const TaskModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.tasks.isOpen);

  return (
    <>
      {/* Modal */}
      <Modal open={open} onClose={() => dispatch(handleTaskPopup(false))}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "80vw",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => dispatch(handleTaskPopup(false))}
          >
            <Close />
          </IconButton>

          {/* Task Details */}
          <Grid container spacing={2}>
            {/* Left Section */}
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                  Test Title
                </Typography>
                <Box display="flex" alignItems="center" gap={2} mt={1}>
                  <TextField size="small" placeholder="Assigned to" />
                  <Chip
                    icon={<Flag sx={{ color: "#F39C12" }} />}
                    label="Medium"
                    sx={{
                      color: "#F39C12",
                      backgroundColor: "#fff2db",
                      padding: 1,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" gap={1} mt={2}>
                  <Chip
                    icon={<AccessTime sx={{ color: "#6c63ff" }} />}
                    label="Due in 12 days, 26th Feb"
                    sx={{ color: "#6c63ff", backgroundColor: "#ecebff" }}
                  />
                  <Button variant="outlined" size="small">
                    Not Started
                  </Button>
                </Box>

                <Typography variant="h6" sx={{ mt: 3 }}>
                  Description
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="green">
                  Task Detail:
                </Typography>
                <Typography variant="body2">Test Description</Typography>
                <Typography variant="body2" fontWeight="bold" color="green">
                  Expected Results:
                </Typography>
                <Typography variant="body2">
                  Test Results to be completed.
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="green">
                  Additional Information:
                </Typography>
                <Typography variant="body2">
                  Additional Test Results to be submitted.
                </Typography>

                <Divider sx={{ my: 2 }} />
                <Button variant="outlined" size="small">
                  Sub-tasks (0)
                </Button>

                <Box display="flex" alignItems="center" gap={1} mt={2}>
                  <Comment sx={{ color: "#6c63ff" }} />
                  <TextField fullWidth size="small" placeholder="Add comment" />
                </Box>

                <Box display="flex" gap={1} mt={2}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1ea389" }}
                  >
                    Comments
                  </Button>
                  <Button variant="outlined">Timeline</Button>
                  <Button variant="outlined">All</Button>
                </Box>
              </Card>
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, height: "100%" }}>
                <Typography variant="h6">Additional Details</Typography>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    Project
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    new
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    Category
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    test
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    Time allocated
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    0 h 0 m
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    Time spent
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    0 h 0 m
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    Reporter
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Adesh
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    Dashboard
                  </Typography>
                  <FormControl fullWidth size="small">
                    <InputLabel>Select Dashboard</InputLabel>
                    <Select disabled>
                      <MenuItem value="">Select Dashboard</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default TaskModal;
