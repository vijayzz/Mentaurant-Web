import { useState } from 'react';
import './Payment.css';
import { Button } from "antd";


export default function Payment() {
    const paymentDetail = [
        { id: 1, payDetail: 'All',count:2983 },
        { id: 2, payDetail: 'Card' ,count:289 },
        { id: 3, payDetail: 'Cash',count:132 },
        { id: 4, payDetail: 'Online Transfer',count:25 }
    ];

    const [selectMethod, setSelectMethod] = useState<any>(null);

    const handlePayMethod = (id: number) => {
        setSelectMethod(id);
    };

    return (
        <div style={{ marginLeft: '5%' }}>
            {paymentDetail.map(({ id, payDetail,count }) => (
                <Button
                    key={id}
                    className={`payment-btn ${selectMethod === id ? 'selectColor' : ''}`}
                    onClick={() => handlePayMethod(id)}>
                    {payDetail} <span>({count})</span>
                </Button>
            ))}
        </div>
    );
}
