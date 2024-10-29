import logo from './logo.svg';
import './App.css';
import Article from './Article';
import Employee from './Employee';
import Ads from './Ads';
import Post from './Post';

function App() {
  return (
    <div className="App">
     {/* <Article title="Article 1"/>
     <Employee empname="Harshith" salary={1000} />
     <Employee />
     <Ads brand="Tech Companies" budget={5000}/> */}
     <Post/>
    </div>
  );
}

export default App;
