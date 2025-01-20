
import { Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

interface FoodItemsProps {
  image: string;
  title: string;
  time: string;
  price: number;
}

export default function FoodItems({ image, title, time, price }: FoodItemsProps) {
  return (
    <Card
      hoverable
      style={{
        width: 300,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
      cover={
        <img
          alt={title}
          src={image}
          style={{ height: "150px", objectFit: "cover" }}
        />
      }
    >
      <div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
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
            <ClockCircleOutlined
              style={{
                marginRight: "5px",
                color: "#ff4d4f",
              }}
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
    </Card>
  );
}
