import styles from './CSS/Home.module.css';
import plusSign from './Assets/plus_sign.png';
import React, { useContext, useEffect, useState } from 'react'
import GroupList from './GroupList';
import Popup from './Popup';
import { NContext } from '../Context/NotesContext';
import Editorpage from './Editorpage';
import Hero from './Hero';
const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const { data } = useContext(NContext);
    useEffect(() => { <GroupList /> }, [data])
    return (
        <div className={styles.container}>
            {showModal && <Popup onClose={() => setShowModal(false)} />}
            <div className={styles.left_container}>
                <h1>Pocket Notes</h1>
                <div className={styles.group_name}>
                    <GroupList />
                </div>
                <div className={styles.plus_logo}>
                    <img src={plusSign} onClick={() => setShowModal(true)} alt="" />
                </div>
            </div>

            <div className={styles.right_container}>
                {/* <Hero></Hero> */}
                <Editorpage name="Bhunesh Notes"></Editorpage>
            </div>


        </div>
    )
}

export default Home
