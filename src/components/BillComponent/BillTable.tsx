import { Table } from "antd";
import './BillTable.css';
import { useState } from "react";

export default function BillTable() {
  const [selectedRowKey, setSelectedRowKey] = useState(null);
  const dataSource = [
    {
      key: '1',
      no: '1',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '2',
      no: '2',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '3',
      no: '3',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'Gpay',
    },
    {
      key: '4',
      no: '4',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '5',
      no: '5',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'Gpay',
    },
    {
      key: '6',
      no: '6',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '7',
      no: '7',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '8',
      no: '8',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'Gpay',
    },
    {
      key: '9',
      no: '9',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '10',
      no: '10',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'Gpay',
    },
    {
      key: '11',
      no: '11',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '11',
      amount: '1,234',
      type: 'Gpay',
    },
    {
      key: '12',
      no: '12',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '13',
      no: '13',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '14',
      no: '14',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'Gpay',
    },
    {
      key: '15',
      no: '15',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'cash',
    },
    {
      key: '16',
      no: '16',
      billId: '#3289423',
      customerNo: '9988776655',
      items: '09',
      amount: '1,234',
      type: 'Gpay',
    },

  ];

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 20,
    },
    {
      title: 'Bill Id',
      dataIndex: 'billId',
      key: 'billId',
      width: 35,

    },
    {
      title: 'Customer No.',
      dataIndex: 'customerNo',
      key: 'customerNo',
      width: 40,
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
      width: 25,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: 30,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 40,
    }
  ];

  const handleRowClick = (record: any) => {
    console.log("Row Record", record);
    setSelectedRowKey(record.key);
  };
  return (
    <div className="bill">
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ y:400}}
        // bordered={false}
        pagination={false}
        onRow={(record) => ({ onClick: () => handleRowClick(record) })}
        rowClassName={(record) => `${record.key === selectedRowKey ? 'selected-row' : ''} rowClassName1 `}
      />
    </div>
  )
}