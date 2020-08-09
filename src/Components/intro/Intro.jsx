import React from 'react'
import Introleft from './introleft/Introleft'
import Introright from './introright/Introright'
import styles from './Intro.module.css'


export default function Intro(){
    return(
        <div className={`${styles.intro} container-fluid `}>
            <div className={`${styles.introrow} row align-items-center p-0`}>
                <div className="col-sm-12 col-md-12 col-lg-4 p-0">
                    <Introleft/>
                </div>
                <div className={`${styles.introrightbg} col-md-12 col-lg-8`}>
                    <Introright/>
                </div>
            </div>
        </div>
    )
}