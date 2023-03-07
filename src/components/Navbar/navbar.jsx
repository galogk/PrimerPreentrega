import styles from  "./navbar.module.css"
import CartWidget from "../CartWidget/cartwidget.jsx"

const Navbar = () => {
  return <nav className={styles.container}>
    <p onClick={() => alert("Estarías entrando a la pagina conteniendo el html para: Inicio")}>Inicio</p>
    <p onClick={() => alert("Estarías entrando a la pagina conteniendo el html para: Informacion sobre nosotros")}>Sobre Nosotros</p>
    <p onClick={() => alert("Estarías entrando a la pagina conteniendo el html para: Nuestros contactos")}>Contactos</p>
    <p onClick={() => alert("Ya te encuentras en esta pagina.")}>Productos</p>
    <CartWidget number={6} />
    <div>6</div>
    </nav>
}

export default Navbar