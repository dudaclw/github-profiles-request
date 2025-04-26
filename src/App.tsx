import { Routes, Route, Navigate } from 'react-router-dom';
import { StyledPage } from './pages/styled-page';
import { TailwindPage } from './pages/tailwind-page';
import { Navbar } from './components/navbar' ;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/styled" element={<StyledPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/" element={<StyledPage />} /> {/* Rota padrão */}
      </Routes>
    </>
  );
}

export default App;