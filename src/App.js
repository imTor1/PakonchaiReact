import './App.css';
import SigninPage from './Sign_in';
import SignUpPage from './Sign_up';
import AddEmployee from './AddEmployee';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SigninPage />} />
          <Route path='/Sign_in' element={<SigninPage />} />
          <Route path='/Sign_up' element={<SignUpPage />} />
          <Route path='/AddEmployee' element={<AddEmployee />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
