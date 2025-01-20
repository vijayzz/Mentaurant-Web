import { Table } from "antd";

export default function BillTable(){
    const dataSource = [
  {
    key: '1',
    no:'1',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'cash',
  },
  {
    key: '2',
    no:'2',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'cash',
  },
  {
    key: '3',
    no:'3',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'Gpay',
  },
  {
    key: '4',
    no:'4',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'cash',
  },
  {
    key: '5',
    no:'5',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'Gpay',
  },
  {
    key: '6',
    no:'6',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'cash',
  },
  {
    key: '7',
    no:'7',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'cash',
  },
  {
    key: '8',
    no:'8',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'Gpay',
  },
  {
    key: '9',
    no:'9',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'cash',
  },
  {
    key: '10',
    no:'10',
    billId: '#3289423',
    customerNo: '9988776655',
    items:'09',
    amount:'1,234',
    type:'Gpay',
  },

];

const columns = [
  {
    title:'No',
    dataIndex:'no',
    key:'no'
  },
  {
    title: 'Bill Id',
    dataIndex: 'billId',
    key: 'billId',
  },
  {
    title: 'Customer No',
    dataIndex: 'customerNo',
    key: 'customerNo',
  },
  {
    title: 'Items',
    dataIndex: 'items',
    key: 'items',
  },
  {
    title:'Amount',
    dataIndex:'amount',
    key:'amount',
  },
  {
    title:'Type',
    dataIndex:'type',
    key:'type'
  }
];
const tableStyle = {
  width: '100%', // Adjust width as needed
  border: '1px solid #ccc', // Add table border
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

    return(
        <div>
           <Table dataSource={dataSource} columns={columns} style={tableStyle}  />;
        </div>
    )
}