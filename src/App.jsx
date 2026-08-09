
import './App.css'
import {Routes} from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";

function App() {

  return (
      <Routes>
        <Routes path="/" element={<ChatPage />} />
        <Routes path="/login" element={<LoginPage />} />
        <Routes path="/register" element={<RegisterPage />} />
      </Routes>

  )
}

export default App
