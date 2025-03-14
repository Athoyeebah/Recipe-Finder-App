import {useState} from "react";
import Outercontainer from "./components/Outercontainer";
import Innercontainer from "./components/Innercontainer";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Fooddetails from "./components/Fooddetails";
import "./App.css"

export default function App(){
const [foodData, setFoodData] = useState([])
const [foodId, setFoodId] = useState("642583")
    return (
        <div className="App">
            <Nav/>
              <Search foodData={foodData} setFoodData={setFoodData}/>
          <Outercontainer>
           <Innercontainer>
            <Foodlist foodData={foodData} setFoodId={setFoodId}/>
           </Innercontainer>
               <Innercontainer>
            <Fooddetails foodId={foodId}/>
           </Innercontainer>
             
          </Outercontainer>
            </div>
    )
}
