import { useState } from "react";
import OrderTab from "./OrderTab"
import { Button, Table } from "antd";
import './BillSummary.css'
import { appImages } from "../../globals/appImages";
import { log } from "console";

export default function BillSummary() {
  //     //  const { tableData, tableColumn, summaryData, tableNo}
  //     const {name} = props
  //     console.log('props',props)
  //     console.log(name)
  const ordertab = [
    {orderId: 12564878,tableNo: 1 }
    

  ]

 
  const onOrderTabClick = (orderId: any) => {
    // console.log("====>",orderId===activeOrderId);
    // setActiveOrderId(orderId);
  };

  //  const billDetails : any = [
  //        {tableData : "tableData", tableColumn : " tableColumn", summaryData : " summaryData", tableNo: "tableNo"},

  //   ]

  //       const tableColumn : any = [{
  //         item : "ITEM",

  //       }]

  //    const tableData: any = [
  //     {
  //         item : 'CHICKEN WINGS',
  //         price : 2000,
  //         qty : 1,
  //     }
  //    ]

  //    const summaryData: any = [{
  //     subTotal : '₹ 3,500',
  //     serviceCharge : '₹ 300',
  //     tax : '₹ 16',
  //    }]
  const dataSource = [
    {
      key: '1',
      item: ' CHICKEN WINGS',
      price: '₹ 2000',
      qty: 1,
      subtotal: '₹ 2000',
      Image : appImages.prepareimage

    },
    {
      key: '2',
      item: 'SUMMER SALAD',
      price: '₹ 1000',
      qty: 1,
      subtotal: '₹ 1000',
      Image : appImages.prepareimage
    },
    {
      key: '3',
      item: 'FRENCH FRIES',
      price: '₹ 1000',
      qty: 1,
      subtotal: '₹ 1000',
      Image : appImages.prepareimage
    },
  ];

  const columns = [
    {
      title: 'ITEM',
      dataIndex: 'item',
      key: 'item',
      render: (text: string, record: any) => (
        <span className="prepare">
           {text}  
          <Button>
          <img
            src={record.Image}
            alt={text}
            style={{ width: '30px', height: '20px', objectFit: 'cover', marginRight: '5px' }}
          />PREPARE
          </Button>
         
        </span>                      
      )
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'QTY',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'SUBTOTAL',
      dataIndex: 'subtotal',
      key: 'subtotal',
    },
  ];

  return (
    <>
      <div>
        {ordertab.map((ele: any) => {
          return (
            <OrderTab
             
              orderId={ele.orderId}
              tableNo={ele.tableNo}
              callBack={onOrderTabClick}
              // activeId={activeOrderId}
            />
          )
        })}
        <div style={{marginTop: '15px' , marginLeft: '15px', marginRight: '15px'}}>
          <Table dataSource={dataSource} columns={columns} pagination={false}  />
        </div>
      </div>

    </>
  )





}