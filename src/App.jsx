import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import TestRedux from './pages/TestRedux';
import ProposalPage from './pages/ProposalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home funcionando</h1>}/>
        <Route path="/proposal" element={<ProposalPage/>}/>
        <Route path="/teste" element={<TestRedux/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
