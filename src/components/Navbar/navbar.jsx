import styles from  "./navbar.module.css"

const Navbar = () => {
  return <nav className={styles.container}>
    <p onClick={() => alert("Click!")}>Inicio</p>
    <p>Sobre Nosotros</p>
    <p>Contactos</p>
    <p>Carrito de Compra</p>
    <p>Productos</p>
    </nav>
}

export default Navbar