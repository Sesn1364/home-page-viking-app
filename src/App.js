// ./App
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/home/Home';

function App() {
  return (
    <LanguageProvider>
      <Home/>
    </LanguageProvider>
  );
}

export default App;
