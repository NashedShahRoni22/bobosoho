import React from 'react'
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"
import person4 from "../assets/person4.jpg"
import Aboutcontent from '../components/Aboutcontent'


export default function About() {

    const About = [
        {
            img: person1,
            heading: "Simplifying email communicating, socializing, sharing photos, videos and documents in a secure environment."
        },
        {
            img: person2,
            heading: "Instant Email messaging via Bobosoho Application available on"
        },
        {
            img: person3,
            heading: "Connecting people seamlessly while maintaining the highest security standards."
        },
        {
            img: person4,
            heading: "Sharing moments, ideas, and collaborations securely, all in one platform."
        }
    ]

    return (
            <section className='flex flex-col gap-10 mx-5 md:container md:mx-auto my-10'>
            {About.map((content, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} py-10`}>
                    <div className='w-full lg:w-1/2'>
                        <img className='rounded-3xl w-full' src={content.img} alt={`About image ${i + 1}`} />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-4xl lg:text-6xl leading-loose font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            {content.heading}
                        </h1>
                    </div>
                </div>
            ))}

            <Aboutcontent/>
        </section>
    )
}
