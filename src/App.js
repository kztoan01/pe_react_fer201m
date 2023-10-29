import logo from './logo.svg';
import './App.css';
//import cac component vao app.js
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllStaffs from './components/AllStaffs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={
            <AllStaffs />
          } />
        </Routes>
        <Routes>
          <Route path='/dashboard' element={
            <Dashboard />
          } />
        </Routes>

        {/* duong dan den trang detail */}
        <Routes>
          <Route path='/detail/:id' element={
            <Detail />
          } />
        </Routes>


        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
