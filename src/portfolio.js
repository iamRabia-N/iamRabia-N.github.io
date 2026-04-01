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
    "I'm an ML engineer with a background in technical writing and UX design. I solve real-world problems, simplify complex ideas and design meaningful experiences.",
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
    "I'm an ML engineer with a background in technical writing and UX design. I solve real-world problems, simplify complex ideas and design meaningful experiences.",
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
    name: "Github",
    link: "https://github.com/iamRabia-N",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/rabianaz22",
    fontAwesomeIcon: "fa-kaggle",
    backgroundColor: "#20BEFF",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0001-2418-1972",
    fontAwesomeIcon: "fa-orcid",
    backgroundColor: "#A6CE39",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/22688262/rabia-naz",
    fontAwesomeIcon: "fa-stack-overflow",
    backgroundColor: "#FF9900",
  },
  {
    name: "Medium",
    link: "https://medium.com/@Rabia_Naz",
    fontAwesomeIcon: "fa-medium",
    backgroundColor: "black",
  },
  {
    name: "Behance",
    link: "https://www.behance.net/iamRabia-N",
    fontAwesomeIcon: "fa-behance",
    backgroundColor: "#0077B5",
  },
  {
    name: "Quora",
    link: "https://www.quora.com/profile/Rabia-Naz-76",
    fontAwesomeIcon: "fa-quora",
    backgroundColor: "#B92B27",
  },
];

