import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/new.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/qr-generator.png";

export const HERO_CONTENT = `Hi, I'm Genta Arimbawa, a passionate full-stack developer based
in Bali, Indonesia. Currently, I'm a student at Politeknik
Negeri Bali pursuing my degree in Software Engineering. My
journey in programming began during high school, and since then,
I've been exploring various programming languages and
frameworks.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With over 5 project experience, I have worked with a variety of technologies, including HTML, CSS, PHP, MySQL, Javascript, and more frame work. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. `;

export const PROJECTS = [
  {
    title: "E-Commerce Website Suka Suka Furniture (Final Semester Project)",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    link: "https://kelas2a04.lab-trpl.id/",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap", "Javascript"],
  },
  {
    title: "Jendela Wisata Tourism Information Website (Project Base Learning)",
    image: project2,
    description:
      "The Jendela Wisata Tourism Information Website is a system that provides information related to tourism components in Bali. This is an implementation of project-based learning activities",
    link: "https://pariwisata.lab-trpl.id",
    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "Codeigniter",
      "Bootstrap",
      "Javascript",
      "MySQL",
    ],
  }, 
  {
    title: "QR Generator",
    image: project6,
    description: "A Website QR Code Builder",
    link: "https://qr-generator-orpin-two.vercel.app/",
    technologies: [
      "React.js",
      "tailwind css",
      "vite",
      "typescript",
      "node.js",
      "express.js",
    ],
  },

  {
    title: "Bimbingan Skripsi",
    image: project3 ,
    description:
      "A website for sistem bimbingan skripsi for stundent in software Engineering, Politeknik Negeri Bali",
    link: "https://mastayxz.github.io/dog_house/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "Javascript",
      "MySQL",
      "Blade",
    ],
  },
  {
    title: "Dog House",
    image: project4,
    description:
      "A Landing Page Website for Dog House, this is implementation Basic Code Front End",
    link: "https://mastayxz.github.io/dog_house/",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "HelpFull Donation",
    image: project5,
    description:
      "Helpful is a dedicated donation platform designed to provide immediate and impactful relief to communities affected by natural disasters. Our mission is to connect compassionate individuals with trusted organizations to deliver essential aid swiftly and efficiently.",
    link: "https://mastayxz.github.io/helpful-donation-website/",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Badung, Bali ",
  phoneNo: "+62 8785 2721 886 ",
  email: "gentaarimbawa@gmail.com",
};
