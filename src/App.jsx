import './App.css'
import Navbar from './components/Navbar/navbar'
import Button from './components/Button/button';
import Header from './components/Header/header';

function App() {
  const handleClick = (name) => {
    alert('Click me! on ' + name);
  }
  return (
      <div>
        <Navbar />
        <Header />
        <Button text="Home" number={0} handleClick={handleClick}/>
        <Button text="Contactanos" handleClick={handleClick}/>
        <Button text="Carrito de Compra" handleClick={handleClick} />
        <Button text="Productos" handleClick={handleClick}/>
        <h1>My App</h1>
      </div>


  );
}

export default App
