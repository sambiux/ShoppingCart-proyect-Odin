import addProduct from "/workspaces/ShoppingCart-proyect-Odin/src/assets/anadir.png"
import removeProduct from "/workspaces/ShoppingCart-proyect-Odin/src/assets/menosIcon.png"


function ProductCard({ item, cantidad, onAdd, onRemove, onBuy }) {
  return (
    <div className="products-info">
      <h3>{item.brand}</h3>
      <img src={item.image} alt="" />
      <p>{item.title}</p>
      <p>Price: {item.price}</p>

      <div className="cant-container">
        <img onClick={onRemove} src={removeProduct} alt="restar" />
        <p>{cantidad}</p>
        <img onClick={onAdd} src={addProduct} alt="sumar" />
      </div>

      <button onClick={onBuy}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;