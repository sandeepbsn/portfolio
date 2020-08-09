import React from 'react'
import GitHubCalendar from 'github-calendar';
import styles from './Introright.module.css'








export default function Introright(){
    return (
        <div className={`${styles.picflex} mx-auto`}>
            <div className="d-flex justify-content-around">
                <div>
                    <div className={`${styles.circle} rounded-circle`}>
                        <img src="/html.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        HTML 5
                    </div>
                </div>

                <div>
                    <div className={`${styles.circle} rounded-circle`}>
                        <img src="/css.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        CSS 3
                    </div>
                </div>

                <div>
                    <div className={`${styles.square} rounded-circle`}>
                        <img src="/bootstrap.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        Bootstrap
                    </div>
                </div>

                <div>
                    <div className={`${styles.square} rounded-circle`}>
                        <img src="/javascript.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        Javascript
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-around mt-5">
                <div>
                    <div className={`${styles.circle} p-1 rounded-circle`}>
                        <img src="/react.svg" alt="logo"/>
                    </div>  
                    <div className="text-center">
                        React
                    </div>
                </div>
                
                <div>
                    <div className={`${styles.python} rounded-circle`}>
                        <img src="/python.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        Python
                    </div>
                </div>

                <div>
                    <div className={`${styles.flask} rounded-circle`}>
                        <img src="/flask.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        Flask
                    </div>
                </div>
                
                <div>
                    <div className={`${styles.square} rounded-circle`}>
                        <img src="/sql.svg" alt="logo"/>
                    </div>
                    <div className="text-center">
                        SQL
                    </div>
                </div>
            </div>
        </div>
    )
}