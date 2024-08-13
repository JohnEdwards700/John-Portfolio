import React, { useState, useEffect } from 'react';
import profilePic from './assets/images/profile_pic.jpeg';
import Experience from './components/Experiences';
import Project from './components/Projects';
import Card from "./components/Card"



const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = ['about', 'experience', 'projects'];

  const handleScroll = () => {
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActiveSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
  };
  const experienceData =[
    {
    title : "Introduction to Computer Science",
    company : "University of Dallas", 
    date : "Fall 2021",
    description : 'This course introduces the fundamentals of computer science through functional programming with Racket, focusing on algorithm design and problem-solving strategies. Key topics include recursion, lists, and tree data structures, with practical applications in projects like game development that require state management. The course also covers essential programming concepts such as structures, contracts, and unit testing, equipping students with the skills to design, implement, and test reliable, efficient programs.'
},
{
    title : "Discrete Structres",
    company : "University of Dallas", 
    date : "Spring 2022",
    description : 'This course introduces discrete structures through procedural and object-oriented programming in Java. Students will learn loops, branching, objects, inheritance, and essential data structures like arrays, stacks, queues, and trees. The course also covers key mathematical concepts, including induction, counting, tree and graph theorems, and elementary algorithms, providing a solid foundation in both programming and discrete mathematics.'
},
{
  title : "Advanced Discrete Structres",
  company : "University of Dallas", 
  date : "Fall 2023",
  description : 'This course builds on Discrete Structures, introducing advanced topics in Java such as linked lists, hashes and maps, heaps, and priority queues. Students will also explore logic, discrete probability, sets, relations, functions, and proof techniques, deepening their understanding of both programming and discrete mathematics.'
},
{
  title : "Programming Languages",
  company : "University of Dallas", 
  date : "Spring 2024",
  description : 'This course explores the fundamental principles of programming language design and implementation using Rust and JavaScript. Topics include the substitution model, hierarchical structures, the environment model, metalinguistic abstraction, and memory representation, all grounded in mathematical theory. Students will engage with proofs and culminate the course by writing their own language interpreter.'
},
{
  title : "Machine Learning",
  company : "University of Dallas", 
  date : "Spring 2024",
  description : 'This course provides a thorough introduction to machine learning, blending theoretical knowledge with practical application using Python. Students will explore core concepts including supervised and unsupervised learning, and key algorithms such as linear regression, decision trees, and neural networks. The course covers essential mathematical foundations, including linear algebra, calculus, probability, and statistics, which are crucial for developing and understanding machine learning models. Students will learn data preprocessing techniques like regex for pattern extraction and NLTK for tokenization, as well as feature engineering to enhance model performance. Hands-on experience is a key component, with practical training in popular libraries such as PyTorch and Scikit-learn. The curriculum also includes advanced topics such as attention models and transformers. Students will culminate their learning with a capstone project, applying their skills to real-world problems by building and deploying machine learning models.'
},
]
const projectData =[
  {
  title : "Introduction Course",
  link: '',
  date : "Fall 2021",
  description : '',
  imageurl:"",
},
{
  title : "Introduction Course",
  link: '',
  date : "Fall 2021",
  description : '',
  imageurl:"",
},
]

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen">
      
      {/* Profile Picture and Name Section */}
      <div className="w-full lg:w-1/3 p-4 lg:fixed lg:h-screen flex flex-col lg:justify-start">
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4">
            <img 
              src={profilePic} 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">John Edwards</h1>
          <h2 className="text-xl lg:text-2xl mb-2 text-gray-400">Computer Science Student</h2>
          <p className="mb-8 text-gray-400">Passionate about coding and eager to tackle new challenges.</p>
        </div>

        <nav className="mb-8 lg:mb-0 flex flex-col lg:block">
          {sections.map(section => (
            <button
              key={section}
              className={`mb-2 pr-4 text-left transition-all duration-300 hover:text-white ${activeSection === section ? 'text-white' : 'text-gray-400'}`}
              onClick={() => handleSetActiveSection(section)}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex space-x-4">
          {/* Add your social media icon components here */}
        </div>
      </div>
      
      {/* Scrollable Right Content Section */}
      <div className="w-full lg:w-2/3 lg:ml-auto p-8">
        <section id="about" className="mb-16">
          <div className='size-2/3'>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About</h2>
          <p className="text-gray-400">In 2018 I took my first coding course building a simple website and curiosity was sparked. 3 years later I took my first college course and showed me how much I didn't understand about computer science. Today I can still say there is plenty I don't understand. But I have put myself in positions to learn the unkown.</p>
          <br/>
          <p className="text-gray-400">But leveraging that curiosity I have learned foundations of coding starting with functional programming, moving into object oriented programming, and recently machine learning. Increasing effeciency of code learning algorithms and how the system operates. Persuing challenges such as coding competetions and collaborating on projects. </p>
          <br/>
          <p className="text-gray-400">When im not learning about coding I become a Polymatch, learning and developing other physical and mental skills. I also enjoy trying new cuisines with my girlfriend and friends as well.</p>
          </div>
        </section>
        
        <section id="experience" className="mb-16 lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
          <Experience experiences={experienceData}/>
        </section>
        
        <section id="projects" className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projects</h2>
            <Project projects={projectData}/>
        </section>
      </div>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import profilePic from './assets/images/profile_pic.jpeg'
// // import { GitHub, Linkedin} from 'lucide-react';


// const App = () => {
//   const [activeSection, setActiveSection] = useState('about');

//   const sections = ['about', 'experience', 'projects'];

//   const handleScroll = () => {
//     // Logic to update activeSection based on scroll position
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSetActiveSection = (section) => {
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setActiveSection(section);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen">
//       <div className="w-full lg:w-2/5 lg:fixed lg:h-screen flex flex-col lg:flex-row">
//       {/* profile photo section */}
//       <div className="w-full lg:w-2/5 p-4 flex items-center justify-center">
//         <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden">
//           <img 
//             src={profilePic} 
//             alt="Your Name" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//       {/* Left side - becomes top on smaller screens */}
//       <div className="w-full lg:w-1/4 p-8 lg:fixed lg:left-1/5 lg:h-screen flex flex-col justify-between">
//         <div className="w-full lg:w-3/5 p-8 flex flex-col justify-between">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-2">John Edwards</h1>
//           <h2 className="text-xl lg:text-2xl mb-2 text-gray-400">Computer Science Student</h2>
//           <p className="mb-8 text-gray-400">Passionate about coding and eager to tackle new challenges.</p>
          
//           <nav className="mb-8 flex flex-wrap lg:block">
//             {sections.map(section => (
//               <button
//                 key={section}
//                 className={`mr-4 mb-2 lg:mr-0 text-left transition-all duration-300 hover:text-white ${activeSection === section ? 'text-white' : 'text-gray-400'}`}
//                 onClick={() => handleSetActiveSection(section)}
//               >
//                 {section.toUpperCase()}
//               </button>
//             ))}
//           </nav>

//           {/* <div className="mt-8 flex space-x-4">
//           <GitHub className="cursor-pointer" />
//           <Linkedin className="cursor-pointer" />
//           </div> */}
//         </div>
        
//         <div className="hidden lg:flex space-x-4">
//           {/* Add your social media icon components here */}
//         </div>
//       </div>
      
//       {/* Right side - becomes bottom on smaller screens */}
//       <div className="w-full lg:w-3/5 lg:ml-auto p-8">
//         <section id="about" className="mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">About</h2>
//           <p className="text-gray-400"><p className="text-gray-400">Hi, I’m John Edwards, a passionate Computer Science student with over five years of coding experience. My journey began with building simple websites, and quickly evolved as I delved into Python during high school. In college, I expanded my skills to include Racket, Java, Rust, and machine learning in Python. Currently studying at the University of Dallas, I’ve been recognized on the Honor Roll and received the Dean Scholarship. My academic journey has been fueled by a deep interest in software development and machine learning, which I’ve applied to various projects and competitions. Hardworking and eager to learn, I’m always ready to take on new challenges, whether it's optimizing code, developing innovative solutions, or collaborating on exciting projects. Let’s build something amazing together.</p></p>
//         </section>
        
//         <section id="experience" className="mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
//           {/* Add your experience items here */}
//         </section>
        
//         <section id="projects" className="mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projects</h2>
//           {/* Add your project items here */}
//         </section>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default App;