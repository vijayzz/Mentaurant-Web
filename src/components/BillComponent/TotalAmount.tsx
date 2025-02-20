import { Table } from "antd";

export default function TotalAmount() {
    const itemData = [
        { key: "1", item: "Chicken Wings", price: 2000, qty: 1, subtotal: 2000 },
        { key: "2", item: "Summer Salad", price: 1000, qty: 1, subtotal: 1000 },
        { key: "3", item: "French Fries", price: 500, qty: 1, subtotal: 500 },
    ];


    const subtotal = itemData.reduce((sum, item) => sum + item.subtotal, 0);
    const tax = 16;
    const total = subtotal + tax;


    const dataSource = [
        ...itemData,
        { key: "subtotal", item: "Subtotal", price: "", qty: "", subtotal },
        { key: "tax", item: "Tax", price: "", qty: "", subtotal: tax },
        { key: "total", item: "TOTAL", price: "", qty: "", subtotal: total },
    ];

    const columns = [
        {
            title: "ITEM",
            dataIndex: "item",
            key: "item",
            render: (text: any, record: any) => (
                <span
                    style={{
                        fontWeight: ["subtotal", "tax", "total"].includes(record.key) ? "bold" : "",
                        textAlign: ["subtotal", "tax", "total"].includes(record.key) ? "right" : "left",
                        display: "block",
                        fontFamily: ["subtotal", "tax", "total"].includes(record.key) ? "Roboto" : "",
                        fontSize:["total"].includes(record.key)?"20px":""
                    }}
                >
                    {text}
                </span>
            ),
        },
        {
            title: "PRICE",
            dataIndex: "price",
            key: "price",
            render: (price: any) => (price ? `₹ ${price.toLocaleString()}` : ""),
        },
        {
            title: "QTY",
            dataIndex: "qty",
            key: "qty",
        },
        {
            title: "SUBTOTAL",
            dataIndex: "subtotal",
            key: "subtotal",
            render: (subtotal: any, record: any) => (
                <span
                    style={{
                        fontWeight: ["subtotal", "tax", "total"].includes(record.key) ? "bold" : "normal",
                        textAlign: "center",
                        display: "block",
                        fontSize: record.key === "total" ? "18px" : "inherit",
                        color: record.key === "total" ? "red" : "inherit",


                    }}
                >
                    {subtotal ? `₹ ${subtotal.toLocaleString()}` : ""}
                </span>
            ),
        },
    ];

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
        //   bordered
        //   showHeader={true} 
        />
    );
}
