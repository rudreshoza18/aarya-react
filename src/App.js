// import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo.jsx';
import Test from './components/Test';
function App() {
  console.debug('APP JS')
  let data = "Hi I'm developer"
  const fakeData = [
    {
      "color": "red",
      "value": "#f00"
    },
    {
      "color": "green",
      "value": "#0f0"
    },
    {
      "color": "blue",
      "value": "#00f"
    },
    {
      "color": "cyan",
      "value": "#0ff"
    },
    {
      "color": "magenta",
      "value": "#f0f"
    },
    {
      "color": "yellow",
      "value": "#ff0"
    },
    {
      "color": "black",
      "value": "#000"
    },
    {
      "color": "yellow",
      "value": "cyan"
    }
  ]
  
  return (
    <>  
    <h1>HI</h1>
      <Demo data={fakeData}/>
      {/* <Test/> */}
    </>
  );
}

export default App;
