import React from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login/Login";
import { User } from "./Components/User";

import { UserStorage } from "./UserContext";
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";
import { Photo } from "./Components/Photo/Photos";
import { UserProfile } from "./Components/User/UserProfile";
import { NotFound } from "./Components/NotFound";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <UserStorage>
            <Header />
            <main className="appBody">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route
                  path="/photo/:id"
                  element={
                    <ProtectedRoute>
                      <Photo />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/conta/*"
                  element={
                    <ProtectedRoute>
                      <User />
                    </ProtectedRoute>
                  }
                />
                <Route path="perfil/:user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
