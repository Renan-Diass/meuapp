// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Theme from './pages/theme';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';  // Adicione um arquivo CSS para o App

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="theme/*" element={<Theme />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
