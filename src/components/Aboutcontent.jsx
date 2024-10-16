import React from 'react'

export default function Aboutcontent() {
    const Para = [
        {
            content: "Bobosoho Email, powered by BFIN Group, is not just an email service; it’s a dynamic social platform designed to enhance your communication experience. With our intuitive interface, you can effortlessly send and receive photos, videos, and documents, making sharing memories and important files easier than ever."
        },
        {
            content: "Our unique folder management system allows you to organize your content efficiently. Create special folders for your cherished memories, important documents, or collaborative projects. Whether it's your latest vacation photos or critical work documents, you’ll have everything neatly categorized for quick access."
        },
        {
            content: "But that’s not all! With our group feature, you can easily create contact groups, allowing you to send and receive emails instantly to multiple recipients. Perfect for team collaborations, family updates, or sharing news with friends, this feature ensures that everyone stays in the loop without the hassle of individual emails."
        },
        {
            content: "Experience a new way of connecting with your world. Bobosoho Email is designed to streamline your communication, keeping everything you need right at your fingertips. Embrace the future of email with us and transform the way you connect and share!"
        },
        {
            content: "Bobosoho Email is more than just a platform for sending emails; it’s your ultimate collaboration hub! With our integrated tools, you can share photos, videos, and documents seamlessly with colleagues or friends. Whether you’re working on a group project or planning an event, Bobosoho Email makes it easy to gather all your materials in one place."
        },
        {
            content: "Our special folders allow you to categorize your shared content, ensuring that you can find what you need in seconds. For instance, create a folder for project assets, another for client communications, and one for personal photos—all within the same platform!"
        },
        {
            content: "Our group feature allows you to maintain close connections with friends and family. Instantly send updates, share exciting news, or coordinate plans with just a few clicks. Imagine creating a group for your family, where everyone can share photos from special occasions or stay updated on each other’s lives without the clutter of individual messages."
        },
        {
            content: "Bobosoho Email enhances your social interactions, making it easy to share your experiences while keeping everything in one secure place. Whether for work or personal use, our platform enriches your communication, allowing you to share and connect like never before. Join us and redefine how you communicate!"
        }
    ]

    // Array of colors
    const colors = [
        'bg-red-200',
        'bg-blue-200',
        'bg-green-200',
        'bg-yellow-200',
        'bg-purple-200',
        'bg-pink-200',
        'bg-indigo-200',
        'bg-teal-200'
    ];

    return (
        <section className='relative'>
            {Para.map((contents, i) => (
                <div key={i} className={`rounded-3xl sticky top-0 py-20 px-10 my-10 text-3xl ${colors[i % colors.length]}`}>
                    <p>{contents.content}</p>
                </div>
            ))} 
        </section>
    )
}
