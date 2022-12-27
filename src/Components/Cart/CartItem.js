import dataJewels from "../../data/dataJewels";

import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) =>{
    const jewels=dataJewels.find(item=>item.id===cartItem.jewelleryId);
    const dispatch = useDispatch();
    return(<div className="item">
        <p>{jewels.name}</p>
        <p>{cartItem.quantity}</p>
        <p>CHF {jewels.price * cartItem.quantity}</p>

        <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
        <img className="iconItem"src="https://img.icons8.com/plasticine/512/filled-trash.png"/>
        </span>

        </div>
        
        
        
        
        

    

    )
}
export default CartItem;
