// src/App.jsx
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './routes'; // Import the routes file
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter> {/* Wrap your routes with BrowserRouter */}
      <div className="App">
        <AppRoutes /> {/* Render the routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;
