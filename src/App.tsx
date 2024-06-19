import 'overlayscrollbars/styles/overlayscrollbars.css';

import { ROUTES } from '@constants/app';
import MainLayout from '@layouts/MainLayout';
import { useRootStore } from '@stores/root';
import GlobalStyles from '@styles/GlobalStyles';
import { getDesignTokens } from '@styles/theme';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  const { initTokens } = useRootStore();

  useEffect(() => {
    initTokens();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={getDesignTokens('dark')}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => {
            const Page = route.element;
            return (
              <Route
                path={route.path}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
                }
                key={route.path}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
