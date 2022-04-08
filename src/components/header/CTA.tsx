import React from 'react'
import CV from '../../assets/current-resume.pdf'

//stands for 'call to action'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA