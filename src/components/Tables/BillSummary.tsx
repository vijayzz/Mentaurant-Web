
import OrderTab from "./OrderTab"
import { Button, Table } from "antd";
import './BillSummary.css'
import { appImages } from "../../globals/appImages";
import SubTotal from "./SubTotal";

export default function BillSummary() {

  const ordertab = [
    { orderId: 12564878, tableNo: 1 }

  ]


  // const onOrderTabClick = (orderId: any) => {
  //   // console.log("====>",orderId===activeOrderId);
  //   // setActiveOrderId(orderId);
  // };

  const dataSource = [
    {
      key: '1',
      item: ' CHICKEN WINGS',
      price: '₹2000',
      qty: 1,
      subtotal: '₹ 2000',
      Image: appImages.prepareimage,
      isFood: true,

    },
    {
      key: '2',
      item: 'SUMMER SALAD',
      price: '₹1000',
      qty: 1,
      subtotal: '₹ 1000',
      Image: appImages.prepareimage,
      isFood: true,

    },
    {
      key: '3',
      item: 'FRENCH FRIES',
      price: "₹ 500",
      qty: 1,
      subtotal: "₹ 500",
      Image: appImages.prepareimage,
      isFood: true,
    },

  ];


  const columns = [
    {
      title: 'ITEM',
      dataIndex: 'item',
      key: 'item',
      render: (text: string, record: any) => (
        <span>
          {text}
          {record.isFood &&
            <Button >
              <img
                src={record.Image}
                alt={text}
                style={{ width: '30px', height: '20px', objectFit: 'cover', marginRight: '5px' }}

              />PREPARE
            </Button>
          }
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
            // callBack={onOrderTabClick}
            // activeId={activeOrderId}
            />
          )
        })}
        <div style={{ marginTop: '15px', marginLeft: '15px', marginRight: '15px' }}>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          <div>
            <SubTotal/>
          </div>
          
        </div>
      </div>

    </>
  )





}