
import "antd/dist/reset.css"; // Ant Design styles
import FoodItems from "../FoodCards/foodItems"; // Import the child component
import biriyanii from "../../assets/images/biriyanii.jpg";
import soupp from '../../assets/images/soupp.jpg'
import pizaa from '../../assets/images/pizaa.jpg'

export default function Foods() {
  // Array of food items
  const foodItems = [
    {
      image: biriyanii,
      title: "Chicken Biryani",
      time: "10 mins",
      price: 230,
    },
    {
      image: soupp,
      title: "Hot & Sour Soup",
      time: "5 mins",
      price: 120,
    },
    {
      image: pizaa,
      title: "Cheese Pizza",
      time: "15 mins",
      price: 300,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap", // Ensures the layout adjusts for multiple rows
      }}
    >
      {foodItems.map((item, index) => (
        <FoodItems
          key={index} // Use index as the key if items don't have unique IDs
          image={item.image}
          title={item.title}
          time={item.time}
          price={item.price}
        />
      ))}
    </div>
  );
}