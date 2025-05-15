/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rabia's Portfolio",
  description:
    // "I'm a dynamic professional, shaping the future as an ML researcher, simplifying complex tech as a technical writer, creating user experiences as a UX designer and bringing visions to life through frontend development. Shaping Innovation at the Intersection of Data, Words, Design and Code.",
    "I'm a dynamic professional who shapes the future as an ML engineer, simplifies complex tech as a technical writer, creates user experiences as a UX designer and brings visions to life through frontend development.",
  og: {
    title: "Rabia Naz Portfolio",
    type: "website",
    url: "http://rabianaz.com/",
  },
};

//Home Page
const greeting = {
  title: "Hi👋, I'm Rabia Naz",
  logo_name: "RabiaNaz",
  // nickname: "Rabia",
  subTitle:
    "I'm a dynamic professional who shapes the future as an ML engineer, simplifies complex tech as a technical writer, creates user experiences as a UX designer and brings visions to life through frontend development.",
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
  {
    name: "Quora",
    link: "https://www.quora.com/profile/Rabia-Naz-76",
    fontAwesomeIcon: "fa-quora", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#B92B27", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/rabianaz22",
    fontAwesomeIcon: "fa-kaggle", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#20BEFF", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/22688262/rabia-naz",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF9900", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0001-2418-1972",
    fontAwesomeIcon: "fa-orcid", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#A6CE39",
  },
];

