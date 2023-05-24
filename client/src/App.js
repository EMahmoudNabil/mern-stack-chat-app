
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/ChatPage";
import Login from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import SetAvatar from "./components/SetAvatar"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
