import React from "react";
import {
  Box,
  Card,
  CardContent,
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
} from "@mui/material";
import { AccessTime, Flag, Comment } from "@mui/icons-material";

const TaskView = () => {
  return (
    <Box sx={{ minHeight: "80vh", p: 0 }}>
      <Grid container spacing={3}>
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
              <Button variant="contained" sx={{ backgroundColor: "#1ea389" }}>
                Comments
              </Button>
              <Button variant="outlined">Timeline</Button>
              <Button variant="outlined">All</Button>
            </Box>
          </Card>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6">Additional Details</Typography>
            <Box mt={2}>
              <Typography variant="body2" fontWeight="bold">
                Project
              </Typography>
              <Typography variant="body2" color="textSecondary">
                new
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body2" fontWeight="bold">
                Category
              </Typography>
              <Typography variant="body2" color="textSecondary">
                test
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body2" fontWeight="bold">
                Time allocated
              </Typography>
              <Typography variant="body2" color="textSecondary">
                0 h 0 m
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body2" fontWeight="bold">
                Time spent
              </Typography>
              <Typography variant="body2" color="textSecondary">
                0 h 0 m
              </Typography>
            </Box>
            <Box mt={2}>
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
  );
};

export default TaskView;