const skills = {
  data: [
    {
      title: "ML Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Passionate ML engineer skilled in extracting valuable insights from data.",
        "⚡ Proficient in key ML libraries like NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow and Keras.",
        "⚡ Strong problem-solving skills for in-depth data analysis and model development.",
        "⚡ Committed to teamwork and simplifying complex math for practical results.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Technical Writer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Offer readers a relatable and engaging perspective on technical topics through a creative approach.",
        "⚡ Ability to bridge the gap between technical experts and non-technical audiences through well-structured documentations.",
        "⚡ Strong analytical skillset to translate complex technical details into clear and user-friendly guides, tutorials and manuals.",
        "⚡ Experienced in collaborating with cross-functional teams to ensure technical information is accurate, clear and up to date.",
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
    {
      title: "UX Designer",
      fileName: "DesignImg",
      skills: [
        "⚡ Specialized UX designer with a focus on optimizing digital experiences.",
        "⚡ Proficient in user research, information architecture, wireframing and prototyping.",
        "⚡ Known for effective collaboration with cross-functional teams to transform complex requirements into visually appealing interfaces.",
        "⚡ Committed to upholding user-centered design principles to create products that align with business objectives and deliver exceptional user experiences.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "devicon:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Webflow",
          fontAwesomeClassname: "skill-icons:webflow",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "black",
          },
        },
      ],
    },
    {
      title: "Frontend Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient frontend developer skilled in creating responsive and visually compelling web interfaces.",
        "⚡ Expertise in HTML, CSS and JavaScript with a focus on ensuring a smooth and interactive user experience.",
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
        "⚡ Studied key subjects like OOP, DSA, DBMS, OS and SQA.",
        "⚡ Completed advanced courses in machine learning, UX design and project management.",
        "⚡ Developed strong non-technical skills including HRM, communication and entrepreneurship.",
        "⚡ Actively involved in the UX design team where we organized and led workshops to share UX knowledge with students.",
      ],
      website_link: "https://su.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "3-Course Series",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/specializations/machine-learning-introduction",
      alt_name: "DeepLearning.AI",
      color_code: "#1F70C199",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      subtitle: "4-Course Series",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
      alt_name: "DeepLearning.AI",
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
      title: "Foundations of Project Management",
      // subtitle: "1-Course",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/learn/project-management-foundations",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  // description:
  //   "I have participated as a frontend developer in three hackathons and as a UX designer in two hackathons, collaborating with amazing developers and designers from around the globe. I have a strong passion for contributing to open-source projects and this commitment has led me to actively participate in various open-source communities as a valuable contributor.",
  description:
    "I have significant experience as a frontend developer, UX designer, technical writer, machine learning engineer and researcher. I also have a strong passion for contributing to open-source projects. I enjoy working with others and look for opportunities to create meaningful solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Lecturer",
          company: "Punjab Group Of Colleges",
          logo_path: "pgc.png",
          duration: "October 2024 - April 2025",
          location: "On-site",
          // description:
          //   "As a lecturer, I teach computer-related subjects to intermediate and bachelor's level students. My goal is to simplify complex topics and make learning easier and more practical for them. As a lecturer, I taught computer-related subjects to intermediate and bachelor's level students. I focused on simplifying complex topics and making learning more accessible and practical throughout my time in this role.",
          description:
            "As a lecturer, I taught computer-related subjects to intermediate and bachelor's level students. I focused on simplifying complex topics and making learning more accessible and practical throughout my time in this role.",
          color: "#0879bf",
        },
        {
          title: "ML Engineer",
          company: "Freelancer",
          logo_path: "freelance.jpg",
          duration: "March 2024 - Present",
          location: "Remote",
          description:
            "I'm working as an ML Engineer where my primary focus is on building smart systems and discovering insights from data. I create strong machine learning models, analyze complex datasets and find innovative solutions. Quality and accuracy along with meeting deadlines are my priorities. I am committed to exceeding client expectations in every project.",
          color: "#0879bf",
        },
        {
          title: "Technical Writer",
          company: "Freelancer",
          logo_path: "freelance.jpg",
          duration: "August 2023 - February 2024",
          location: "Remote",
          description:
            "I worked as a contract-based technical writer with a focus on creating research analysis papers, articles and documentations. I dedicated myself to maintaining the highest standards of quality, accuracy and consistency in all written materials while also ensuring timely delivery and exceeding client expectations.",
          color: "#0879bf",
        },
        {
          title: "GirlScript Summer of Code",
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
          location: "Remote",
          description:
            "I have contributed in open-source projects for 2 months under the program named SSoC Season2. I have contributed as a frontend developer, bugs fixes and documentations improvement.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Publications",
      experiences: [
        {
          title:
            "A Review on Cloud Computing Threats, Security, and Possible Solutions",
          company:
            "International Journal of Innovations in Science & Technology",
          company_url:
            "https://journal.50sea.com/index.php/IJIST/article/view/989/1596",
          logo_path: "paper.png",
          duration: "16th September 2024",
          location: "Journal Paper",
          description:
            "The paper explains the security challenges in cloud computing and discusses solutions to address them. It highlights issues like data breaches, DDoS attacks and weak encryption methods while offering techniques like AI-based threat detection and advanced encryption to enhance cloud security.",
          color: "#181717",
        },
        {
          title: "Real Estate Price Prediction",
          company:
            "International Journal of Innovations in Science & Technology",
          company_url:
            "https://journal.50sea.com/index.php/IJIST/article/view/951/1498",
          logo_path: "paper.png",
          duration: "25th July 2024",
          location: "Journal Paper",
          description:
            "The paper explains how machine learning and deep learning techniques are applied to predict real estate prices. It explores different algorithms to tackle challenges such as market fluctuations and data complexity in order to improve the accuracy of property value predictions.",
          color: "#181717",
        },
        {
          title:
            "Machine Learning, Deep Learning, and Hybrid Approaches in Real Estate Price Prediction: A Comprehensive Systematic Literature Review",
          company:
            "    Proceedings of Pakistan Academy of Sciences: A Physical and Computational Sciences",
          company_url:
            "https://ppaspk.org/index.php/PPAS-A/article/view/1356/796",
          logo_path: "paper.png",
          duration: "28th June 2024",
          location: "Journal Paper",
          description:
            "The paper reviews different methods used to predict real estate prices focusing on machine learning, deep learning and hybrid techniques. It analyzes both qualitative and quantitative factors that affect property values and identifies gaps in current research.",
          color: "#181717",
        },
        {
          title:
            "Enhancing Access to Legal Information: AI-Driven Constitution of Pakistan Search Engine",
          company:
            "1st International Conference on Women Development in Engineering Science & Technology",
          company_url:
            "https://wdest.muet.edu.pk/wp-content/uploads/2023/10/Abstract-Book_WD-EST23-Full.pdf ",
          logo_path: "paper.png",
          duration: "3rd - 5th October 2023",
          location: "Conference Paper",
          description:
            "The paper proposes an AI-driven search engine to enhance access to the Pakistani Constitution. It allows efficient information retrieval for law enforcement, NGOs and the public by using neural networks to process and vectorize data for improved search results.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Open-Source Contributor",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          description:
            "I am actively contributing to many open-source projects. My contributions include bug fixes, feature requests, improving user experience and formulating proper documentation for the projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  // description:
  //   "I've had the opportunity to work on several frontend and UX design projects and I've enjoyed both creating them and sharing the finished work on platforms like GitHub and Behance. For machine learning, I exclusively conduct all of my work on Kaggle. Additionally, I contribute my knowledge to help others on Stack Overflow and Quora.",
  description:
    "I have worked on various frontend and UX design projects which I’ve had the opportunity to showcase on platforms like GitHub and Behance. Data science projects are conducted exclusively on Kaggle where I engage with real-world data challenges and continuously enhance my expertise. I also contribute actively to the developer community by sharing knowledge on Stack Overflow and Quora.",
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
  // description:
  // "I've had the opportunity to work on numerous frontend and UX projects, with a few of them highlighted here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      Category: "(Machine Learning Project)",
      name: "House Prices - Advanced Regression Techniques",
      Tools: "Libraries Used: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn",
      createdAt: "Published on: Kaggle, GitHub",
      description:
        "A Kaggle competition to predict the sales prices of houses.",
      url:
        "https://github.com/iamRabia-N/HousePrices_AdvancedRegressionTechniques/tree/main",
    },
    {
      Category: "(Frontend Project)",
      name: "EarthMark",
      Tools:
        "Tech Stack Used: HTML, CSS, JavaScript, Flask, Python, Scikit-learn, API",
      createdAt: "Published on: GitHub",
      description:
        "EarthMark is a real estate price prediction website built to provide accurate property price estimates. ",
      url: "https://github.com/iamRabia-N/EarthMark",
    },
    {
      Category: "(UX Design Project)",
      name: "DelightBlossom",
      Tools: "Tool Used: Figma",
      createdAt: "Published on: Behance",
      description: "Case study on ecommerce app for cafe.",
      url:
        "https://www.behance.net/gallery/177132547/DelightBlossom-Ecommerce-App-for-Cafe",
    },

    {
      Category: "(Machine Learning Project)",
      name: "Titanic - Machine Learning from Disaster",
      Tools: "Libraries Used: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn",
      createdAt: "Published on: Kaggle",
      description:
        "A Kaggle competition to predict the survival of passengers on the Titanic using various ML models.",
      url:
        "https://www.kaggle.com/code/rabianaz22/titanic-machine-learning-from-disaster",
    },
    {
      Category: "(Frontend Project)",
      name: "HRA",
      Tools: "Tech Stack Used: HTML, CSS, JavaScript, JQuery",
      createdAt: "Published on: GitHub",
      description:
        "HRA is the clothing brand's website that helps users stay updated with the latest collection. ",
      url: "https://github.com/iamRabia-N/HRA",
    },
    {
      Category: "(UX Design Project)",
      name: "Divine Dwelling",
      Tools: "Tool Used: Figma",
      createdAt: "Published on: Behance",
      description: "Case study on responsive website for finding apartments.",
      url:
        "https://www.behance.net/gallery/178602705/Responsive-Website-for-Finding-Apartments",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    // description:
    //   "I am available on almost every social media platform mentioned below. Feel free to contact me on these platforms. I'm open to collaborating on projects related to data science, UX or frontend development. If you're interested in working together, feel free to reach out. For any queries, questions or assistance, you can reach out to me on LinkedIn.",
    description:
      "I’m excited to connect with fellow professionals! Feel free to reach out on any social media platform. If you’re passionate about data science, UX design or frontend development, I would appreciate to explore collaboration opportunities. Connect with me on LinkedIn for any questions or inquiries.",
  },
  blogSection: {
    ontactSection: {
      title: "Contact Me",
      profile_image_path: "contact.png",
      // description:
      //   "I am available on almost every social media platform mentioned below. Feel free to contact me on these platforms. I'm open to collaborating on projects related to data science, UX or frontend development. If you're interested in working together, feel free to reach out. For any queries, questions or assistance, you can reach out to me on LinkedIn.",
      description:
        "I’m excited to connect with fellow professionals! Feel free to reach out on any social media platform. If you’re passionate about data science, UX design or frontend development, I would appreciate to explore collaboration opportunities. Connect with me on LinkedIn for any questions or inquiries.",
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
