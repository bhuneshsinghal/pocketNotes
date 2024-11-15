import React, { useContext } from 'react'
import styles from './CSS/Item.module.css'
import { NContext } from '../Context/NotesContext'
const Item = (props) => {
    const { getInitials, setSelectedGroup } = useContext(NContext);
    return (
        <div className={styles.itemContainer}>

            <div className={styles.inContainer}>
                <span className={styles.initials} onClick={() => { setSelectedGroup(props.name) }}>{getInitials(props.name)}</span> <span className={styles.name}>{props.name}</span>
            </div>
        </div>
    )
}

export default Item
