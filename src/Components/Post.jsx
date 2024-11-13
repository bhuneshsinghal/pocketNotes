import React, { useContext } from 'react'
import styles from './CSS/Post.module.css'
import { NContext } from '../Context/NotesContext'
const Post = (props) => {
    const { getCurrentTime } = useContext(NContext);
    return (
        <div className={styles.post_container}>
            <div className={styles.text}>
                <p>An IPO GMP or the grey market premium is the difference between the price at which shares of an Initial Public Offering (IPO) are traded in the grey market and the issue price set by the company. This is how it works; when a company is preparing for an IPO, the price at which its shares are going to be issued is called the issue price. On the other hand, the price at which these same shares are traded before they get listed on the stock exchanges is referred to as the grey market price.</p>
            </div>
            <div className={styles.date_time}>
                <span>{getCurrentTime().time} <span className={styles.dot}>.</span> {getCurrentTime().date}</span>
            </div>
        </div>
    )
}

export default Post
