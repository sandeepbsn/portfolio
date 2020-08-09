import React from 'react'
import styles from './Introleft.module.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';


export default function Introleft(){
    return (
        <div className={`${styles.mainflex}`}>
            <div className={`${styles.details} d-flex flex-column`}>
                <div className={`${styles.name} mt-5 ml-4`}>
                    Sandeep<br></br>
                    Babu
                </div>

                <div className={`${styles.profession} mt-2 ml-4`}>
                    Full Stack Developer
                </div>

                <div className={`${styles.location} mt-2 ml-3`}>
                    <LocationOnOutlinedIcon color='primary'/>Bangalore, Karnataka, India
                </div>

                <div className={`${styles.body} mt-2 ml-4`}>
                I am a full stack developer who is passionate about problem solving and creating end to end applications that elevates people life. Some technologies I enjoy working with includes ReactJS, Python, Flask and MySQL. I have built several end to end applications that gives me strong hold over these technologies. I am currently looking for entry level job opportunities as a Full Stack Developer
                </div>

                <div className={`${styles.view} mt-2 ml-4`}>
                    <a href="https://drive.google.com/file/d/1ALXKIRUbSUKJVmPbnAe1xt_X40MZZlLb/view?usp=sharing" className={styles.view}>View full resume</a>
                </div>

                <div className={`${styles.mtop} ${styles.location} ml-4`}>
                    <PhoneOutlinedIcon color='primary'/> 9884385027
                </div>

                <div className={`${styles.location} ml-4`}>
                    <MailOutlineOutlinedIcon color='primary'/> sandeep.bsn@gmail.com
                </div>
            </div>

            <div className={`${styles.pic}`}>
                <img src="/profile.jpeg" 
                className="rounded-circle" 
                alt="profilepicture"></img>
                <div className={styles.smallcircle}>
                    
                </div>
            </div>

            
        </div>
    )
}