import React from 'react'
import styles from './CSS/Editorpage.module.css'
import Item from './Item'
import { useContext } from 'react'
import Post from './Post'
import { NContext } from '../Context/NotesContext'
import Enter from './Assets/Enter.png'
const Editorpage = (props) => {
    const { getInitials } = useContext(NContext);
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <span className={styles.Initials}>
                    <span className={styles.inner_initials}>{getInitials(props.name)}</span>
                </span>
                <span className={styles.names}>
                    {props.name}
                </span>
            </div>
            <div className={styles.post}>
                <Post></Post>
            </div>
            <div className={styles.editor}>
                <div className={styles.editor_box}>
                    <textarea type="text" placeholder='Enter your text here ..........' />
                    <img src={Enter} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Editorpage
