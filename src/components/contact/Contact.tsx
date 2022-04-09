import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com'

const Contact = () => {
    const form: React.Ref<any> = useRef()

    const sendEmail = (e: any) => {
        e.preventDefault()

        emailjs.sendForm('service_eyub94u', 'template_4rbuah6', form.current, 'A8LJ4kHEAE13uB91V')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        e.target.reset()
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>e-Mail</h4>
                        <h5>youssefelderiny@gmail.com</h5>
                        <a href="mailto:youssefelderiny@gmail.com" target="_blank" rel="noreferrer">Send an e-Mail</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <a href="https://wa.me/+971504695104" target="_blank" rel="noreferrer">Send a text</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="e-Mail" name="e-Mail" placeholder="Your e-Mail" required/>
                    <textarea name="message" rows={7} placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact