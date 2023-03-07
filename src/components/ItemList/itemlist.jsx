
function itemlist() {
    const productos = ["Paneles Solares","Generadores Eolicos","Hidrogeneradores","Pisos Flotantes"]
    const listar = productos.map((productos) =>
        <li>{productos}</li>
    );
    const handleClick = () => {
        alert("Al clickear aca, te llevaria a los productos");
      }
  return (
    <ul onClick={handleClick}>{listar}</ul>
  )
}

export default itemlist