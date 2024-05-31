import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  return (
    <div className=''>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Navbar /> */}
      <Post />
    </div>
  );
}

export default App;
