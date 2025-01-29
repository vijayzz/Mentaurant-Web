import { appImages } from '../../globals/appImages';
import './TableTab.css'


export default function TableTab(props: any) {
    const { tableNo, status, callBack } = props;

    return (
        <>
            <div className='container'>
                <img className='image'

                    src={status === 'occupied' ? appImages.tableOccupied : appImages.tableAvailable}
                    onClick={callBack}
                />
               <span className='num'>{tableNo}</span>

            </div>

        </>
    )
}
