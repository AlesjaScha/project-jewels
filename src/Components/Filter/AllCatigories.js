import Filter from "./Filter";

const AllCatigories = () =>{
    return(<div>
        <h1>Unsere Geschenkideen</h1>
        {["HALSKETTE","RING","UHREN","OHRRINGE","ALLE"].map((category,index)=><Filter key={index} category={category}/>)}
        


    </div>

    )
}
export default AllCatigories;