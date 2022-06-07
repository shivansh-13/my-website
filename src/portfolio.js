/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shivansh",
  title: "Hi, I'm Shivansh Shrivastava",
  subTitle: emoji(
    "I am a student at BITS Pilani looking to land an internship in the software and CS-IS field. I'm highly analytical, diligent, and a team player."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1veQtPF7NxGDyw4WnCeyk7qsadhMkHD7V/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shivansh-13",
  linkedin: "https://www.linkedin.com/in/shivansh-shrivastava-716013205",
  gmail: "shivansh01308@gmail.com",
  youtube: "https://www.youtube.com/channel/UCI7ztiLJ3Tv3yhPmueeR0yw",
  facebook: "https://www.facebook.com/shivansh.srivastav.3192/",
  instagram: 'https://www.instagram.com/shivansh.1.3/',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An engineer, a leader and an explorer",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications and websites"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Testing API's using Postman"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BITS Pilani",
      logo: require("./assets/images/1200px-BITS_Pilani-Logo.svg.png"),
      subHeader: "Bachelor of Engineering in Computer Science & Engineering",
      duration: "2020 -  2024",
      desc: "Consistent CGPA of 7.6",
    },
    {
      schoolName: "Green Valley High School",
      logo: require("./assets/images/logo-1.7aaaae45.png"),
      subHeader: "Higher Secondary Certificate Examination ",
      duration: "2018-2020 ",
      desc: "Passed HSCE with a grade of 94.5%",
    },
    {
      schoolName: "Zen School",
      logo: require("./assets/images/school-logo-and-font.2caebe72.png"),
      subHeader: "Senior Secondary Certificate Examination",
      duration: "2008-2018",
      desc: "Passed SSCE with a grade of 95.4%",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++",
      progressPercentage: "75%"
    },
    {
      Stack: "FireBase",
      progressPercentage: "80%"
    }, 
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Website Developer Intern",
      company: "Swecha",
      companylogo: require("./assets/images/1613791081930.jpeg"),
      date: "May 2022 – July 2022",
      // desc:
      //   "I contributed in the website development of  Students for Exploration and Development of Space  (SEDS) on campus."
    },
    {
      role: "Student Leader",
      company: "Postman",
      companylogo: require("./assets/images/postmanlogo.0dc130cb.png"),
      date: "Apr 2022 – Present",
      desc:
        "Lead the API literacy campaign",
      descBullets: [
        "Educator and advocate for API literacy on campus.",
        "Access to Postman resources to organize events on campus."
      ]
    },
    {
      role: "Joint Secretary",
      company: "Computer Science Association",
      companylogo: require("./assets/images/Untitled design2.png"),
      date: "Nov 2021 – Present",
      desc:
        "Leading the association to improve tech culture on campus ",
      descBullets: [
        "Organized and managed Computer Science workshops during ATMOS-22, all of which had a footfall of over 1500+.",
      ]
    },
    {
      role: "Web Developer",
      company: "INDIBOTS Robotics",
      companylogo: require("./assets/images/Untitled design.png"),
      date: "July 2021 – Present",
      desc:
        "Building a commercial website ",
      descBullets: [
        "Custom building website",
        "Maintainance"
      ]
    },
   
    {
      role: "Website Developer",
      company: "SEDS, BITS Pilani",
      companylogo: require("./assets/images/1561304768560.png"),
      date: "May 2020 – Jun 2020",
      desc:
        "I contributed in the website development of  Students for Exploration and Development of Space  (SEDS) on campus."
    },
    
    // {
      // role: "Amazon Clone",
      // company: "Clever Programmer Camp",
      // companylogo: require("./assets/images/1280px-React-icon.svg.png"),
      // date: "November 2018 – July 2019",
      // desc:
        // "I've succesfully created an Amazon clone and hosted atp"
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "shivansh-13", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  // subtitle: "A full model clone of Amazon",
  projects: [
    {
      image: require("./assets/images/1280px-React-icon.svg.png"),
      projectName: "Clever Programmer bootcamp",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://clone-31d95.web.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/glitch.540a8d54.png"),
      projectName: "Song Recommender App",
      projectDesc: "Song recommendation web app that inputs three artists and suggests five songs based on Spotify's recommendation API.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications I have earned!",

  achievementsCards: [
    {
      title: "Postman Student Expert",
      subtitle:
"Postman Student Experts are proficient in the essential skills involved in building and testing API requests in Postman.",
      image: require("./assets/images/Postman - Postman Student Expert - 2022-02-27.6252aade.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://badgr.com/public/assertions/ra7f1GLjSOqrVcuuMwIETg"
        },
        // {
        //   name: "Award Letter",
        //   url:
        //     ""
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     ""
        // }
      ]
    },
    {
      title: "Google UI/UX Fundamentals Certification",
      subtitle:
        "Understand foundational concepts in UX design, such as user-centered design, the design process, accessibility, and equity-focused design",
      image: require("./assets/images/coursera.3952f41b.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.coursera.org/account/accomplishments/certificate/AZJV6247VJ82"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "API 101",
      subtitle: "Basics of APIs",
      slides_url: "https://docs.google.com/presentation/d/1xtPdKUG8MsNEN00fGmMysKrkF65zKV8gfOpEihYuT2g/edit?usp=sharing",
      // event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Music 🎙️"),
  subtitle: "I LOVE TO PLAY KEYBOARD AND SIMILAR INSTRUMENTS",

  // Please Provide with Your Podcast embeded Link
  podcast: [
""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 7069448535",
  email_address: "shivansh01308@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
