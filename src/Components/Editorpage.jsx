import React from 'react'
import styles from './CSS/Editorpage.module.css'
import Item from './Item'
import { useContext } from 'react'
import { NContext } from '../Context/NotesContext'
import Enter from './Assets/Enter.png'
const Editorpage = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.header}>
                <img src={ } alt="" />
            </div>
            <div className={styles.notes}>

            </div>
            <div className={styles.textEditor}>
                <input type="text" placeholder='Here is the sample text for sample work' />
                <img src={Enter} alt="" />
            </div> */}
        </div>
    )
}

export default Editorpage
