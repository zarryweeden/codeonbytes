import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUsersLine ,faRobot,faDiagramProject,faCalendarDay,faMinus, faArrowRight, faGraduationCap,faBriefcase,faUserTie,faUsers, faCheck, faTrophy, faPlus, faQ, faPhone, faLocation, faEnvelope, faComment, faArrowDown, faAngleDown, faSearch, faPaperPlane, faMessage,faHome, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
import { 
  faFacebook, 
  faTwitter,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import axios from 'axios';


function LandingPage(){
        const [output, setOutput] = useState("The output will appear here...");
        const runPythonCode = () => {
            const code = document.getElementById("codeEditor").value;
            const match = code.match(/print_name\s*\(\s*"([^"]+)"\s*,\s*(\d+)\s*\)/);
            
            if (match) {
            const name = match[1];
            const times = parseInt(match[2]);
            let result = "";
            
            for (let i = 0; i < times; i++) {
                result += `${name}\n`;
            }
            
            setOutput(result);
            } else {
            setOutput("Error: Couldn't parse the function call.\nMake sure it follows the format: print_name(\"Your Name\", 5)");
            }
        };

        const clearOutput = () => {
            setOutput("The output will appear here...");
        };

        const clientTestimonials = [
        {
            name: 'James Muruithi',
            accomplishment: 'Coding Track Graduate',
            clientComment:
            "Before Codeonbytes, I had no coding experience. Now I'm building websites for local businesses and preparing for a computer science degree.",
            currentPosition: 'Now works as a junior developer at a tech startup',
        },
        {
            name: 'Wanjiku Kamau',
            accomplishment: 'Pre-Code Track Graduate',
            clientComment:
            'The mathematical foundation I gained in the Pre-Code track made learning programming languages so much easier. I now see problems differently.',
            currentPosition: 'Received scholarship to pursue Computer Engineering',
        },
        {
            name: 'Brian Otieno',
            accomplishment: 'Coding Track Graduate',
            clientComment:
            'Codeonbytes gave me the tools and mentorship I needed to turn curiosity into skill. I can now confidently build apps and debug complex code.',
            currentPosition: 'Freelancing and developing educational apps for schools',
        },
        {
            name: 'Amina Yusuf',
            accomplishment: 'Pre-Code Track Graduate',
            clientComment:
            'The instructors made math and logic fun. I used to be intimidated by coding, but now I approach it with excitement and confidence.',
            currentPosition: 'Currently in a robotics mentorship program',
        },
        {
            name: 'Kevin Wekesa',
            accomplishment: 'Coding Track Graduate',
            clientComment:
            'I joined with just interest in tech. Thanks to Codeonbytes, I now contribute to open source projects and teach my peers what I’ve learned.',
            currentPosition: 'High school coding club co-leader and mentor',
        },
        {
            name: 'Faith Njeri',
            accomplishment: 'Pre-Code Track Graduate',
            clientComment:
            'This program changed how I approach problem-solving. The blend of math and logic training has helped me become a better thinker.',
            currentPosition: 'Preparing for national computing competitions',
        },
        {
            name: 'Ahmed Hassan',
            accomplishment: 'Coding Track Graduate',
            clientComment:
            'What I loved most was the hands-on projects. I learned by doing and built a personal portfolio I’m really proud of.',
            currentPosition: 'Interning at a local tech hub in Nairobi',
        },
        ];
        const [currentIndex, setCurrentIndex] = useState(0);
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % clientTestimonials.length);
                return 0;
                }
                return prev + 2;
            });
            }, 80);

            return () => clearInterval(interval);
        }, [currentIndex]);

        const current = clientTestimonials[currentIndex];
        const getInitials = (name) => {
            if (!name) return '';
            const parts = name.trim().split(' ');
            const initials = parts.map(part => part[0]).slice(0, 2).join('');
            return initials.toUpperCase();
        };

      const [activeTrack,setActiveTrack] = useState('pre-code')
      const handleTrackSelectorClick = (track)=>{
         setActiveTrack(track)
        }
     const [ showContent,setShowContent] = useState(true)
    


    const faqData = [
        {question:'Do students need prior coding experience?',
        answer:"No prior coding experience is required for either track. The Pre-Code track focuses on building mathematical and logical foundations before coding, while the Coding track starts with absolute programming basics. We meet students where they are and build from there."
        },
        {
            question:'How long are the courses?',
            answer:"Each track runs for 12 weeks, with two 2-hour sessions per week. Classes begin June 2nd and will conclude in late August, allowing students to complete the program before the next academic year begins."
        },
        {
            question:'What equipment will students need?',
            answer:"Students will need access to a laptop or desktop computer with a reliable internet connection. All software used in the courses is free and open-source. We provide detailed setup instructions before classes begin."
        },
        {
            question:'How will classes be conducted?',
            answer:"All classes are conducted online through our interactive learning platform. Sessions include live instruction, collaborative problem-solving, and hands-on projects. Students will have access to instructors for questions between sessions as well."
        },
        {
            question:'What happens after completing the program?',
            answer:"Graduates of either track will receive a certificate of completion and a portfolio of their work. We also offer guidance on next steps, whether that's pursuing further education, internships, or independent projects. Alumni have access to our community and resources for continued learning."
        },
        {
            question:"How are the small class sizes beneficial?",
            answer:"With only 12 students per track, our instructors can provide personalized attention, adapt to individual learning styles, and offer targeted guidance. This creates an optimal environment for learning complex technical skills and ensures no student gets left behind or held back."
        }
    ]
        const [openIndex, setOpenIndex] = useState(null);
        const toggleFAQ = (index) => {
            setOpenIndex(prev => (prev === index ? null : index));
        };
        const [activeSection, setActiveSection] = useState('why-us');
       const [menuOpen, setMenuOpen] = useState(false);

            const toggleMenu = () => {
            setMenuOpen(prev => !prev);
            };
        
        const [formData,setFormData] = useState(
            {
                parents_name:'',
                students_name:'',
                parents_email:'',
                students_age:'',
                phone_number:'',
                preffered_track:'',
                previous_experience:'',
                goals:''
            }
        )

        const handleChange = e=>{
            setFormData(
                {
                    ...formData,
                    [e.target.name]:e.target.value,
                }
            )
        }


    const handleSubmit = async e => {
        e.preventDefault();
        console.log('Sending data:', formData);

        try {
        const response = await axios.post(
                                                'http://localhost:8000/api/application-form/',
                                                formData,
                                                {
                                                    headers: {
                                                    'Content-Type': 'application/json',
                                                    },
                                                }
                                                );
        console.log('Success:', response.data);
        alert('Form submitted successfully!');
        } catch (error) {
        console.error('Submission failed:', error.response?.data || error.message);
        alert('Something went wrong.');
        }


     
    };
    const [isClicked,setIsClicked] = useState(false)
    return(
        
        <div className="bodyy">
            <section className="nav-section">
                <div className="nav-container">
                  <div className="nav-bar">
                    <div className='logo-area-container'>
                        <span  className="logo-area"> <span className="logo-letter">O</span></span>
                        <span className="logo-name">Codeonbytes</span>
                    </div>
                    <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <span className={`nav-item ${activeSection === 'why-us' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('why-us').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('why-us');}}>
                                Why Us
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    <span className={`nav-item ${activeSection === 'our-team-section' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('our-team-section').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('our-team-section');}}>
                                Our Team
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    <span className={`nav-item ${activeSection === 'our-tracks-section' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('our-tracks-section').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('our-tracks-section');}}>
                                Our Tracks
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    <span className={`nav-item ${activeSection === 'fees-section' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('fees-section').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('fees-section');}}>
                                Fees
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    <span className={`nav-item ${activeSection === 'enroll-now-section' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('enroll-now-section').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('enroll-now-section');}}>
                                Enroll Now
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    <span className={`nav-item ${activeSection === 'faqs-section' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('faqs-section').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('faqs-section');}}>
                                FAQs
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    <span className={`nav-item ${activeSection === 'contact-section' ? 'w--current' : ''}`}
                                onClick={() => {document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
                                setActiveSection('contact-section');}}>
                                Contact
                                <svg className="nav-underline" viewBox="0 0 66 39" fill="none" preserveAspectRatio="none">
                                <path d="M47.6933 8.97338C32.2599 6.35381 10.1095 6.48289 3.63879 18.8108C-1.00186 27.6521 
                                        1.72618 41.409 45.3177 35.6217C77.4153 31.3603 63.378 2 38.9883 2" 
                                stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                                </svg>
                    </span>
                    </div>
                    <div className='menu-toggle' onClick={toggleMenu}>
                        &#9776; 
                    </div>
                    </div>
                </div>
            </section>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-container-text">
                        <div className="hero-text-h1-container">
                            <h1 className="hero-text-h1">Crafting the Problem Solvers & Innovators of Tomorrow.</h1>
                        </div>
                        <div className="bottom-horizontal-line"></div>
                        <div className="hero-horizontal-wrap">
                           <h2 className="hero-text-h2">
                                Prepare for a future dominated by AI and technology with our 
                                specialized coding and mathematical problem-solving tracks. 
                                Limited spots available for{" "}
                                <span className="highlight-underline">
                                    June 2nd classes!
                                    <svg
                                    className="underline"
                                    viewBox="0 0 120 20"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                         d="M 0 15 Q 30 17, 60 15 T 120 15"
                                        stroke="#FF6D00"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    </svg>
                                </span>
                                </h2>
                                <div className="hero-button-container">
                                    <button className="applyNow-btn" onClick={()=>document.getElementById('enroll-now-section').scrollIntoView({behavior:'smooth'})}>Apply Now</button>
                                    <button className="explorePrograms-btn" onClick={()=>document.getElementById('our-tracks-section').scrollIntoView({behavior:'smooth'})}>Explore Programs</button>
                                </div>
                            </div>
                            <div className="classes-started-text">
                                <div className="classes-started-text-container">
                                    <h1>Classes Begin In:</h1>
                                    <h2>Classes have started !</h2>
                                </div>
                            </div>
                            <div className='chat-section'>
                                <div className='chat-icon'>
                                    { isClicked ? <FontAwesomeIcon onClick={()=>setIsClicked(false)} className='fa-angleDown' icon={faAngleDown}/>:<FontAwesomeIcon onClick={()=>setIsClicked(true)} className='faComment' icon={faComment} />}
                                </div>
                                {isClicked &&(
                                    <div className='chat-window'>
                                        <div className='chat-area'>
                                            <h1>Hi There</h1>
                                            <div className='help-center'>
                                                <h1>Help Centre</h1>
                                                <div className="search-container">
                                                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                                    <textarea placeholder="Search for answers"></textarea>
                                                </div>
                                            </div>
                                            <div className='new-convo'>
                                            <div className='new-convo-texts'>
                                                <h1>New Conversation</h1>
                                                <p>We typically reply in a few minutes</p>
                                            </div>
                                            <FontAwesomeIcon className='faPaperPlane' icon={faPaperPlane} />
                                        </div>
                                        <div className='nav-container-footer'>
                                            <FontAwesomeIcon className='faHome' icon={faHome} />
                                            <FontAwesomeIcon className='faCommentDotss' icon={faCommentDots} />
                                        </div>
                                    </div>
                                    </div>
                                )}
                            </div>
                            
                    </div>
                </div>
            </section>
            <section className="why-us-section" id='why-us'>
                <div className="why-us-header">
                    <h1 className="why-us-header-h1">Why Choose Codeonbytes?</h1>
                </div>
                <div className="why-us-intro-container">
                    <p className="why-us-intro-text">At Codeonbytes, we’re on a mission to make tech education exciting, 
                        accessible, and meaningful for young learners. 
                        We help students build a strong foundation in coding and problem-solving so they’re prepared 
                        to thrive in a world
                        shaped by innovation.
                    </p>
                </div>
                <div className="why-us-body">
                    <div className="why-us-cards">
                        <div className="why-us-card1">
                            <FontAwesomeIcon className='faMicrochip-ai' icon={faRobot} />
                            <h1 className='why-us-card1-h1'>AI-Ready Education</h1>
                            <p className='why-us-card-p'>In a world where AI is transforming industries, we prepare students to harness
                                 technology rather than be replaced by it. Our curriculum focuses on human strengths that AI can't 
                                 replicate: creative problem-solving and critical thinking.</p>
                        </div>
                        <div className="why-us-card1">
                            <FontAwesomeIcon className='faMicrochip-ai' icon={ faUsersLine } />
                            <h1 className='why-us-card1-h1'>Small Class Sizes</h1>
                            <p className='why-us-card-p'>With just 12 students per track, we ensure
                                 personalized attention and guidance. Our instructors can focus on individual 
                                 learning styles and challenges, creating an optimal environment for growth and development.</p>
                        </div>
                        <div className="why-us-card3">
                            <FontAwesomeIcon className='faDiagramProject' icon={ faCalendarDay } />
                            <h1 className='why-us-card1-h1'>Flexible Learning Schedule</h1>
                            <p className='why-us-card-p'>At Codeonbytes, we know that every child’s day is different.
                                 That’s why we offer flexible class schedules designed to fit your family’s busy routine — with live, 
                                 supportive tutoring every step of the way. Whether after school, weekends, or during holidays,
                                  our courses adapt to your child’s needs, making learning exciting and manageable without compromising 
                                  on expert guidance.</p>
                            <button className='why-us-card3-btn' onClick={()=>document.getElementById('enroll-now-section').scrollIntoView({behavior:'smooth'})}>Enroll Now  <FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                        <div className="why-us-card4">
                            <FontAwesomeIcon className='faDiagramProject' icon={ faDiagramProject } />
                            <h1 className='why-us-card1-h1'>Project-Based Learning</h1>
                            <p className='why-us-card-p'>Theory is important, but application is essential. Our students work on
                                 real-world projects that build portfolios, confidence, and practical experience that stands out to 
                                 employers and higher education institutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ourTeamSection' id='our-team-section'>
                <div className='ourTeamSection-header-container'>
                    <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>Meet Our Expert</h1>
                    </div>
                </div>
                <div className='ourTeamSection-body'>
                    <div className='ourTeamSection-body-card1'>
                       <div className='ourTeamSection-card1-head'>
                            <div className='card1-image-text'>
                                    <h1 className='card1-image-text-h1'>Robinson Sos Okeyo</h1>
                                    <h3 className='card1-image-text-h3'>Lead Founder & Instructor</h3>
                            </div>
                            <div className='image-overlay'>
                                <img className='ourTeamSection-img' src="images/codeon_expert_img-removebg-preview.png" alt="" />
                            </div>
                        </div>
                        <div className='horizontal-line-oTS'></div>
                        <div className='ourTeamSection-card1-text-container'>
                            <p className='ourTeamSection-card1-text-container-p'>Robinson brings extensive experience in both theoretical and applied computer science to Codeonbytes.
                                 With a strong academic foundation and practical industry experience, he is passionate about equipping 
                                 the next generation with crucial problem-solving skills.
                            </p>
                            <div className='vertical-line-oTS'></div>
                            <div className='education-oTS'>
                                <FontAwesomeIcon className='faGraduationCap' icon={faGraduationCap}/>
                                <div className='education-oTS-text'>
                                    <h1>Education</h1>
                                    <h3>B.Sc. Mathematics and Computer Science</h3>
                                    <h4>Jomo Kenyatta University of Agriculture and Technology</h4>
                                </div>
                            </div>
                                                        <div className='vertical-line-oTS'></div>
                            <div className='education-oTS'>
                                <FontAwesomeIcon className='faGraduationCap' icon={faBriefcase}/>
                                <div className='education-oTS-text'>
                                    <h1>Experience</h1>
                                    <h3>Current: Head of Business Intelligence Department</h3>
                                    <h4>Ambulex Solutions</h4>
                                </div>
                            </div>

                                                        <div className='vertical-line-oTS'></div>
                            <div className='education-oTS'>
                                <FontAwesomeIcon className='faGraduationCap' icon={faUserTie}/>
                                <div className='education-oTS-text'>
                                    <h1>Previous Role</h1>
                                    <h3>Software Developer</h3>
                                    <h4>AG German Institute</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Our-Learning-Tracks-Section' id='our-tracks-section'>
                <div className='Our-Learning-Tracks-Section-header'>
                    <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>Our Learning Tracks</h1>
                    </div>
                <div className='our-Learning-Tracks-Section-cards-Sections'>
                    <div className='our-Learning-Tracks-Section-card1'>
                        <div className='vertical-line-across-card'></div>
                        <div className='our-Learning-Tracks-Section-card1-header'>
                            <div className='our-Learning-Tracks-Section-card1-Text'>
                                <h1>Pre-Code Track</h1>
                                <h3>Mathematics & Problem Solving</h3>
                                <h5> <FontAwesomeIcon className='faUsers' icon={faUsers}/>   Only 12 spots available</h5>
                            </div>
                        </div>
                        <div className='our-Learning-Tracks-Section-card1-body'>
                            <p>Build the foundation for successful coding through advanced mathematical concepts and
                                    problem-solving techniques.</p>
                            <ul>
                                <li>Develop logical thinking patterns</li>
                                <li>Master algorithmic approaches to problems</li>
                                <li>Learn mathematical concepts applicable to programming</li>
                                <li>Build pattern recognition skills</li>
                                <li>Practice breaking complex problems into manageable parts</li>
                            </ul>
                            <p>Perfect for: Students who want to strengthen their analytical skills before diving into coding or 
                                those interested in mathematical problem-solving.</p>

                            <button className='apply-now-OLTSCB' onClick={()=>document.getElementById('enroll-now-section').scrollIntoView({behavior:'smooth'})}>Apply Now</button>
                        </div>
                    </div>
                    <div className='our-Learning-Tracks-Section-card1'>
                        <div className='vertical-line-across-card'></div>
                        <div className='our-Learning-Tracks-Section-card1-header'>
                            <div className='our-Learning-Tracks-Section-card1-Text'>
                                <h1>Coding Track</h1>
                                <h3>Programming Fundamentals</h3>
                                <h5> <FontAwesomeIcon className='faUsers' icon={faUsers}/>   Only 12 spots available</h5>
                            </div>
                        </div>
                        <div className='our-Learning-Tracks-Section-card1-body'>
                            <p>Start your coding journey with hands-on experience building real applications from day one.</p>
                            <ul>
                                <li>Learn programming fundamentals with Python</li>
                                <li>Create web applications with HTML, CSS & JavaScript</li>
                                <li>Develop database skills for data management</li>
                                <li>Practice version control with Git</li>
                                <li>Build a portfolio of real projects</li>
                            </ul>
                            <p>Perfect for:Students ready to start coding immediately and those with some prior exposure to
                                 logical thinking or mathematics.</p>

                            <button className='apply-now-OLTSCB' onClick={()=>document.getElementById('enroll-now-section').scrollIntoView({behavior:'smooth'})}>Apply Now</button>
                        </div>
                        
                    </div>
                </div>
                </div>
            </section>
            <section className='Fees-section' id='fees-section'>
                <div className='Our-Learning-Tracks-Section-header'>
                    <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>Investment in Your Future</h1>
                    </div>
                </div>
                <div className='Fees-section-intro-text'>
                    <h2>Affordable Education</h2>
                    <p>We believe quality tech education should be accessible. Our structured payment plan makes it easy to invest 
                        in skills that last a lifetime.</p>
                    <h1>Choose Your Plan</h1>
                </div>
                <div className='fee-cards-container'>
                    <div className='fee-standard-card'>
                        <div className='fee-standard-card-text'>
                        <h1>Standard Plan</h1>
                        <h5>Monthly Installments:</h5>
                        <h2>Sh. 10,000 / month</h2>
                        <p>Duration: 8 weeks (2 months)</p>
                        <p>Total: Sh. 20,000</p>
                        <h4>What's Included ?</h4>
                        <ul>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Live online instruction twice weekly.</li>
                            <li><FontAwesomeIcon className='faCheck'  icon={faCheck}/>Access to course materials and recordings.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>One-on-one mentoring sessions.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Project feedback and code reviews.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Certificate upon completion.</li>
                        </ul>
                        <h3>Pay with Mpesa:</h3>
                        <p>BuyGoods Till Number:</p>
                         <div className='payw-mpesa-area'>
                        <p>996769</p> 
                        <button>Pay with Mpesa</button>
                        </div>
                       </div>
                    </div>
                    <div className='Full-access-card'>
                        <div className='fee-standard-card-text'>
                        <h1>Full Access Bundle</h1>
                        <h5>One-Time Payment:</h5>
                        <h2>Sh. 18,000 (one-time)</h2>
                        <p>(Best Value – Save Sh. 2,000)</p>
                        <h4>What's Included ?</h4>
                        <ul>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Live online instruction twice weekly.</li>
                            <li><FontAwesomeIcon className='faCheck'  icon={faCheck}/>Access to course materials and recordings.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>One-on-one mentoring sessions.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Project feedback and code reviews.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Certificate upon completion.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Bonus strategy session.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/>Priority feedback.</li>
                            <li><FontAwesomeIcon className='faCheck' icon={faCheck}/> Early access to extra resources.</li>
                        </ul>
                        <h3>Pay with Mpesa:</h3>
                        <p>BuyGoods Till Number:</p>
                         <div className='payw-mpesa-area'>
                        <p>996769</p> 
                        <button>Pay with Mpesa</button>
                        </div>
                       </div>
                    </div>
                </div>
            </section>
            <section className='secure-your-spot-section' id='enroll-now-section'>
                <div className='Our-Learning-Tracks-Section-header'>
                    <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>Secure Your Spot Today</h1>
                    </div>
                </div>
                <div className='secure-your-spot-section-intro-text'>
                    <p>Classes begin &nbsp;                                
                        <span className="highlight-underline">
                                    June 2nd classes!
                                    <svg
                                    className="underline"
                                    viewBox="0 0 120 20"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                         d="M 0 15 Q 30 17, 60 15 T 120 15"
                                        stroke="#FF6D00"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    </svg>
                                </span>
                                     &nbsp; with limited availability. Complete the form below to start your application process.</p>
                </div>
                <div className='application-form'>
                    <div className='application-form-card'>
                        <div className='vertical-line-across-card'></div>
                        <h1>Application Form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='form-row'>
                                    <div className='form-group'>
                                        <label className='form-group-label' htmlFor="studentName">Student's Name</label>
                                        <input name='students_name' onChange={handleChange} className='form-group-input' type="text" id='studentName'  required/>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-group-label' htmlFor="studentAge">Student's Age</label>
                                        <input name='students_age' onChange={handleChange} className='form-group-input' type="number" id='studentAge'  required/>
                                    </div>
                            </div>
                            <div className='form-row'>
                                    <div className='form-group'>
                                        <label className='form-group-label' htmlFor="parentName">Parent/Guardian Name</label>
                                        <input name='parents_name' onChange={handleChange} className='form-group-input' type="text" id='parentName'  required/>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-group-label' htmlFor="parentEmail">Parent's Email</label>
                                        <input name='parents_email' onChange={handleChange} className='form-group-input' type="email" id='parentEmail'  required/>
                                    </div>
                            </div> 
                            <div className='form-row'>
                                    <div className='form-group'>
                                        <label className='form-group-label' htmlFor="parentPhone">Phone Number</label>
                                        <input name='phone_number' onChange={handleChange} className='form-group-input' type="tel" id='parentPhone'  required/>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-group-label' htmlFor="preferredTrack">Preferred Track</label>
                                        <select  className='form-group-input'  defaultValue="" onChange={handleChange} name="preferred_track" id="preferredTrack" required>
                                            <option value ="" disabled>--Select Track--</option>
                                            <option value="pre-code">Pre-Code: Mathematics & Problem Solving</option>
                                            <option value="coding">Coding: Programming Fundamentals</option>
                                            <option value="undecided">Undecided? (We'll help you choose)</option>
                                        </select>
                                    </div>
                            </div>
                            <div className='form-group'>
                                    <label className='form-group-label' htmlFor="experience">Previous Experience (if any)</label>
                                    <textarea className='form-group-textarea' id='experience' onChange={handleChange} name="previous_experience" rows="3"></textarea>
                            </div>
                            <div className='form-group'>
                                    <label className='form-group-label' htmlFor="goals">What are your goals for this program?</label>
                                    <textarea className='form-group-textarea' id='goals' onChange={handleChange} name="goals" rows="3" required></textarea>
                            </div>
                            <div className='form-submit'>
                                <button className='form-submit-btn'>Submit Application</button>
                            </div>
                        </form>
                      
                    </div>
                </div>
            </section>
            <section className='success-Stories'>
                <div className='Our-Learning-Tracks-Section-header'>
                    <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>Student Success Stories</h1>
                    </div>

                </div>
                <div className='testimonial-cards'>
                <div className="testimonial-slider">
                    <div className="testimonial-card">
                       <div className="horizontal-line-through-card">
                            <div className="avatar-circle">
                                <span className="initials">{getInitials(current.name)}</span>
                            </div>
                       </div>
                        <div className='testimonial-card-text'>
                            <p>"{current.clientComment}"</p>
                            <h4>- {current.name}, <span>{current.accomplishment}</span></h4>
                            <div className='current-position-area'>
                                <FontAwesomeIcon className='faTrophy' icon={faTrophy}/>
                                <h5 className="position">  {current.currentPosition}</h5>
                            </div>  
                        </div>
                    </div>
                    <div className="multi-progress-bar">
                        {clientTestimonials.map((_, index) => (
                            <div key={index} className="progress-segment">
                            <div
                                className="progress-fill"
                                style={{
                                width:
                                    index < currentIndex
                                    ? '100%'
                                    : index === currentIndex
                                    ? `${progress}%`
                                    : '0%',
                                }}
                            />
                            </div>
                        ))}
                        </div>

                </div>
                </div>
            </section>

            <section className='try-coding-section'>
                <div className='Our-Learning-Tracks-Section-header'>
                    <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>Try Coding Now</h1>
                    </div>
                    <div className='try-coding-cards'>
                        <div className='try-coding-card1'>
                            <div className='try-coding-card1-text'>
                                <h1>Experience First Hand Coding</h1>
                                <p>Try out this simple Python challenge right in your browser. Make changes to the code 
                                    and see what happens!</p>
                            </div>
                            <div className='card1-challange'>
                                <div className='vertical-line-card1-challange'></div>
                                <div className='card1-challange-text'>
                                    <h3>Challange:</h3>
                                    <p>Modify the function to print your name five times.</p>
                                </div>
                            </div>
                    </div>
                                <div className='try-coding-card2'>
                                    <div className='header-section-card2'>
                                        <h1>demo.py</h1>
                                        <button onClick={runPythonCode}>Run Code</button>
                                    </div>
                                    <div className='text-area-card2'>
                                                                            <textarea 
                                        className='code-editor' 
                                        id="codeEditor" 
                                        rows="12" 
                                        cols="50"
                                        defaultValue={
                                        `def print_name(name, times):
                                            # Hint: Use a loop to print the name multiple times
                                            for i in range(times):
                                                print(name)

                                        # Change this to your name and run the code!
                                        print_name("Your Name", 5)`}
                                        />
                                    </div>                               
                                    <div className='output-area'>
                                       <div className='output-area-header'>
                                        <h2>Output</h2>
                                        <button onClick={clearOutput}>Clear</button>
                                        </div>
                                        <pre>{output}</pre>
                                    </div>
                                </div>
                            </div>
                </div>
            </section>
            <section className='what-you-learn-section'>
                <div className='ourTeamSection-header'>
                        <h1 className='ourTeamSection-header-h1'>What you'll learn</h1>
                </div>
                <div className='track-selector'>
                    <h2 
                    onClick={() => handleTrackSelectorClick('pre-code')}
                    className={`track-header ${activeTrack === 'pre-code' ? 'active' : ''}`}
                    >
                    Pre Code Track
                    {activeTrack === 'pre-code' && <div className="underline"></div>}
                    </h2>
                    <h2 
                    onClick={() => handleTrackSelectorClick('coding')}
                    className={`track-header ${activeTrack === 'coding' ? 'active' : ''}`}
                    >
                    Coding Track
                    {activeTrack === 'coding' && <div className="underline"></div>}
                    </h2>
                </div>
                {
                        showContent&& (
                            <div className='class-content'>
                                {activeTrack ==='pre-code' &&(
                                    <div className='class-content-container'>
                                        <div className='content-section'>
                                            <span className='content-section-timeline'>Week 1-2</span>
                                            <div className='content-section-text'>
                                                <h1>Logical Foundations</h1>
                                                <p>Build the foundation for computational thinking with logical operations, truth tables, and set theory.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Boolean Logic</span>
                                                    <span className='span-item'>Truth tables</span>
                                                     <span className='span-item'>Set theory</span></div>
                                            </div>
                                        </div>
                                                                                <div className='content-section'>
                                            <span className='content-section-timeline'>Week 3-4</span>
                                            <div className='content-section-text'>
                                                <h1>Number Systems & Patterns</h1>
                                                <p>Explore different number systems and mathematical patterns that form the basis of computational thinking.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Binary & Hexadecimal</span>
                                                    <span className='span-item'>Truth tables</span>
                                                     <span className='span-item'>Mathematical Patterns</span></div>
                                            </div>
                                        </div>
                                                                                <div className='content-section'>
                                            <span className='content-section-timeline'>Week 5-6</span>
                                            <div className='content-section-text'>
                                                <h1>Algorithmic Thinking</h1>
                                                <p>Learn how to break down problems into step-by-step procedures and analyze efficiency.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Problem Decomposition</span>
                                                    <span className='span-item'>Flowcharts</span>
                                                     <span className='span-item'>Pseudocode</span></div>
                                            </div>
                                        </div>
                                                                                <div className='content-section'>
                                            <span className='content-section-timeline'>Week 7-8</span>
                                            <div className='content-section-text'>
                                                <h1>Advanced Problem-Solving</h1>
                                                <p>Apply your skills to real-world problems through mathematical modeling and critical thinking.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Data Analysis</span>
                                                    <span className='span-item'>Optimization Problems</span>
                                                     <span className='span-item'>Final Project</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        )
                    }
                            <div className='class-content'>
                                {activeTrack ==='coding' &&(
                                    <div className='class-content-container'>
                                        <div className='content-section'>
                                            <span className='content-section-timeline'>Week 1-2</span>
                                            <div className='content-section-text'>
                                                <h1>Python Fundamentals</h1>
                                                <p>Learn the basics of Python programming and start writing your first lines of code.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Variables & Data Types</span>
                                                    <span className='span-item'>Control Structures</span>
                                                     <span className='span-item'>Functions</span></div>
                                            </div>
                                        </div>
                                        <div className='content-section'>
                                            <span className='content-section-timeline'>Week 3-4</span>
                                            <div className='content-section-text'>
                                                <h1>Data Structures & Algorithms</h1>
                                                <p>Explore different ways to organize and process data efficiently.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Lists & Dictionaries</span>
                                                    <span className='span-item'>Searching & Sorting</span>
                                                     <span className='span-item'>File Handling</span></div>
                                            </div>
                                        </div>
                                        <div className='content-section'>
                                            <span className='content-section-timeline'>Week 5-6</span>
                                            <div className='content-section-text'>
                                                <h1>Web Development Basics</h1>
                                                <p>Create your first web applications with HTML, CSS, and JavaScript.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>HTML & CSS</span>
                                                    <span className='span-item'>JavaScript Basics</span>
                                                     <span className='span-item'>DOM Manipulation</span></div>
                                            </div>
                                        </div>
                                        <div className='content-section'>
                                            <span className='content-section-timeline'>Week 7-8</span>
                                            <div className='content-section-text'>
                                                <h1>Project Development</h1>
                                                <p>Apply everything you've learned to create a complete web application.</p>
                                                <div className='span-area'>
                                                    <span className='span-item'>Project Planning</span>
                                                    <span className='span-item'>Development Process</span>
                                                     <span className='span-item'>Final Project</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ) }
                            </div>
            </section>
            <section className='contact-us' id='contact-section'>
                <div className='contact-us-section-header'>
                    <h1>Contact Us</h1>
                    <p>Let's Connect! Have questions about our programs or want to learn more? We're here to help! Reach out through
                        the form below, and our team will get back to you within 24 hours. Your journey into coding and problem-solving 
                        starts with a simple hello.</p>
                 </div>
                 <div className='contact-us-card'>
                    <div className='contact-us-cardleft'>
                        <h1>Info</h1>
                        <span><FontAwesomeIcon icon={faPhone}/>&nbsp; +254 797 007743</span>
                        <span><FontAwesomeIcon icon={faLocation}/>&nbsp; Nairobi, Kenya</span>
                        <span><FontAwesomeIcon icon={faEnvelope}/>&nbsp; codeonbytes@gmail.com</span>
                    </div>
                    <div className='contact-us-cardright'>
                        <form action="submit" className='contact-us-form'>
                            <div className='contact-form-row'>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <div className='contact-form-row'>
                                <input type="email" placeholder='Email Address' />
                                <input type="tel" placeholder='Phone Number' />
                            </div>
                            <div className='contact-form-text-area'>
                                <textarea name="message" id="" placeholder='Message'></textarea>
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                 </div>
            </section>
            <section className='FAQs-section' id='faqs-section'>
                    <div className='ourTeamSection-header'>
                         <h1 className='ourTeamSection-header-h1'>Frequently Asked Questions</h1>
                    </div>
                    <div className='FAQs-cards-container'>
                       
                        {faqData.map((faq, index) => (
                            <div
                            key={index}
                            className="FAQs-card1"
                            onClick={() => toggleFAQ(index)}
                            >
                            <div className='FAQs-card1-header'>
                                 <p>{faq.question}</p>
                            <FontAwesomeIcon
                                className="faplus-FAQs"
                                icon={openIndex === index ? faMinus : faPlus}
                            />
                            </div>
                           
                            {openIndex === index && (
                                <div className="faq-answer">
                                <p>{faq.answer}</p>
                                </div>
                            )}
                            </div>
                        ))}
                    </div>
            </section>
            <section className='footer-section'>
                <div className='footer-section-container'>
                    <div className='footer-section-left'>
                        <div className='log-name-container'> 
                            <span className='logo'>O</span>
                            <h2>Codeonbytes</h2>
                        </div>
                        <p>Preparing the next generation of problem solvers and innovators for a future driven by AI and technology.</p>
                        <div className='icon-container'>
                              
                                <span><FontAwesomeIcon icon={faFacebook}/></span>
                                <span><FontAwesomeIcon icon={faXTwitter}/></span>
                                <span><FontAwesomeIcon icon={faInstagram}/></span>
                                <span><FontAwesomeIcon icon={faLinkedinIn}/></span>
                              
                        </div>
                    </div>
                    <div className='footer-section-right'>
                        <div className='quick-links'>
                            <span>Quick Links</span>
                            <span>Why Choose Us</span>
                            <span>Our Tracks</span>
                            <span>Fees</span>
                            <span>Enroll Now</span>
                            <span>FAQ</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default LandingPage