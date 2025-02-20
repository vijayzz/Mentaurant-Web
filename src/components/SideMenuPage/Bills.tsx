import BillCalendar from "../BillComponent/BillCalendar";
import BillTable from "../BillComponent/BillTable";
import Payment from "../BillComponent/Payment";
import TotalBill from "../BillComponent/TotalBill";


export default function Bills() {
    return (
        <div style={{ height: '100%' }}>
            <BillCalendar />
            <Payment />
            <div style={{ display: 'flex' }}>
                <BillTable />
                <TotalBill />
            </div>z

        </div>
    )
}