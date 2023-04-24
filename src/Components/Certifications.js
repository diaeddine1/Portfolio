
import React from 'react'
import { Carousel } from 'react-responsive-carousel'


export default function Certifications() {
    const certificats = [

        {
            id:'1',
            src:'devops.png',
            url:'https://www.coursera.org/account/accomplishments/specialization/ZZX5B8ZS9F5E',
            nom:'DevOps, Cloud, and Agile Foundations',
            date :'Mars 31 2023'
        },
        {
            id:'2',
            src:'node.png',
            url:'https://www.coursera.org/account/accomplishments/verify/V6BBJUJE32NU',
            nom:'Developing Back-End Apps with Node.js and Express',
            date :'February 21 2023'
        },
        {
            id:'3',
            src:'strap.png',
            url:'https://www.coursera.org/account/accomplishments/verify/WJGV4Y4NKZU2',
            nom:'Front-End Web UI Frameworks and Tools:Bootstrap 4',
            date :'February 21 2023'
        },
        {
            id:'4',
            src:'data.png',
            url:'https://www.coursera.org/account/accomplishments/verify/T8MB9LR6KG2A',
            nom:'Data Collection and Processing with Python',
            date :'January 26 2022'
        },
        
    ]
  return (
    <div className='cent'>
    <Carousel 
    autoPlay 
    infiniteLoop 
    width={"50%"} 
    interval={3000} 
    thumbWidth={"150px"}
    showIndicators={false}
    

    >

        {certificats.map(carous=>

            <a href={carous.url} key={carous.id} className='link'>
                  <div>{carous.nom}</div>
                  
                <img className='certif-image' src={carous.src}></img>
              
                <div>Date d'Obtention : {carous.date}</div>
                </a>
        )}

    </Carousel>
    </div>
    
  )
}
