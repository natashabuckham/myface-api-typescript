import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import NavBar from './NavBar/NavBar'
import PostList from './PostList/PostList'
import UserList from './UserList/UserList'
import UserDetail from './UserDetail/UserDetail'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route path="/posts" element={<PostList/>}/>
        <Route path="/users" element={<UserList />}/>
        <Route path="/users/:id" element={<UserDetail />}/>
        <Route path="*" element={<div>
            Sorry - that page doesn't exist, try these:
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
        </div>}/>
      </Routes>
    </Router>
  )
}

export default App
