import React from "react";

import './App.css'; 

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login/Login";

import { UserStorage } from './UserContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
