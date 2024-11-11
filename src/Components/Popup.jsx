import styles from './CSS/Popup.module.css';
import React, { useContext, useRef } from 'react'
import { NContext } from '../Context/NotesContext';
import { X } from 'lucide-react';

const Popup = (props) => {
    const { getCurrentTime, data } = useContext(NContext);
    const groupName = useRef('');
    const inputValue = groupName.current.value;
    const { date, time } = getCurrentTime();
    const handleSubmit = () => {
        let newData = {
            id: 8,
            name: inputValue,
            description: "Trump won the 2016 presidential election as the Republican Party nominee, defeating the Democratic Party candidate, Hillary Clinton, while losing the popular vote,[a] and became the first U.S. president without prior military or government service. The Mueller investigation later determined that Russia interfered in the 2016 election to help Trump.",
            date: date,
            time: time,
        }
        data.data_product = [...data.data_product, newData]
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <div className={styles.inContainer}>
                <button className={styles.close_btn} onClick={props.onClose}><X /></button>
                <div className={styles.download}>
                    <h1>Create New Group</h1>
                    <div >
                        <label htmlFor="">Group Name </label>
                        <input type="text" ref={groupName} placeholder='Enter group name' required />
                        <button className={styles.download2} onClick={handleSubmit}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Popup
