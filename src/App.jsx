import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import TestRedux from "./pages/TestRedux";
import ProposalPage from "./pages/ProposalPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<ProposalPage />} />
        <Route path="/teste" element={<TestRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
