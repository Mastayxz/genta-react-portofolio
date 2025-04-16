import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/new.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/qr-generator.png";
import project7 from "../assets/projects/postman1.png";
import project8 from "../assets/projects/api-book.png";
import project9 from "../assets/projects/devlog.png";
import project10 from "../assets/projects/EXPENSE.png";

export const HERO_CONTENT = `Hi, I'm Genta Arimbawa, a passionate full-stack developer based
in Bali, Indonesia. Currently, I'm a student at Politeknik
Negeri Bali pursuing my degree in Software Engineering. My
journey in programming began during high school, and since then,
I've been exploring various programming languages and
frameworks.`;

export const ABOUT_TEXT = `I'm a full stack developer who enjoys building simple, efficient, and user-friendly web applications. I've worked on more than 5 projects using technologies like HTML, CSS, JavaScript, PHP, and MySQL, as well as frameworks like Laravel and Node.js.

I got into web development out of curiosity about how things work behind the scenes. Since then, I've been learning and growing through hands-on projects. I work on both the front-end and back-end, and I'm also able to create REST APIs for web and mobile app needs.

I like to write clean, readable code that makes future development easier and more maintainable. `;

export const PROJECTS = [
  {
    type: "web",
    title: "E-Commerce Website Suka Suka Furniture (Final Semester Project)",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    link: "https://kelas2a04.lab-trpl.id/",
    github: "https://github.com/Mastayxz/project-uas-web",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap", "Javascript"],
  },
  {
    type: "web",
    title: "Jendela Wisata Tourism Information Website (Project Base Learning)",
    image: project2,
    description:
      "The Jendela Wisata Tourism Information Website is a system that provides information related to tourism components in Bali. This is an implementation of project-based learning activities",
    link: "https://pariwisata.lab-trpl.id",
    github: "https://github.com/Mastayxz/jendela_wisata_v2",
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
    type: "web",
    title: "QR Generator",
    image: project6,
    description: "A Website QR Code Builder",
    link: "https://qr-generator-orpin-two.vercel.app/",
    github: "https://github.com/Mastayxz/qr-frontend",
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
    type: "web",
    title: "SIBIMOLI TRPL",
    image: project3,
    description:
      "A website for sistem bimbingan skripsi for stundent in software Engineering, Politeknik Negeri Bali",
    link: "#",
    github: "https://github.com/Mastayxz/bimbingan-skripsi-trpl",
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
    type: "web",
    title: "Masta Verse Blog - On Progress",
    image: project9,
    description:
      "A Blog Website for Masta Verse Dev Blog, this website is for note taking about my journey in software engineering",
    link: "#",
    github: "https://github.com/Mastayxz/Masta-Blog",
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
    type: "web",
    title: "Dog House",
    image: project4,
    description:
      "A Landing Page Website for Dog House, this is implementation Basic Code Front End",
    link: "https://mastayxz.github.io/dog_house/",
    github: "https://github.com/Mastayxz/dog_house",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    type: "web",
    title: "HelpFull Donation",
    image: project5,
    description:
      "Helpful is a dedicated donation platform designed to provide immediate and impactful relief to communities affected by natural disasters. Our mission is to connect compassionate individuals with trusted organizations to deliver essential aid swiftly and efficiently.",
    link: "https://mastayxz.github.io/helpful-donation-website/",
    github: "https://github.com/Mastayxz/helpful-donation-website",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    type: "web",
    title: "Expense Tracker - On Progress",
    description:
      "Expense Tracker is a web application that allows users to track their expenses. User can add, edit, and delete expenses. The application also provides a feature to view all expenses in a table format.",
    image: project10,
    link: "#", // bisa link postman atau swagger
    github: "#",
    technologies: ["express.js", "MongoDB", "node.js", "React.js"],
  },
  {
    type: "api",
    title: "API Expense Tracker",
    description: "Documentation API for managing data Expense Tracker",
    image: project7,
    link: "https://documenter.getpostman.com/view/43575693/2sB2cbaJwp", // bisa link postman atau swagger
    github: "https://github.com/Mastayxz/expense-tracker-backend",
    technologies: ["express.js", "MongoDB", "node.js"],
  },
  {
    type: "api",
    title: "API Bookshelf",
    description: "Documentation API for managing data Bookshelf",
    image: project8,
    link: "https://documenter.getpostman.com/view/12345678/abcde", // bisa link postman atau swagger
    github: "https://github.com/Mastayxz/api-bookself",
    technologies: ["Laravel", "MySQL"],
  },
];

export const CONTACT = {
  address: "Badung, Bali ",
  phoneNo: "+62 8785 2721 886 ",
  email: "gentaarimbawa@gmail.com",
};
