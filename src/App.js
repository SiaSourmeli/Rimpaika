import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/home";
import WorkPage from "./pages/work-page";
import Biography from "./pages/biography";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router >
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/bio" element={<Biography />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
