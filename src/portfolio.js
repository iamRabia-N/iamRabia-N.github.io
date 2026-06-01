const settings = {
  isSplash: false,
};

const seo = {
  title: "Rabia's Portfolio",
  description:
    "I build machine learning systems and study how they behave under real-world conditions.",
  og: {
    title: "Rabia Naz Portfolio",
    type: "website",
    url: "http://rabianaz.com/",
  },
};

const greeting = {
  title: "Hi👋, I'm Rabia Naz",
  logo_name: "RabiaNaz",
  subTitle:
    "I build machine learning systems and study how they behave under real-world conditions.",
  portfolio_repository: "https://iamrabia-n.github.io/",
  githubProfile: "https://github.com/iamRabia-N",
};

const socialMediaLinks = [
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0001-2418-1972",
    fontAwesomeIcon: "fa-orcid",
    backgroundColor: "#A6CE39",
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=UtzP8XAAAAAJ",
    fontAwesomeIcon: "fas fa-graduation-cap",
    backgroundColor: "#4285F4",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/rabianaz22",
    fontAwesomeIcon: "fa-kaggle",
    backgroundColor: "#20BEFF",
  },
  {
    name: "Github",
    link: "https://github.com/iamRabia-N",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/22688262/rabia-naz",
    fontAwesomeIcon: "fa-stack-overflow",
    backgroundColor: "#FF9900",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rabia-n/",
    fontAwesomeIcon: "fa-linkedin-in",
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
      title: "ML Engineer & Researcher",
      fileName: "FullStackImg",
      skills: [
        "⚡ I build machine learning models end to end, from data exploration to deployment.",
        "⚡ I work across deep learning, NLP, and a range of supervised learning methods.",
        "⚡ My work covers both applied machine learning and academic research.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: { backgroundColor: "transparent", color: "#D00000" },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "UX Designer",
      fileName: "DesignImg",
      skills: [
        "⚡ I design user interfaces from research and wireframes to high-fidelity prototypes.",
        "⚡ I have hands-on experience with user research, information architecture, and usability testing.",
        "⚡ I translate designs into functional, responsive interfaces.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "devicon:figma",
          style: { color: "#F24E1E" },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: { color: "#FF2BC2" },
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
        "⚡ Coursework in data structures, algorithms, linear algebra, probability, statistics, data mining, and database systems.",
        "⚡ Studied software engineering, machine learning, security, and human-computer interaction.",
        "⚡ Carried out independent research alongside coursework.",
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
      title: "Google UX Design Professional Certificate",
      subtitle: "8-Course Series",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/professional-certificates/google-ux-design",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Research, and Volunteering",
  description:
    "I combine hands-on machine learning work with academic research and open-source contributions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "School Teaching Internee",
          company: "Government Girls High School",
          logo_path: "sti.jpg",
          duration: "April 2026 - Present",
          location: "On-site",
          description:
            "Teach computer science to secondary-level students under the STI Phase-2 program of the School Education Department (SED), Government of Punjab.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Engineer",
          company: "Independent / Freelance",
          logo_path: "freelance.jpg",
          duration: "March 2024 - September 2025",
          location: "Remote",
          description:
            "Built machine learning models for client projects. Handled data preprocessing, feature engineering, training, and evaluation.",
          color: "#0879bf",
        },
        {
          title: "Computer Lecturer",
          company: "Punjab Group of Colleges",
          logo_path: "pgc.png",
          duration: "October 2024 - April 2025",
          location: "On-site",
          description:
            "Taught computer science to intermediate and bachelor's students. Focused on making complex topics clear and practical.",
          color: "#0879bf",
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
          duration: "September 2024",
          location: "Journal Paper",
          description:
            "Analyzed cloud computing security challenges across different cloud models and reviewed advanced security frameworks for building secure, reliable, and cost-effective cloud infrastructure.",
          color: "#181717",
        },
        {
          title: "Real Estate Price Prediction",
          company:
            "International Journal of Innovations in Science & Technology",
          company_url:
            "https://journal.50sea.com/index.php/IJIST/article/view/951/",
          logo_path: "paper.png",
          duration: "July 2024",
          location: "Journal Paper",
          description:
            "Applied ML and DL techniques to 168,000 Pakistani property entries. Of five models compared, KNN performed best at RMSE 13.79 and R-squared 0.85.",
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
          duration: "June 2024",
          location: "Journal Paper",
          description:
            "A systematic review that categorizes real estate price prediction methods into machine learning, deep learning, and hybrid approaches and compares their strengths.",
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
          duration: "October 2023",
          location: "Conference Paper",
          description:
            "Built a neural network-based search engine for the Pakistani Constitution using information retrieval, tokenization, and cosine similarity to match user queries against the dataset.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "UX Designer",
          company: "GirlScript Summer of Code",
          company_url: "https://summerofcode.withgoogle.com/",
          logo_path: "gssoc.png",
          duration: "June 2023 - August 2023",
          location: "Remote",
          description:
            "Contributed to 30+ open-source projects as a UX designer over a three-month program. Raised 180+ issues and merged 120+ pull requests.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description: "A selection of my work in machine learning and applied AI.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  // description:
  // "I've had the opportunity to work on numerous frontend and UX projects, with a few of them highlighted here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      Category: "(NLP Project)",
      name: "AI vs Human Text Detection Across 30 Linguistic Features",
      Tools: "Libraries: Scikit-learn, XGBoost, DistilBERT, NLTK, SHAP",
      description:
        "Benchmarked four models on a 487K-essay dataset with 30 linguistic features and SHAP interpretability.",
      url:
        "https://www.kaggle.com/code/rabianaz22/ai-vs-human-text-across-30-linguistic-features",
    },
    {
      Category: "(NLP Project)",
      name: "Disaster Tweets Classification",
      Tools: "Libraries: TensorFlow, Transformers, Scikit-learn, GloVe",
      description:
        "Compared TF-IDF, a BiLSTM with attention, and fine-tuned BERT, where BERT reached the best F1 of 0.81.",
      url:
        "https://www.kaggle.com/code/rabianaz22/disaster-tweets-tf-idf-vs-bilstm-vs-bert",
    },
    {
      Category: "(AI Project)",
      name: "Blue Intelligence",
      Tools: "Tools: TypeScript, Node.js, SQLite, Vite, GeoJSON",
      description:
        "AI system for mapping marine conservation data, built at Tiny Fish Hackathon 2026.",
      url: "https://github.com/iamRabia-N/Blue-Intelligence",
    },
    {
      Category: "(AI Project)",
      name: "NavSecOps",
      Tools: "Tools: Python, FastAPI, GitLab CI/CD, Google Cloud, GeoJSON",
      description:
        "CI-integrated maritime route analysis API deployed on Google Cloud.",
      url: "https://devpost.com/software/naviguide-for-berry-mappemonde-pe9ig6",
    },
    {
      Category: "(DL Project)",
      name: "DL Models Comparison on Fashion MNIST",
      Tools: "Libraries: TensorFlow, Keras, Scikit-learn",
      description:
        "Compared Dense, CNN, and Residual CNN architectures and built an ensemble reaching 94.5% accuracy.",
      url:
        "https://www.kaggle.com/code/rabianaz22/fashion-mnist-deep-learning-models-comparison",
    },
    {
      Category: "(UX Design Project)",
      name: "DelightBlossom",
      Tools: "Tool: Figma",
      description:
        "Complete UX case study for a cafe ecommerce app, from user research to a high-fidelity prototype.",
      url:
        "https://www.behance.net/gallery/177132547/DelightBlossom-Ecommerce-App-for-Cafe",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    description:
      "I'm open to research and project collaborations in machine learning and applied AI. Reach out to discuss potential collaboration.",
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
