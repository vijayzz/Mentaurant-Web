

import Foods from "./FoodCards/food";
import MenuItems from "./MenuComponents/MenuItems";
export default function FoodMenu(){

    return(
        <>
        <div style={{display:"flex" , flexDirection:"column" , width:"95%" , margin:"0 auto"}}>
        <MenuItems />
        <Foods />
        </div>
        </>
    )
}