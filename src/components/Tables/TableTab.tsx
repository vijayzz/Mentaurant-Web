import { appImages } from '../../globals/appImages';
import './TableTab.css'


export default function TableTab(props: any) {
    const { tableNo, status, occupiedTable, callBack } = props;

    return (
        <>
            <div className='container'>
                <img
                
                    src={occupiedTable === status ? appImages.tableOccupied : appImages.tableAvailable}
                    onClick={() => callBack(status)}
                />

            </div>

        </>
    )
}
