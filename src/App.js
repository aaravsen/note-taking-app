import './App.scss';
import ClassComponent from './components/class-component';
import FunctionalComponent from './components/functional-component';
import FunctionalComponentWithProps from './components/functional-component-with-props';

function App() {
  return (
    <div className="App">
     <ClassComponent />
     <FunctionalComponent />
     <FunctionalComponentWithProps name="Rishi" />
    </div>
  );
}

export default App;
