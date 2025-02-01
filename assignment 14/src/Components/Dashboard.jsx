import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const MainPage = () => {
  const buttons = [
    { label: 'Products', to: '/products', color: 'primary' },
    { label: 'Users', to: '/users', color: 'secondary' },
    { label: 'GitHub User Finder', to: '/github', color: 'success' },
  ];

  return (
    <Container>
      <Box sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Choose a section to explore
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {buttons.map((button, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component={Link}
                  to={button.to}
                  variant="contained"
                  color={button.color}
                  fullWidth
                  sx={{ py: 3, fontSize: '1.2rem' }}
                >
                  {button.label}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MainPage;