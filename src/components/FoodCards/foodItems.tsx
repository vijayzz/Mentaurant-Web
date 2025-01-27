import cookingpan from "../../assets/images/cookingpan.svg";
import { ReactNode } from "react"; // Import ReactNode

interface FoodItemsProps {
  image: string;
  title: ReactNode; // Update the type to ReactNode
  time: string;
  price: number;
  symbol: string; // Add symbol property for Veg/Non-Veg icon
}

export default function FoodItems({ image, title, time, price, symbol }: FoodItemsProps) {
  return (
    <div
      style={{
        width: 300,
        height: 240,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        padding: "10px",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <img
          alt={typeof title === "string" ? title : "Food Item"}
          src={image}
          style={{
            width: "100%",
            height: "130px",
            objectFit: "cover",
            borderRadius: "8px", // Slight rounding for the image itself
          }}
        />
      </div>
      <div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
            marginTop: "10px", // Space between the image and title
            display: "flex",
            alignItems: "center",
            gap: "10px", // Gap between symbol and title
          }}
        >
          <img
            src={symbol}
            alt="Category Symbol"
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
          />
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <img
              src={cookingpan}
              style={{
                marginRight: "5px",
              }}
              alt="Cooking Pan"
            />
            {time}
          </span>
          <span
            style={{
              fontWeight: "bold",
              color: "#000",
            }}
          >
            ₹ {price}
          </span>
        </div>
      </div>
    </div>
  );
}
