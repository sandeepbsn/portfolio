import React from 'react'
import styles from './KeyStats.module.css'


export default function KeyStats(){
    return (
        <div className={styles.circlebox}>
            <div className={`${styles.circle} border rounded-circle p-4 mx-3 my-2`}>
                1200+<small>hrs<br></br>coding</small> 
            </div>

            <div className={`${styles.circle} border rounded-circle p-4 mx-3 my-2`}>
                300+ <br></br><small>ds & algo</small>
            </div>

            <div className={`${styles.circle} border rounded-circle p-4 mx-3 my-2`}>
                318 <br></br><small>commits</small>
            </div>

            <div className={`${styles.circle} border rounded-circle p-4 mx-3 my-2`}>
                4 <br></br><small>projects</small>
            </div>

            <div className={`${styles.circle} border rounded-circle p-4 mx-3 my-2`}>
                100+ <br></br><small>soft skills</small>
            </div>

        </div>
    )
}