import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import TodoWrapper from './components/TodoWrapper';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<TodoWrapper />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
