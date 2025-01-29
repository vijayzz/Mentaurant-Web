import { useState } from "react";
import './TableMain.css'
import FloorTab from "./FloorTab";
import TableTab from "./TableTab";
import { count, table } from "console";
import BillSummary from "./BillSummary";




export default function TableMain() {
    let floortab: any = [
        { title: 'Ground Floor', count: 24, id: 1 },
        { title: '1st Floor', count: 24, id: 2 },
        { title: "2nd Floor", count: 14, id: 3 },
        { title: "3rd Floor", count: 30, id: 4 },
        { title: "4th Floor", count: 25, id: 5 },
        { title: "5th Floor", count: 12, id: 6 },
        { title: "6th Floor", count: 12, id: 7 }
    ]
    const [activeId, setActiveId] = useState<any>(null);

    const onTabClick = (id: any) => {
        setActiveId(id)

    }

    const [tabletab, setTabletab] = useState(
        [
            { tableNo: 1, status: 'available' },
            { tableNo: 2, status: 'available' },
            { tableNo: 3, status: 'occupied' },
            { tableNo: 4, status: 'available' },
            { tableNo: 5, status: 'available' },
            { tableNo: 6, status: 'occupied' },
            { tableNo: 7, status: 'available' },
            { tableNo: 8, status: 'available' },
            { tableNo: 9, status: 'available' },
            { tableNo: 10, status: 'available' },
            { tableNo: 11, status: 'available' },
            { tableNo: 12, status: 'available' },
            { tableNo: 13, status: 'occupied' }
        ]
    );



    const onTableClick = (tableNo: number) => {
        console.log('Clicked Table No:', tableNo);
        console.log('Previous State:', tabletab);
        setTabletab((prevState: any) =>

            prevState.map((table: any) =>

                table.tableNo === tableNo
                    ? { ...table, status: table.status === 'occupied' ? 'available' : 'occupied' }
                    : table

            )


        );


    };


    return (
        <>
            <div>
                <p className="para">Table</p>
                <div className="top">
                    {floortab.map((ele: any) => {
                        return (
                            <FloorTab
                                title={ele.title}
                                count={ele.count}
                                id={ele.id}
                                activeId={activeId}
                                callBack={onTabClick} />
                        )
                    })}
                </div>
                <div style={{ display: 'flex' }}>

                    <div className="tablebar">
                        {tabletab.map((ele: any) => {
                            return (
                                <TableTab
                                    tableNo={ele.tableNo}
                                    status={ele.status}
                                    callBack={() => onTableClick(ele.tableNo)}
                                />
                            )
                        }

                        )}

                    </div>

                    <div className="billtab">
                        < BillSummary />
                    </div>
                </div>

            </div>




        </>
    )
}