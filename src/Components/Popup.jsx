import React, { useContext } from 'react'
import styles from './CSS/Popup.module.css'
const Popup = (props) => {
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.heading}><h2>Create New group</h2></div>
                <div className={styles.group_name}>
                    <h3>Group Name</h3>
                    <input type="text" placeholder='Enter group name' />
                </div>
                <div className={styles.choose_color}>
                    <h3>Choose colour</h3>
                    <div className={styles.color}>
                        <div className={styles.box} id={styles.color1}></div>
                        <div className={styles.box} id={styles.color2}></div>
                        <div className={styles.box} id={styles.color3}></div>
                        <div className={styles.box} id={styles.color4}></div>
                        <div className={styles.box} id={styles.color5}></div>
                        <div className={styles.box} id={styles.color6}></div>
                    </div>
                </div>
                <div className={styles.btn}><button >Create</button> <button onClick={props.onClose}>Close</button></div>
            </div>

        </div>
    )
}

export default Popup
