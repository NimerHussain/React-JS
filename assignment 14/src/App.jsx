import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
import GitHubUserFinder from './Components/GitHubUserFinder';
import './App.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/github" element={<GitHubUserFinder />} />
      </Routes>
    
  );
}

export default App;
