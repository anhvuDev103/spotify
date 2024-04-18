import GlobalStyles from '@styles/GlobalStyles';
import { getDesignTokens } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={getDesignTokens('dark')}>
      <GlobalStyles />
      Ahihi
    </ThemeProvider>
  );
}

export default App;
