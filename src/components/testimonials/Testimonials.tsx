import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination, Navigation} from 'swiper'

import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
    {
        avatar: AVTR1,
        name: "Reem Moustafa",
        review: "Joe has the best code. Honestly and for real."
    },
    {
        avatar: AVTR2,
        name: "Adnan Al Jundi",
        review: "I haven't slept last night, so I might not be objective, but Joe makes the best software tings."
    },
    {
        avatar: AVTR3,
        name: "Clyde Fernandes",
        review: "Joe's code saves me money. I literally got a coupon for Joe's code."
    },
    {
        avatar: AVTR4,
        name: "Summer Al Kadhem",
        review: "Joey's has the best programming. I'm a lawyer and I can sue anyone who says otherwise. I'm also not bias."
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Navigation, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One"/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials