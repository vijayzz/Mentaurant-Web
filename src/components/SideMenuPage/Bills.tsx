import BillCalendar from "../BillComponent/BillCalendar";
import BillTable from "../BillComponent/BillTable";
import Payment from "../BillComponent/Payment";

export default function Bills() {
    return (
        <div>
            <BillCalendar />
            <Payment />
            <BillTable />
        </div>
    )
}