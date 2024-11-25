// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/product/Index'; // Adjust the import path accordingly
import Create from './pages/product/Create';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} /> {/* Home route */}
      <Route path="/create" element={<Create />} /> {/* Home route */}
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
