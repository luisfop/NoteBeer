import { Box, Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useStyles from './AppStyle';
import routes from './routes/routes';

function App() {

  const classes = useStyles();
  return (
    <Box>
      <Grid container >
        <Box className={classes.container} >
          <BrowserRouter>
            <Routes>
              {routes.map(({ path, element: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </BrowserRouter>
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
