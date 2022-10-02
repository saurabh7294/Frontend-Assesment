import './App.css';
import Landing from './landing';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Routes } from "react-router";
import Create from './create';
import Event from './event';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </Router>
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
