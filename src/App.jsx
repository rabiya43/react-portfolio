// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { PageTitleProvider } from './context/PageTitleContext';
import ThemeContextProvider from './context/ThemeContext'; // 🌗 Theme Context
import ErrorBoundary from './components/ErrorBoundary';    // ⚠️ Error Boundary

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));

function App() {
  return (
    <ThemeContextProvider> {/* 🌗 Provides MUI Theme */}
      <CssBaseline />      {/* MUI resets CSS */}
      <PageTitleProvider>
        <Router>
          <div className="app-container">
            <Header />
            <div className="main-wrapper">
              <SideNav />
              <main className="main-content">
                <ErrorBoundary> {/* ⚠️ Wrap routes in ErrorBoundary */}
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/education" element={<Education />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/experience" element={<Experience />} />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
            </div>
            <Footer />
          </div>
        </Router>
      </PageTitleProvider>
    </ThemeContextProvider>
  );
}

export default App;
