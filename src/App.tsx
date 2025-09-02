import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Login = lazy(()=>import('./components/auth/Login'))
const NotFound = lazy(()=>import('./components/auth/NotFound'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>)
}

export default App