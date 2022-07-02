import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useStyles from './AppStyle';
import routes from './routes/routes';

function App() {

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Box className={classes.container} >
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
