import React from 'react'
import styles from './Proficiency.module.css'


export default function Proficiency(){
    return (
        <div className="container-fluid mb-5">
            <div className="row border justify-content-center mb-5">
                <div className={`${styles.proficiency} col-12 text-center mt-5`}>
                    Proficencies
                </div>

                <div className="col-12 mt-5 mb-5">
                    <div className={`${styles.skilllogo}`}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src = "/front-end.png" alt="frontend" width="200px" height="200px"/>
                            </div>
                            <div className={`${styles.title}`}>
                                Frontend
                            </div>
                            <div className={`${styles.body}`}>
                                <small>React, Redux, Bootstrap, Material-UI</small>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src = "/back-end.png" alt="backend" width="200px" height="200px"/>
                            </div>
                            <div className={`${styles.title}`}>
                                Backend
                            </div>
                            <div className={`${styles.body}`}>
                                <small>Python, Flask, MySQL, Redis, SQLAlchemy</small>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src = "/data-structures.png" alt="dsandalgo" width="200px" height="200px"/>
                            </div>
                            <div className={`${styles.title}`}>
                                Data Structures
                            </div>
                            <div className={`${styles.body}`}>
                                <small>Arrays, Sorting, Binary search, Greedy, Dynamic Programming, Graphs</small>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <img src = "/full-stack.png" alt="fullstack" width="200px" height="200px"/>
                            </div>
                            <div className={`${styles.title}`}>
                                Full Stack
                            </div>
                            <div className={`${styles.body}`}>
                                <small>Ability to create end to end applications</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}