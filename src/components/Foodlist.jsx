
import Fooditem from "./Fooditem";
export default function Foodlist({foodData,setFoodData, setFoodId}){
    return (
        <div>
            {foodData.map((food)=>(
                <Fooditem food={food} setFoodId={setFoodId}/>
            ))}
        </div>
    )
}
