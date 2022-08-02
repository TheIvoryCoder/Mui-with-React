import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="App">
      <h1>Material UI with React.JS</h1>
      <Button variant="contained" style={{
        backgroundColor: '#FF005D',
        padding: '10px'
      }}>Click Me!</Button>
      <AddIcon />

    </div>
  );
}

export default App;
