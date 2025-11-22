import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Hide on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: scrolled ? 'rgba(255, 248, 225, 0.95)' : '#FFF8E1',
          color: '#3E2723',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: '64px', md: '72px' } }}>
            {/* Logo for desktop */}
            <Box
              component={Link}
              to="/"
              sx={{
                mr: 3,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                alignItems: 'center',
                position: 'relative',
                padding: '8px 16px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(183, 28, 28, 0.08) 0%, rgba(255, 143, 0, 0.08) 100%)',
                  borderRadius: '12px',
                  transform: 'skew(-10deg)',
                  transition: 'all 0.3s ease-in-out',
                },
                '&:hover': {
                  '&::before': {
                    transform: 'skew(-12deg) scale(1.05)',
                    background: 'linear-gradient(45deg, rgba(183, 28, 28, 0.12) 0%, rgba(255, 143, 0, 0.12) 100%)',
                  }
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <SpaIcon 
                  sx={{ 
                    fontSize: '2rem',
                    color: '#B71C1C',
                    filter: 'drop-shadow(0 2px 4px rgba(183, 28, 28, 0.2))',
                    transform: 'rotate(45deg)',
                  }} 
                />
                <RestaurantIcon
                  sx={{ 
                    ml: -1,
                    fontSize: '2rem',
                    color: '#FF8F00',
                    filter: 'drop-shadow(0 2px 4px rgba(255, 143, 0, 0.2))',
                    transform: 'rotate(-45deg)',
                  }} 
                />
              </Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #B71C1C 30%, #FF8F00 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '3px',
                  fontSize: '2.2rem',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.15)',
                  transform: 'scale(1, 1.05)',
                }}
              >
                Maans
                <Box component="span" 
                  sx={{ 
                    fontFamily: "'Cinzel Decorative', cursive",
                    fontStyle: 'normal',
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #FF8F00 30%, #B71C1C 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '2px',
                    transform: 'scale(1, 0.95)',
                  }}
                >
                  Spices
                </Box>
              </Typography>
            </Box>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: '#B71C1C',
                  '&:hover': {
                    backgroundColor: 'rgba(183, 28, 28, 0.04)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    backgroundColor: '#FFF8E1',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    borderRadius: '12px',
                    mt: 1,
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor: location.pathname === page.path ? 'rgba(183, 28, 28, 0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(183, 28, 28, 0.04)',
                      }
                    }}
                  >
                    <Typography 
                      textAlign="center"
                      sx={{
                        fontWeight: location.pathname === page.path ? 600 : 500,
                        color: location.pathname === page.path ? '#B71C1C' : 'inherit',
                      }}
                    >
                      <Link
                        to={page.path}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                textDecoration: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <SpaIcon 
                  sx={{ 
                    fontSize: '1.5rem',
                    color: '#B71C1C',
                    filter: 'drop-shadow(0 2px 4px rgba(183, 28, 28, 0.2))',
                    transform: 'rotate(45deg)',
                  }} 
                />
                <RestaurantIcon
                  sx={{ 
                    ml: -0.75,
                    fontSize: '1.5rem',
                    color: '#FF8F00',
                    filter: 'drop-shadow(0 2px 4px rgba(255, 143, 0, 0.2))',
                    transform: 'rotate(-45deg)',
                  }} 
                />
              </Box>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #B71C1C 30%, #FF8F00 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '2px',
                  fontSize: '1.6rem',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  transform: 'scale(1, 1.05)',
                }}
              >
                Maans
                <Box component="span" 
                  sx={{ 
                    fontFamily: "'Cinzel Decorative', cursive",
                    fontStyle: 'normal',
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #FF8F00 30%, #B71C1C 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '1px',
                    transform: 'scale(1, 0.95)',
                  }}
                >
                  Spices
                </Box>
              </Typography>
            </Box>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    mx: 1.5,
                    px: 2,
                    py: 1,
                    color: location.pathname === page.path ? '#B71C1C' : 'inherit',
                    display: 'block',
                    fontWeight: location.pathname === page.path ? 600 : 500,
                    position: 'relative',
                    fontSize: '0.95rem',
                    letterSpacing: '0.5px',
                    textTransform: 'none',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: location.pathname === page.path ? '100%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(45deg, #B71C1C 30%, #FF8F00 90%)',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#B71C1C',
                      '&::after': {
                        width: '100%',
                      }
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 