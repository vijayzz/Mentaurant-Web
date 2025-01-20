import { useState } from "react";
import './TableMain.css'
import FloorTab from "./FloorTab";
import TableTab from "./TableTab";
import { count, table } from "console";
import { title } from "process";

export default function TableMain() {
    let abc: any = [
        { title: 'Ground Floor', count: 24, id: 1 },
        { title: '1st Floor', count: 24, id: 2 },
        { title: "2nd Floor", count: 14, id: 3 },
        { title: "3rd Floor", count: 30, id: 4 },
        { title: "4th Floor", count: 25, id: 5 },
        { title: "5th Floor", count: 12, id: 6 },
        { title: "6th Floor", count: 12, id: 7 }
    ]
    const [activeId, setActiveId] = useState(null);

    const onTabClick = (id: any) => {
        setActiveId(id)

    }

    let tabletab: any = [
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
        { tableNo: 13, status: 'available' }
    ]
    const [availableTable, setAvailableTable] = useState(null)

    const onTableClick = (status: any) => {
        setAvailableTable(status)
    }

    return (
        <>
            <div>
                <div className="top">
                    {abc.map((ele: any) => {
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

                <div className="tablebar">
                    {tabletab.map((ele: any) => {
                        return (
                            <TableTab
                                tableNo={ele.tableNo}
                                status={ele.status}
                                occupiedTable={availableTable}
                                callBack={onTableClick}
                            />
                        )
                    }

                    )}

                </div>

            </div>




        </>
    )
}