import React from 'react'
import styles from './Projects.module.css'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'


export default function Projects(props){
    return (
        <div className="p-0 mx-auto">
            <div className={`${styles.main} d-flex border flex-column justify-content-center align-items-center`}>
                <div className={`${styles.image}`}>
                    <img src ={props.projectImage} 
                    className="border" 
                    alt="projectpic"></img>
                </div>

                <div className={`${styles.name} mt-4`}>
                    <a href={props.projectLink}>{props.projectTitle}</a>
                </div>

                <div className={`${styles.subtitle} mt-4`}>
                    {props.projectSubTitle}
                </div>

                <div className={`${styles.description} mt-4`}>
                    {props.projectDescription}
                </div>

                <div className={`${styles.slider} mt-5`}>
                    <Carousel nextIcon={<span aria-hidden="true" className={styles.nexticon} />}
                    prevIcon={<span aria-hidden="true" className={styles.previcon} />}>
                        
                        {props.skills.map((elem, index)=>{
                            return (
                                index%2===0?
                                <CarouselItem className="text-center ">
                                    <div className="d-flex justify-content-center">
                                        <div className={styles.skills}>{props.skills[index]}</div>
                                        <div className={styles.skills}>{props.skills[index+1]}</div>
                                    </div>
                                </CarouselItem>:
                                console.log("done")
                                
                            )
                        })}
                    </Carousel>
                </div>
                <div className={styles.repo}>
                    <a href={props.repoLink}>Github <img src="/github.png" width="20" height="20"/></a>
                </div>
            </div>
        </div>
    )
}