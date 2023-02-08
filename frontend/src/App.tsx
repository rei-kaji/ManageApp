import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import { CastAgency, Index } from "./pages";
import CastAgency from "./pages/CastAgency";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import SubHeader from "./components/subHeader";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <SubHeader /> */}
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/post" element={<Posts />} /> */}
          <Route path="/cast-agency" element={<CastAgency />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
