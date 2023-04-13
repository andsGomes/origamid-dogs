import React from "react";

import './App.css'; 

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login/Login";
import { User } from "./Components/User";

import { UserStorage } from './UserContext';
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";


function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
