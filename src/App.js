import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import AppRouter from './configs/AppRouter';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <AppRouter />
     <Footer />
    </div>
  );
}

export default App;
