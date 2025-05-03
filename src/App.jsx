import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <PageTitleProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="main-wrapper">
            <SideNav />
            <main className="main-content">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </PageTitleProvider>
  );
}

export default App;
