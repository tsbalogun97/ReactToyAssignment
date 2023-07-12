import logo from './logo.svg';
import './App.css';
import toyobject from './models/toyobject';
import Toys from './components/Toys';
import Title from './components/Title';

const state = {
  toyobject
  

}

function App() {
  return (
    <div className="App">
      <Title/>
      <Toys tagInfo={state.toyobject[0]}/>
      <Toys tagInfo={state.toyobject[1]}/>
      <Toys tagInfo={state.toyobject[2]}/>
    </div>
  );
}

export default App;
