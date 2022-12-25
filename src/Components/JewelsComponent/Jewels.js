import dataJewels from "../../data/dataJewels";
import Jewellery from "./Jewellery";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/jewelsSlice";


const Jewels = () =>{
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        {dataJewels
        .filter(jewellery =>{
            if (selectedCategory=== "ALLE")return true;
            return selectedCategory===jewellery.category;
        })
        .map(jewellery=><Jewellery jewellery={jewellery}/>)}


    </div>

    )
}
export default Jewels;