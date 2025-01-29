import { useState } from 'react';
import { appImages } from '../../globals/appImages';
import '../Tables/OrderTab.css'

export default function OrderTab(props: any) {
  const { titles, orderId, tableNo , callBack } = props;
  console.log("rendering");
  const [activeOrderId, setActiveOrderId] = useState<any>(null);
  
  return (
    <>
      <div >

      <div
       className= "order"
        onClick={() => setActiveOrderId(orderId)}
      >
      order#: <span className={activeOrderId === orderId ? 'actives' : ''}>{orderId}</span>  <span> {orderId}</span>
      </div>

         
          
        <div>
          <img className="tableimg" src={appImages.tableimg} alt="" />
          <span className='tabletext'> Table:  {tableNo}</span>
          <img style={{ marginLeft: '55% ', marginBottom: '-4px' }} src={appImages.clockimg} alt="" />
          <span className='clktext'> Time:  20:02 pm</span>
        </div>

      </div>

    </>
  )
}


