import { useState } from 'react';
import './Floor.css'

export default function FloorTab(props: any) {
    const {title, count, id, callBack, activeId }=props;

    return (
        <>
            <div>
                <button className={`button-1 ${activeId === id ? 'active' :' '}`} onClick={ () => callBack(id)}>{title + '(' + count + ')'}</button>
            </div>

        </>

    )

}