const skills = {
  data: [
    {
      title: "ML Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ I build ML models from data exploration to deployment.",
        "⚡ Experience in core ML areas including classification, regression, clustering, time series, DL and NLP.",
        "⚡ I work in both research and applied ML from papers to pipelines.",
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
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Technical Writer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I write articles and technical documentation.",
        "⚡ Experience in writing across ML, AI and UX design domains.",
        "⚡ I make complex technical topics clear and accessible for any audience.",
      ],
      softwareSkills: [
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "devicon:latex",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Mendeley",
          fontAwesomeClassname: "simple-icons:mendeley",
          style: {
            color: "#9D1620",
          },
        },
        {
          skillName: "Markdown",
          fontAwesomeClassname: "devicon:markdown",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "UX Designer",
      fileName: "DesignImg",
      skills: [
        "⚡ I design user interfaces from research and wireframes to high-fidelity prototypes.",
        "⚡ Experience in user research, information architecture and usability testing.",
        "⚡ I also implement designs into functional and responsive interfaces.",
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
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
        },
      ],
    },
    // {
    //   title: "Frontend Developer",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Proficient frontend developer skilled in creating responsive and visually compelling web interfaces.",
    //     "⚡ Expertise in HTML, CSS and JavaScript with a focus on ensuring a smooth and interactive user experience.",
    //     "⚡ Strong problem-solving abilities to address cross-browser compatibility and performance optimization challenges.",
    //     "⚡ Committed to enhancing the quality and functionality of web applications.",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "JQuery",
    //       fontAwesomeClassname: "devicon:jquery",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Bootstrap",
    //       fontAwesomeClassname: "logos:bootstrap",
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Git",
    //       fontAwesomeClassname: "devicon:git",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //   ],
    // },
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
        "⚡ Coursework in data structures, algorithms, linear algebra, probability, statistics, data mining and database systems.",
        "⚡ Studied subjects across software engineering, security, databases and human-computer interaction.",
        "⚡ Led UX design workshops as part of the university's UX design team.",
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
      subtitle: "8-Course Series",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/google-ux-design",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Google Project Management Professional Certificate",
      subtitle: "7-Course Series",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/google-project-management",
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
  //   "I have participated as a frontend developer in three hackathons and as a UX designer in two hackathons, collaborating with amazing developers and designers from around the globe. I have a strong passion for contributing to open-source projects and this commitment has led me to actively participate in various open-source communities as a valuable contributor. I have significant experience in my areas of expertise and research work. I’m passionate about contributing to open-source projects and enjoy working with others to build practical and effective solutions. ",
  description:
    "I combine hands-on ML work with academic research and open-source contributions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "ML Engineer",
          company: "Freelancer",
          logo_path: "freelance.jpg",
          duration: "March 2024 - September 2025",
          location: "Remote",
          description:
            "Developed ML models, analyzed datasets and built data-driven solutions for clients. Worked on various ML tasks with a focus on accuracy and timely delivery.",
          color: "#0879bf",
        },
        {
          title: "Lecturer",
          company: "Punjab Group of Colleges",
          logo_path: "pgc.png",
          duration: "October 2024 - April 2025",
          location: "On-site",
          // description:
          //   "As a lecturer, I teach computer-related subjects to intermediate and bachelor's level students. My goal is to simplify complex topics and make learning easier and more practical for them. As a lecturer, I taught computer-related subjects to intermediate and bachelor's level students. I focused on simplifying complex topics and making learning more accessible and practical throughout my time in this role.",
          description:
            "Taught computer science subjects to intermediate and bachelor's students. Focused on simplifying complex topics and making learning practical.",
          color: "#0879bf",
        },

        {
          title: "Technical Writer",
          company: "Freelancer",
          logo_path: "freelance.jpg",
          duration: "August 2023 - February 2024",
          location: "Remote",
          description:
            "Worked as a contract-based technical writer with an R&D team. Created technical documentation and reports for the team.",
          color: "#0879bf",
        },
        {
          title: "UX Designer",
          company: "GirlScript Summer of Code",
          company_url: "https://summerofcode.withgoogle.com/",
          logo_path: "gssoc.png",
          duration: "June 2023 - August 2023",
          location: "Remote",
          description:
            "Contributed to 30+ open-source projects as a UX designer during the 3-month program. Raised 180+ issues and merged 120+ pull requests.",
          color: "#4285F4",
        },
        // {
        //   title: "UX Designer",
        //   company: "Social Summer of Code",
        //   company_url: "https://www.linkedin.com/company/getsocialnow/",
        //   logo_path: "ssoc.png",
        //   duration: "June 2023 - July 2023",
        //   location: "Remote",
        //   description:
        //     "Contributed to open-source projects by fixing design issues, adding features and improving user interfaces.",
        //   color: "#D83B01",
        // },
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
            "Analyzed cloud computing security challenges including data breaches, DDoS attacks and weak encryption across different cloud models. Presented a broader perspective on advanced security frameworks and outlined strategies for building secure, reliable and cost-effective cloud infrastructure.",
          color: "#181717",
        },
        {
          title: "Real Estate Price Prediction",
          company:
            "International Journal of Innovations in Science & Technology",
          company_url:
            "https://journal.50sea.com/index.php/IJIST/article/view/951/",
          logo_path: "paper.png",
          duration: "25th July 2024",
          location: "Journal Paper",
          description:
            "Applied ML and DL techniques on a dataset of 168,000 Pakistani property entries to improve real estate price prediction. Tested Linear Regression, Gradient Boosting, Random Forest, CNN and KNN where KNN achieved the best results with an RMSE of 13.79 and R-squared of 0.85.",
          color: "#181717",
        },
        {
          title:
            "Machine Learning, Deep Learning, and Hybrid Approaches in Real Estate Price Prediction: A Comprehensive Systematic Literature Review",
          company:
            "Proceedings of Pakistan Academy of Sciences: A Physical and Computational Sciences",
          company_url:
            "https://www.researchgate.net/publication/384164674_Machine_Learning_Deep_Learning_and_Hybrid_Approaches_in_Real_Estate_Price_Prediction_A_Comprehensive_Systematic_Literature_Review",
          logo_path: "paper.png",
          duration: "28th June 2024",
          location: "Journal Paper",
          description:
            "Categorized real estate price prediction approaches into ML, DL and hybrid models through a systematic review. Found that ML models perform well on small datasets, DL handles complex data better and hybrid models offer the highest prediction accuracy.",
          color: "#181717",
        },
        {
          title:
            "Enhancing Access to Legal Information: AI-Driven Constitution of Pakistan Search Engine",
          company:
            "1st International Conference on Women Development in Engineering Science & Technology",
          company_url:
            "https://www.researchgate.net/publication/384041185_Enhancing_Access_to_Legal_Information_AI-Driven_Constitution_of_Pakistan_Search_Engine",
          logo_path: "paper.png",
          duration: "3rd - 5th October 2023",
          location: "Conference Paper",
          description:
            "Built a neural network-based search engine for the Pakistani Constitution using information retrieval, tokenization and cosine similarity. The system vectorizes user queries and matches them against the dataset to enable efficient legal information retrieval.",
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
            "Contributed to various open-source projects from 2023 to 2024. Worked on bug fixes, new features, performance improvements and documentation. Collaborated with project maintainers and developers to review code, resolve issues and improve project quality.",
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
  //   "I've had the opportunity to work on several frontend and UX design projects and I've enjoyed both creating them and sharing the finished work on platforms like GitHub and Behance. For machine learning, I exclusively conduct all of my work on Kaggle. Additionally, I contribute my knowledge to help others on Stack Overflow and Quora. I have worked on various frontend and UX design projects which I’ve had the opportunity to showcase on platforms like GitHub and Behance. Data science projects are conducted exclusively on Kaggle where I engage with real-world data challenges and continuously enhance my expertise. I also contribute actively to the developer community by sharing knowledge on Stack Overflow and Quora. ",
  description:
    "My projects cover different areas of my work. Each one is published on the platform that fits it best.",
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
      Category: "(AI Project)",
      name: "NavSecOps — NAVIGUIDE",
      Tools: "Tools: Python, YAML, GeoJSON, Gemini API, Claude API",
      // createdAt: "Publication Platform: Devpost, GitLab",
      description:
        "Maritime route intelligence system in GitLab. Built validation, risk scoring and skipper briefing pipelines using Gemini and Claude APIs.",
      url: "https://devpost.com/software/naviguide-for-berry-mappemonde-pe9ig6",
    },
    {
      Category: "(ML Project)",
      name: "EarthMark",
      Tools: "Tech Stack: Python, Scikit-learn, Flask, Figma, API",
      // createdAt: "Publication Platform: GitHub",
      description:
        "End-to-end ML web app for real estate price prediction. Built the full pipeline from data analysis to a deployed Flask application.",
      url: "https://github.com/iamRabia-N/EarthMark",
    },
    {
      Category: "(DL Project)",
      name: "Fashion MNIST - Deep Learning Models Comparison",
      Tools:
        "Libraries: TensorFlow, Keras, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn",
      // createdAt: "Publication Platform: Kaggle",
      description:
        "Compared Dense, CNN and Residual CNN on Fashion MNIST. Built an ensemble with 94.5% accuracy and per-class performance analysis.",
      url:
        "https://www.kaggle.com/code/rabianaz22/fashion-mnist-deep-learning-models-comparison",
    },
    {
      Category: "(UX Design Project)",
      name: "Nexus",
      Tools: "Tools: Figma, Sass, Angular Material",
      // createdAt: "Publication Platform: Devpost",
      description:
        "Cloud storage dashboard with support for multiple providers and real-time monitoring of usage metrics. Designed the UI and created responsive layouts.",
      url: "https://devpost.com/software/nexus-4wax5h",
    },
    {
      Category: "(UX Design Project)",
      name: "DelightBlossom",
      Tools: "Tool: Figma",
      // createdAt: "Publication Platform: Behance",
      description:
        "Complete UX case study for a cafe ecommerce app. Covered the full design thinking process from user research to high-fidelity prototype.",
      url:
        "https://www.behance.net/gallery/177132547/DelightBlossom-Ecommerce-App-for-Cafe",
    },
    {
      Category: "(Technical Writing)",
      name: "The Role of Visual Hierarchy in User Experience",
      // createdAt: "Publication Platform: LinkedIn, Medium",
      description:
        "Explains how layout, typography, color, size and space shape user experience with real-world examples from Google, Apple and Airbnb.",
      url:
        "https://www.linkedin.com/pulse/role-visual-hierarchy-user-experience-rabia-naz-sdqpc/",
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
      "I'm open to collaborations on projects and research. If your work aligns with my areas of expertise, reach out to discuss collaboration opportunities.",
  },
  blogSection: {
    ontactSection: {
      title: "Contact Me",
      profile_image_path: "contact.png",
      // description:
      //   "I am available on almost every social media platform mentioned below. Feel free to contact me on these platforms. I'm open to collaborating on projects related to data science, UX or frontend development. If you're interested in working together, feel free to reach out. For any queries, questions or assistance, you can reach out to me on LinkedIn.",
      description:
        "I’m excited to connect with fellow professionals! If you’re passionate about data science, UX design or frontend development, I would appreciate to explore collaboration opportunities. Connect with me on LinkedIn to discuss collaborations.",
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
