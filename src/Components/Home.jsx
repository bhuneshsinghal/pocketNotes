import styles from './CSS/Home.module.css';
import rightImage from './Assets/rightContainerHome.png';
import plusSign from './Assets/plus_sign.png';
import React, { useContext, useEffect, useState } from 'react'
import lockSign from './Assets/lock.png'
import GroupList from './GroupList';
import Popup from './Popup';
import { NContext } from '../Context/NotesContext';
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
                <img src={rightImage} alt="" />
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.</p>
                <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <div className={styles.encrypted}>
                    <p><img src={lockSign} alt="" />   end-to-end encrypted</p>
                </div>
            </div>


        </div>
    )
}

export default Home
