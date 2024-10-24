import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.png";
import person7 from "../assets/person7.jpg";
import person8 from "../assets/person8.jpg";
import person9 from "../assets/person9.jpg";
import person10 from "../assets/person10.jpg";

export default function About() {
  const About = [
    {
      img: person1,
      heading:
        "Simplifying email communicating, socializing, sharing photos, videos and documents in a secure environment.",
    },
    {
      img: person2,
      heading:
        "Instant Email messaging via Bobosoho Applicationl available on all networks",
    },
    {
      img: person3,
      heading:
        "Connecting people seamlessly while maintaining the highest security standards.",
    },
    {
      img: person4,
      heading:
        "Sharing moments, ideas, and collaborations securely, all in one platform.",
    },
    {
      img: person5,
      heading:
        "Bobosoho Email by BFIN Group is a social platform that makes sharing photos, videos, and documents easy with a user-friendly interface.",
    },
    {
      img: person6,
      heading:
        "Organize memories and documents easily with our efficient folder management system.",
    },
    {
      img: person7,
      heading:
        "Easily create contact groups to send emails to multiple recipients instantly.",
    },
    {
      img: person8,
      heading:
        "Bobosoho Email streamlines communication, offering a modern, efficient way to connect and share.",
    },
    {
      img: person9,
      heading:
        "Stay connected with our group feature, sharing updates and coordinating plans effortlessly with family and friends.",
    },
    {
      img: person10,
      heading:
        "Bobosoho Email simplifies sharing and secures your experiences, enhancing both work and personal communication.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 mx-5 md:container md:mx-auto my-10">
      {About.map((content, i) => (
        <div
          key={i}
          className={`flex flex-col lg:flex-row items-center gap-10 ${
            i % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } py-10`}
        >
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl w-full"
              src={content.img}
              alt={`About image ${i + 1}`}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl leading-loose font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {content.heading}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
}
