
import { Outlet } from 'react-router';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';

import './App.css';

export default function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    // it is a component from context usecontext
    // <ThemeContext.Provider value={[isDark, setIsDark]}>  
     // theme={[isDark, setIsDark]}
     <ThemeProvider>
      <Header />
      <Outlet />
      </ThemeProvider>
  )
}
