import './App.css';
import SceduleTable from './components/SceduleTable';
import {Routes,Route} from 'react-router-dom'
import BookAppointment from './components/BookAppointment';

function App() {
  return (
    <div className="App">
      <h1>Online Doctor Appointment Management System</h1>
      <Routes>
        <Route path='/' element={<SceduleTable/>}/>
        <Route path="/book_appointment" element={<BookAppointment/>} />
      </Routes>
    </div>
  );
}

export default App;
