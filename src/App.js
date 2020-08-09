import React from 'react';
import './App.css';
import Intro from './Components/intro/Intro'
import Proficiency from './Components/proficiencies/Proficiency'
import Projects from './Components/projects/Projects'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import KeyStats from './Components/5circles/KeyStats'

function App() {
  return (
    <div>
      <Intro/>
      <Proficiency/>
      <div className="d-flex flex-column">
      <div className="text-center projects mb-2">
        Projects
      </div>
      {window.innerWidth >= 768 ? 
      <Carousel className="text-center p-5" 
            nextIcon={<span aria-hidden="true" className="nexticon" />}
            prevIcon={<span aria-hidden="true" className="previcon" />}>
      <CarouselItem>
      <div className="d-flex justify-content-around">
        <div>
          <Projects projectImage="/gradercomparison.png"
                    projectLink="http://marksrecorder.sandeepbabu.tech"
                    repoLink="https://github.com/sandeepbsn/grader"
                    projectTitle="Grader" 
                    projectSubTitle="Project 1"
                    projectDescription="App that helps teachers to record grades easily"
                    skills={['React', 'Redux', 'Python', 'Flask']}/>
        </div>

        <div>
          <Projects projectImage="/gyanbabameme.png"
                    projectLink="https://github.com/sandeepbsn/gyanbaba"
                    repoLink="https://github.com/sandeepbsn/gyanbaba"
                    projectTitle="GyanBaba" 
                    projectSubTitle="Project 2"
                    projectDescription="Having a slack fatigue? GyanBaba would help you relax while using slack"
                    skills={['Slack apps', 'Python', 'Flask', 'MySQL']}/>
        </div>

        <div>
          <Projects projectImage="/tmscustomer.png"
                    projectLink="https://support.sandeepbabu.tech/login"
                    repoLink="https://github.com/sandeepbsn/ticket-management-system"
                    projectTitle="Support360" 
                    projectSubTitle="Project 3"
                    projectDescription="App that helps customers and organizations to solve issues by raising and resolving tickets"
                    skills={['React', 'Python', 'Flask', 'MySQL']}/>
        </div>
      </div>

      </CarouselItem>

      <CarouselItem>
      <div className="d-flex justify-content-around">
        <div>
          <Projects projectImage="/9flatslanding.png"
                    projectLink="http://flatsclone.sandeepbabu.tech/"
                    repoLink="https://github.com/sandeepbsn/9flats"
                    projectTitle="9flats clone" 
                    projectSubTitle="Project 4"
                    projectDescription="Clone of 9flats website that to book accommodations"
                    skills={['React', 'Python', 'Flask', 'MySQL']}/>
        </div>
      </div>
      </CarouselItem>
      </Carousel>:
      <Carousel className="text-center" 
                nextIcon={<span aria-hidden="true" className="nexticon" />}
                prevIcon={<span aria-hidden="true" className="previcon" />}>
        <CarouselItem>
        <div className="d-flex justify-content-around">
          <div>
            <Projects projectImage="/gradercomparison.png"
                      projectLink="http://marksrecorder.sandeepbabu.tech"
                      repoLink="https://github.com/sandeepbsn/grader"
                      projectTitle="Grader" 
                      projectSubTitle="Project 1"
                      projectDescription="App that helps teachers to record grades easily"
                      skills={['React', 'Redux', 'Python', 'Flask']}/>
          </div>
        </div>
        </CarouselItem>

        <CarouselItem>
        <div className="d-flex justify-content-around">
          <div>
            <Projects projectImage="/gyanbabameme.png"
                      projectLink="https://github.com/sandeepbsn/gyanbaba"
                      repoLink="https://github.com/sandeepbsn/gyanbaba"
                      projectTitle="GyanBaba" 
                      projectSubTitle="Project 2"
                      projectDescription="Having a slack fatigue? GyanBaba would help you relax while using slack"
                      skills={['Slack apps', 'Python', 'Flask', 'MySQL']}/>
          </div>
        </div>
        </CarouselItem>

        <CarouselItem>
        <div className="d-flex justify-content-around">
          <div>
            <Projects projectImage="/tmscustomer.png"
                      projectLink="https://support.sandeepbabu.tech/login"
                      repoLink="https://github.com/sandeepbsn/ticket-management-system"
                      projectTitle="Support360" 
                      projectSubTitle="Project 3"
                      projectDescription="App that helps customers and organizations to solve issues by raising and resolving tickets"
                      skills={['React', 'Python', 'Flask', 'MySQL']}/>
          </div>
        </div>
        </CarouselItem>

        <CarouselItem>
          <div className="d-flex justify-content-around">
            <div>
              <Projects projectImage="/9flatslanding.png"
                        projectLink="http://flatsclone.sandeepbabu.tech/"
                        repoLink="https://github.com/sandeepbsn/9flats"
                        projectTitle="9flats clone" 
                        projectSubTitle="Project 4"
                        projectDescription="Clone of 9flats website that to book accommodations"
                        skills={['React', 'Python', 'Flask', 'MySQL']}/>
            </div>
          </div>
        </CarouselItem>
      </Carousel>}
      </div>
      <div>
        <KeyStats/>
      </div>
    </div>
  );
}

export default App;
