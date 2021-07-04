// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Po-Yi",
  middleName: "",
  lastName: "Chen",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/boris097156",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/po-yi-boris-chen/",
    },
    {
      image: "fas fa-envelope",
      url: "mailto:boris097156@gmail.com",
    },
    {
      image: "fas fa-portrait",
      url: "https://drive.google.com/file/d/1hOLdgYZUHNk-4J4blhZoXqgAmi9al8pE/view?usp=sharing",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/borisChen.png"),
  imageSize: 375,
  message:
    "My name is Po-Yi Chen. I’m a graduate of 2020 December from University of Texas at Austin with a master's degree in Computer Science. I'm currently working at Amazon as a full time software engineer.",
  resume: "https://drive.google.com/file/d/1hOLdgYZUHNk-4J4blhZoXqgAmi9al8pE/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/borisChen.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/borisChen.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Kotlin", value: 90 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 75 },
    { name: "Java", value: 65 },
    { name: "HTML/CSS", value: 80 },
    { name: "Object-oriented programming", value: 80 },
    { name: "Data Structure", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always looking for exciting opportunities to change the world! If you know of any software engineer positions that fits me or if you have any questions, please feel free to email me at",
  email: "boris097156@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Development Engineer',
      companylogo: require('../assets/img/amazon.png'),
      date: 'Feburary 2021 – Present',
    },
    {
      role: 'Software Development Engineer Intern',
      companylogo: require('../assets/img/amazon.png'),
      date: 'May 2020 – August 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
