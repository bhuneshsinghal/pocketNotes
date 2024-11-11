import React, { useContext } from 'react'
import styles from './CSS/Item.module.css'
import { NContext } from '../Context/NotesContext'
const Item = (props) => {
    const { getInitials } = useContext(NContext);
    return (
        <div className={styles.itemContainer}>

            <div className={styles.inContainer}>
                <span className={styles.initials}>{getInitials(props.name)}</span> <span className={styles.name}>{props.name}</span>
            </div>
            <div className={styles.notes}>

            </div>
            <div className={styles.textEditor}>

            </div>
        </div>
    )
}

export default Item
