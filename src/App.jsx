import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import TestRedux from './pages/TestRedux';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home funcionando</h1>}/>
        <Route path="/teste" element={<TestRedux/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
