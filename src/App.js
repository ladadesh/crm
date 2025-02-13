import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskView from "./components/TaskView";
import "./App.css";
// import Signup from "./pages/Signup";

const AppLayout = () => {
  const location = useLocation();
  const hideSidebar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideSidebar && <Header />}
      <Box
        sx={{ display: "flex", backgroundColor: "#f5f5f9", height: "100vh" }}
      >
        <CssBaseline />
        {!hideSidebar && <Sidebar />}
        <Box component="main" sx={{ flexGrow: 1, paddingX: 3, paddingY: 0 }}>
          <Toolbar />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/task" element={<TaskView />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
        </Box>
      </Box>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  );
};

export default App;
