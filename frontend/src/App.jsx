import './App.css';

import Layout from './Layout';
import Post from './Post';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={'/login'} element={<div>login page</div>} />
        <Route path={'/register'} element={<div>register</div>} />
      </Route>
    </Routes>
  );
}
export default App;
