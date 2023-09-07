/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rabia's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rabia Naz Portfolio",
    type: "website",
    url: "http://rabianaz.com/",
  },
};

//Home Page
const greeting = {
  title: "Hi! I'm Rabia Naz",
  logo_name: "RabiaNaz",
  // nickname: "Rabia",
  subTitle:
    "A versatile individual, seamlessly fusing technology, design, and words. A perpetual student and dedicated collaborator, weaving innovation and knowledge-sharing into the world of technology.",
  portfolio_repository: "https://iamrabia-n.github.io/",
  githubProfile: "https://github.com/iamRabia-N",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rabia-n/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Behance",
    link: "https://www.behance.net/iamRabia-N",
    fontAwesomeIcon: "fa-behance", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Github",
    link: "https://github.com/iamRabia-N",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Medium",
    link: "https://medium.com/@Rabia_Naz",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "black", // Reference https://simpleicons.org/?q=youtube
  },
];

const skills = {
  data: [
    {
      title: "Frontend Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient frontend developer skilled in creating responsive and visually compelling web interfaces.",
        "⚡ Expertise in HTML, CSS, JavaScript, and modern frontend frameworks, ensuring a seamless user experience.",
        "⚡ Strong problem-solving abilities to address cross-browser compatibility and performance optimization challenges.",
        "⚡ Committed to enhancing the quality and functionality of web applications.",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "devicon:jquery",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UX Designer",
      fileName: "DesignImg",
      skills: [
        "⚡ Specialized UX designer with a track record of optimizing digital experiences.",
        "⚡ Proficient in user research, information architecture, wireframing, and prototyping.",
        "⚡ Known for effective collaboration with cross-functional teams to transform complex requirements into intuitive, visually appealing interfaces.",
        "⚡ Committed to upholding user-centered design principles, resulting in products that align with business objectives and deliver exceptional user experiences.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "devicon:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Technical Writer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Creative thinker with a knack for adding a fresh perspective to technical topics, making them relatable and intriguing for readers.",
        "⚡ Demonstrated ability to bridge the gap between technical experts and non-technical audiences through articulate and well-structured documentation and articles.",
        "⚡ Strong analytical skills, enabling the translation of intricate technical details into user-friendly guides, tutorials, and manuals.",
        "⚡ Extensive experience collaborating with subject matter experts and cross-functional teams to gather information and insights, ensuring accurate and up-to-date content.",
      ],
      softwareSkills: [
        {
          skillName: "LinkedIn",
          fontAwesomeClassname: "devicon:linkedin",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Medium",
          fontAwesomeClassname: "mingcute:medium-fill",
          style: {
            color: "black",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Sargodha",
      subtitle: "BS Software Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "University of Sargodha",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Currently in the final year of this degree.",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, Networking, etc.",
        "⚡ Apart from this, I have done courses on UX Designing, Six Sigma and Web Development.",
        "⚡ Besides having a strong grip on technical subjects, I am also passionate about focusing on non-technical skills, for which I have studied HRM, Art of Communication, and Entrepreneurship.",
      ],
      website_link: "https://su.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google UX Design Professional Certificate",
      subtitle: "7-Course Series",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/google-ux-design",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Six Sigma Yellow Belt Specialization",
      subtitle: "4-Course Series",
      logo_path: "usog.jpg",
      certificate_link:
        "https://www.coursera.org/specializations/six-sigma-fundamentals",
      alt_name: "University System of Georgia",
      color_code: "#2e3a84",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked as a frontend developer in 3 hackathons and UX Designer in 2 hackathons with some amzing developers and designers around the globe. I love contributing in open-souce and that is why I am also involved with many open-source communities as a contributor.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Freelance Writer",
          company: "Remote",
          logo_path: "freelance.jpg",
          description:
            "I am working as a freelance writer. My freelance services involves writing articles, documentations, tutorials, and research papers for my clients. I am dedicated to maintaining the highest standards of quality, accuracy, and consistency in all written materials, while also meeting deadlines and exceeding client expectations.",
          color: "#0879bf",
        },
        {
          title: "GirlScript Summer ofo Code",
          company: "GirlScript Foundation",
          company_url: "https://about.google/",
          logo_path: "gssoc.png",
          duration: "June 2023 - August 2023",
          location: "Remote",
          description:
            "I have contributed in open-source projects for 3 months under the program named GSSoC. I have contributed in more than 30 projects, raised more than 180 issues and more than 120 merged pull requests. I have mainly contributed as a UX designer.",
          color: "#4285F4",
        },
        {
          title: "Social Summer of Code",
          company: "Social",
          company_url: "https://www.microsoft.com/",
          logo_path: "ssoc.png",
          duration: "June 2023 - July 2023",
          location: "June",
          description:
            "I have contributed in open-source projects for 2 months under the program named SSoC Season2. I have contributed as a frontend developer, bugs fixes and documentations improvement.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Open-Source Contributor",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          description:
            "I am actively contributing to many open-source projects. My contributions include bug fixes, feature requests, improving user experience and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have made various frontend and UX design projects. My best experience is to create frontend and UX Design projects and deploy them on Github and Behance respectively.",
  avatar_image_path: "projects_image.svg",
};
// const githubprojectheader = {
//   title: "Github Projects I have contributed in",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const githubproject = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Games-and-Go",
//       description: "Case study on ecommerce app for cafe",
//       url:
//         "https://github.com/ssitvit/Games-and-Go",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "GameZone",
//       createdAt: "2023-08-09T16:26:54Z",
//       description: "Case study on ecommerce app for cafe",
//       url:
//         "https://www.behance.net/gallery/177132547/DelightBlossom-Ecommerce-App-for-Cafe",
//     },
//   ],
// };
const publicationsHeader = {
  title: "Projects",
  description:
    "I have worked on many frontend and UX projects projects among which few are mentioned here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      Category: "(UX Design Project)",
      name: "DelightBlossom",
      Tools: "Tools Used: Figma",
      createdAt: "Published on: Behance",
      description: "Case study on ecommerce app for cafe",
      url:
        "https://www.behance.net/gallery/177132547/DelightBlossom-Ecommerce-App-for-Cafe",
    },
    {
      Category: "(UX Design Project)",
      name: "Divine Dwelling",
      Tools: "Tools Used: Figma",
      createdAt: "Published on: Behance",
      description: "Case study on responsive website for finding apartments",
      url:
        "https://www.behance.net/gallery/178602705/Responsive-Website-for-Finding-Apartments",
    },
    {
      Category: "(Frontend Project)",
      name: "HRA",
      Tools: "Tools Used: HTML, CSS, JavaScript, JQuery",
      createdAt: "Published on: Github",
      description: "HRA is the clothing brand's website that helps users stay updated with the latest collection. ",
      url:
        "https://github.com/iamRabia-N/HRA",
    },
    {
      Category: "(Frontend Project)",
      name: "TODOS - Todo List Website",
      Tools: "Tools Used: HTML, CSS, JavaScript, JQuery",
      createdAt: "Published on: Github",
      description: "TODOS is a small, simple yet beautiful todo list website. It can help you record and track your daily plan list. ",
      url:
        "https://github.com/iamRabia-N/To-Do-List-website",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    description:
      "I am available on almost every social media that is mentioned below. You can contact me on these socials. I love collaborative learning and working. If you want to collaborate with me in development or design, do let me know. I would love to work together. For any queries, questions or help, contact me on LinkedIn.",
  },
  blogSection: {
    ontactSection: {
      title: "Contact Me",
      profile_image_path: "contact.png",
      description:
        "I am available on almost every social media platform that is mentioned below. You can contact me on these social media sites. I love collaborative learning and working. If you want to collaborate with me in development or design, do let me know. I would love to work together. For any queries, questions or help, contact me on LinkedIn.",
    },
  },

  
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  // githubprojectheader,
  // githubproject
};
