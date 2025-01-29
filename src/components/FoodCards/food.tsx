import { useState } from "react";
import "antd/dist/reset.css";
import "./food.css";
import FoodItems from "../FoodCards/foodItems"; 
import biriyanii from "../../assets/images/biriyanii.jpg";
import soupp from "../../assets/images/soupp.jpg";
import pizaa from "../../assets/images/pizaa.jpg";
import vegBiryani from "../../assets/images/vegBiryani.jpg";
import soup from "../../assets/images/soup.png";
import vegSymbol from "../../assets/images/vegSymbol.png"; 
import nonVegSymbol from "../../assets/images/nonVegSymbol.png"; 

export default function Foods() {
  
  const foodItems = [
    {
      image: biriyanii,
      title: "Chicken Biryani",
      time: "10 mins",
      price: 230,
      category: "Non-Veg",
      symbol: nonVegSymbol,
    },
    {
      image: soupp,
      title: "Chicken Soup",
      time: "5 mins",
      price: 120,
      category: "Non-Veg",
      symbol: nonVegSymbol,
    },
    {
      image: pizaa,
      title: "Cheese Pizza",
      time: "15 mins",
      price: 300,
      category: "Veg",
      symbol: vegSymbol,
    },
    {
      image: vegBiryani,
      title: "Veg Biryani",
      time: "12 mins",
      price: 200,
      category: "Veg",
      symbol: vegSymbol,
    },
    {
      image: soup,
      title: "Cream Soup",
      time: "7 mins",
      price: 100,
      category: "Veg",
      symbol: vegSymbol,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Non-Veg");

  const filteredItems = foodItems.filter(
    (item) => item.category === selectedCategory
  );

  const topSellingItems = [
    {
      image: biriyanii,
      title: "Chicken Biryani",
      time: "10 mins",
      price: 230,
      category: "Non-Veg",
      symbol: nonVegSymbol,
    },
    {
      image: pizaa,
      title: "Cheese Pizza",
      time: "15 mins",
      price: 300,
      category: "Veg",
      symbol: vegSymbol,
    },
    {
      image: vegBiryani,
      title: "Veg Biryani",
      time: "12 mins",
      price: 200,
      category: "Veg",
      symbol: vegSymbol,
    },
  ];

  const handleViewAll = (section: string) => {
    console.log(`View All clicked for ${section}`);
  };

  return (
    <div>
      
      <div className="food-container">
        <h3 className="food-heading">Recommend Dish</h3>
        <label className="food-toggle-label">
          <img
            src={selectedCategory === "Veg" ? vegSymbol : nonVegSymbol}
            alt={selectedCategory}
            className="food-toggle-image"
          />
          <div
            className={`food-toggle ${selectedCategory === "Veg" ? "food-toggle-border-veg" : "food-toggle-border-nonveg"}`}
            onClick={() =>
              setSelectedCategory((prev) =>
                prev === "Veg" ? "Non-Veg" : "Veg"
              )
            }
          >
            <div
              className={`food-toggle-switch ${selectedCategory === "Veg" ? "food-toggle-switch-veg" : "food-toggle-switch-nonveg"}`}
            ></div>
          </div>
        </label>
        <div className="food-view-all" onClick={() => handleViewAll("Recommended Dish")}>
          View All
        </div>
      </div>

      <div className="food-cards-container">
        {filteredItems.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <FoodItems
              image={item.image}
              title={item.title}
              time={item.time}
              price={item.price}
              symbol={item.symbol}
            />
          </div>
        ))}
      </div>

      <div className="food-container" style={{ marginTop: "30px" }}>
        <h3 className="food-heading">Top Selling Dish</h3>
        <div className="food-view-all" onClick={() => handleViewAll("Top Selling Dish")}>View All</div>
      </div>

      <div className="food-cards-container">
        {topSellingItems.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <FoodItems
              image={item.image}
              title={item.title}
              time={item.time}
              price={item.price}
              symbol={item.symbol}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
