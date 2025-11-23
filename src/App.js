import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Box } from '@mui/material';

// Import pages
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B71C1C', // Deep red - reminiscent of red chili
      light: '#F44336',
      dark: '#7F0000',
    },
    secondary: {
      main: '#4CAF50', // Bright green - like fresh herbs
      light: '#81C784',
      dark: '#388E3C',
    },
    background: {
      default: '#E8F5E9', // Light green background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3E2723', // Deep brown - like cinnamon
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#3E2723',
    },
    h2: {
      fontWeight: 600,
      color: '#3E2723',
    },
    h3: {
      fontWeight: 600,
      color: '#3E2723',
    },
    h4: {
      fontWeight: 600,
      color: '#3E2723',
    },
    h5: {
      fontWeight: 600,
      color: '#3E2723',
    },
    h6: {
      fontWeight: 600,
      color: '#3E2723',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/">
        <ScrollToTop />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Features />
                  </>
                }
              />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
