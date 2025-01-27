import { useState } from "react";
import { Button, Select, Space } from "antd";
import "./BillCalendar.css";

export default function BillCalendar() {
    const months = [
        { id: 1, name: "January", days: 31 },
        { id: 2, name: "February", days: 28 }, // Default for non-leap years
        { id: 3, name: "March", days: 31 },
        { id: 4, name: "April", days: 30 },
        { id: 5, name: "May", days: 31 },
        { id: 6, name: "June", days: 30 },
        { id: 7, name: "July", days: 31 },
        { id: 8, name: "August", days: 31 },
        { id: 9, name: "September", days: 30 },
        { id: 10, name: "October", days: 31 },
        { id: 11, name: "November", days: 30 },
        { id: 12, name: "December", days: 31 },
    ];

    const [selectedMonthId, setSelectedMonthId] = useState<any>(null);

    return (
        <div style={{ display: "flex" }}>
            <div>
                <p className="text-bill">Bill</p>
            </div>
            <div className="calendar-container">
                <div>
                    <Select
                        style={{
                            width: "110px",
                            height: "30px",
                            paddingLeft: "10px",
                            paddingTop: "5px",
                        }}
                        onChange={(value) => setSelectedMonthId(value)}
                        placeholder="Month"
                    >
                        {months.map((month) => (
                            <Select.Option key={month.id} value={month.id}>
                                {month.name}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className="vertical-line"></div>
                <div>
                    <Button className="all-btn">All</Button>
                </div>
                <div style={{ position: "relative", top: "7px" }}>
                    <Space >
                        {
                            Array.from(
                                { length: months.find((m) => m.id === selectedMonthId)?.days ||0 },
                                (_, i) => (
                                    <Button key={i + 1} className="custom-button">
                                        {i + 1}
                                    </Button>
                                )
                            )}
                    </Space>
                </div>
            </div>
        </div>
    );
}
