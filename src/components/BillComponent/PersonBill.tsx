import { appImages } from "../../globals/appImages"
import './PersonBill.css';
export default function personBill() {
    const orderNum = [{
        id: 1,
        val: 1256576,
        tableNum: 2,
        floorNum: 2,
        time: "20:02"
    }]
    return (
        <div className="order-containers">
            {orderNum.map((item: any) => (
                <div style={{ display: 'flex', gap: '10px', }}>
                    <div key={item.id}>
                        <p className="order-text">order #: <span style={{color:'#DA3743'}} >{item.val}</span> </p>
                    </div>
                    <div style={{ display: 'flex', gap: '5px', marginLeft: '10%' }}>
                        <img src={appImages.tableimg} alt="" style={{ marginTop: '-18px' }} />
                        <p className="txt-table">Table: <span className="span-table">{item.tableNum}</span> </p>
                        <p> Floor: <span className="span-floor">{item.floorNum}</span> </p>
                    </div>
                    <div style={{ display: 'flex', gap: '5px', marginLeft: '15%' }}>
                        <img src={appImages.clockimg} alt="" style={{ marginTop: '-18px' }} />
                        <p>Time: <span style={{color:'#1D1D1D',fontWeight:'600'}}>{item.time}</span> </p>
                    </div>
                </div>

            ))}

        </div>


    )
}