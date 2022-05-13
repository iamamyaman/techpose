import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Header from "./components/Header";
import Watch from './components/Watch';
import Pages from './components/Pages';
import Groups from './components/Groups';
import Gaming from './components/Gaming';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pages" element={<Pages />} />
         <Route path="/watch" element={<Watch />} />
         <Route path="/groups" element={<Groups />} />
         <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </div>
  );
}

export default App;
