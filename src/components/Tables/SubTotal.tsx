import {Table } from "antd";
import './SubTotal.css'

export default function SubTotal() {

    const dataSource = [
        {
            
            item: <div style={{  textAlign: 'right', marginTop: "24px" }}>SUBTOTAL</div>,
            price: "",
            qty: "",
            subtotal: <div className="amount">₹ 3500</div>,
            
        },
        {
            key: '5',
            item: <div style={{textAlign: 'right',  }}>SERVICE CHARGE 10%</div>,
            price: '',
            qty: '',
            subtotal: <div className="sub-amount">₹ 350</div>,
            
        },
        {
            key: '6',
            item: <div style={{textAlign: 'right', }}>TAX</div>,
            price: '',
            qty: '',
            subtotal: <div className="sub-amount">₹ 16</div>,
        },
        {
            key: '7',
            item: <div className = "dash-border" style={{  textAlign: 'right', flexGrow: "1" }}>TOTAL</div>,
            price: '',
            qty: '',
            subtotal: <div className="total-amount dash-border"> 4350</div>,
        },




    ]

    const columns = [

        {
            title: '',
            dataIndex: 'item',
            key: 'item',

        },
        {
           
            dataIndex: 'price',
            key: 'price',
        },
        {
            
            dataIndex: 'qty',
            key: 'qty',
        },
        {   
            dataIndex: 'subtotal',
            key: 'subtotal',
        },
        {   
            dataIndex: 'total',
            key: 'total',
        },

        
    ];


    return (
        <>
            <div>
               
                <Table 
                dataSource={dataSource} 
                columns={columns} 
                pagination={false} 
                showHeader={false} />
                {/* <div className="dash-border total-row">
                    <span style={{ textAlign: "right", flexGrow: 1 }}>TOTAL</span>
                    <span className="total-amount">₹ 4350</span>
                </div> */}
                
               

                
            </div>
        </>
    )


}