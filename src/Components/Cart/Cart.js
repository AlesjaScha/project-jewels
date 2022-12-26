import { getCartItems,getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () =>{
const cartItems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice);

    return(<div>
    <div className="photo">
        <img className="iconCart"src="https://img.icons8.com/external-wanicon-flat-wanicon/512/external-cart-gift-box-wanicon-flat-wanicon.png"alt="bild"/>
     </div>

        
        <div className="item" >
            <h3>TOTAL: CHF {totalPrice}</h3>
        </div>
        {cartItems.map((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}
        
    </div>
    
    )
}
export default Cart;