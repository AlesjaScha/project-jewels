import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Jewellery = ({jewellery})=>{
    const[quantity,setQuantity]= useState(1);
    const dispatch = useDispatch()
    
    return (
        <div>
            <img src= {`${jewellery.img}.jpg`}/>

            <div className="title">
            <h2>{jewellery.name}</h2>
            </div>

            <div className="price">
            <h2>CHF {jewellery.price}</h2>
            </div>
             
             <div className="price">
            <ChangeQuantity quantity={quantity}setQuantity={setQuantity}/>  
            </div>

            <div className="btn">
              
            <img className="icon"src ="https://img.icons8.com/fluency/512/wedding-gift.png"/>
            
            <button className="btnTwo"onClick={()=>{dispatch(addItemToCart({jewellery,quantity}))}}>In den Warenkorb</button>
            </div>
            
        </div>
    )
}
export default Jewellery;