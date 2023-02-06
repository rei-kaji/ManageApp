import { Home } from "@mui/icons-material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { CastAgency, Posts, Users } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/cast-agency" element={<CastAgency />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
