import './App.css';
import { useContext, useEffect, useState } from 'react';
import Content from './Components/Content';
import { theme } from './context/theme';
import { ThemeContext } from './context/ThemeProvider';
import NavigationBar from './Layout/NavigationBar';

const generateStyles = (mode) => ({
  app: {
    height: '100%',
    width: '100%',
    backgroundColor: theme[mode].backgroundColor,
    color: theme[mode].color
  }
})

function App() {
  const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(true);
  const { mode, setMode } = useContext(ThemeContext);

  const styles = generateStyles(mode);

  useEffect(() => {
    const theme = localStorage.getItem('mode');
    theme && setMode(theme);
  }, [setMode]);

  return (
    <div style={styles.app} className={mode}>
      <NavigationBar />
        <p>
          Edit <code>src/App.js</code>.
          Counter {counter}
        </p>
        <button className="w-1/2 mr-1 rounded-full px-2 py-1 leading-normal bg-blue-600 border border-grey text-white cursor-default pointer-events-none" onClick={() => setCounter(prevState => prevState+1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        
      {show ? <Content name="Mario" age={20}>
        <div>
          <p>
            Hello child!
          </p>
        </div>
        </Content> : 'Ni komponente'}

      <button onClick={() => setShow(prevState => !prevState)}>{show ? 'Skrij' : 'Prikaži'}</button>
      
      <button className="w-1/2 mr-1 rounded-full px-2 py-1 leading-normal bg-blue-600 border border-grey text-white cursor-default"
        onClick={() => {
          const newMode = mode === 'light' ? 'dark' : 'light';
          setMode(newMode);
          localStorage.setItem('mode', newMode);
        }}>
        Switch mode
        </button>
      <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
      </ul>
    </div>
  );
}

export default App;
