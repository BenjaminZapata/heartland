import './App.scss';
import { Route } from 'wouter'
import Home from './pages/home/Home';
import PropertyInfo from './pages/propertyInfo/PropertyInfo';

function App() {
  return (
    <>
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={PropertyInfo}
        path='/property/:id'
      />
    </>
  );
}

export default App;
