import './App.css'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header';
import ItemList from './components/ItemList/itemlist';

function App() {
  const handleClick = (name) => {
    alert("Al clickear aca, te llevaria a los productos de la categoria: " + name);
  }

  return (
      <div>
        <h1>TreKIT</h1>
        <Navbar />
        <Header />
        <ItemList />
      </div>
  )
}

export default App
