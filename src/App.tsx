import { ROUTES } from '@constants/app';
import MainLayout from '@layouts/MainLayout';
import GlobalStyles from '@styles/GlobalStyles';
import { getDesignTokens } from '@styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={getDesignTokens('dark')}>
      <GlobalStyles />
      <MainLayout>
        <BrowserRouter>
          <Routes>
            {ROUTES.map((route) => {
              const Page = route.element;
              return (
                <Route path={route.path} element={<Page />} key={route.path} />
              );
            })}
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
