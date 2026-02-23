export default function Cart({totalAmt, cart, removeFromCart}) {
  return(
    <div>
      <h4>Cart: </h4>
      {/* {cart.map((element, index) => 
      <span>
        {element.price} {element.name}
      </span>
      <button>Remove From Cart</button>)} */}
      <p>Total amount: {totalAmt}</p>
    </div>
  );
}