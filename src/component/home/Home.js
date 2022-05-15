import React, { useRef } from 'react'
import './Home.css';
import image from '../../images/Formal Photo.jpg'
import image1 from '../../images/Formal Photo - 1.jpg'
import image2 from '../../images/Formal Photo - 2.jpg'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const Home = () => {
    const about = useRef(null)
    const exp = useRef(null)
    const skill = useRef(null)
    const project = useRef(null)
    const executeScroll = () => scrollToRef(about)
    const expScroll = () => scrollToRef(exp)
    const skillScroll = () => scrollToRef(skill)
    const projectScroll = () => scrollToRef(project)
    
    return (
        <>
            <div className="navbar-section">
                <div className="nav-container">
                    <div className="navbar-wrapper">
                        <div role="button" class="name" tabindex="0">Vatsal</div>
                        <div className="links-wrapper">
                            <button onClick={executeScroll}>About</button>
                            <button onClick={expScroll}>Experience</button>
                            {/* <button onClick={skillScroll}>Skills</button> */}
                            <button onClick={projectScroll}>Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container" id='home' data-aos="fade-up" data-aos-duration="2000">

                <div className="hack-name" data-aos="fade-up" data-aos-duration="2000">
                    <div className="caption" style={{ paddingTop: "20px", letterSpacing: "2px", color: "#e26161" }}>
                        <h3>Hello, I'm Vatsal 👋 !</h3>
                    </div>
                    <h1>Developer,</h1>
                    <h1>Student,</h1>
                    <h1>Technophile.!!</h1>
                    <div className="caption" style={{ paddingTop: "20px", letterSpacing: "2px", color: "#e26161" }}>
                        <a href="https://twitter.com/DhupeliaVatsal" className='fa fa-twitter' target="_blank" rel='noreferrer'></a>
                        <a href="https://www.linkedin.com/in/vatsal-dhupelia-7990a0200/" className='fa fa-linkedin' target="_blank" rel='noreferrer'></a>
                        <a href="https://github.com/Vatsal-Dhupelia" className='fa fa-github' target="_blank" rel='noreferrer'></a>
                    </div>
                </div>
                {/* <div className="img-container" data-aos="fade-up" data-aos-duration="2000">
          <img src={vector1} alt="" />
        </div> */}
            </div>
            <div ref={about} className="dummy" id='about'>
                <div className="caption" style={{ fontWeight: "800px" }}>
                    <h1> ABOUT ME</h1>
                </div>
            </div>
            <div className="main-container1" data-aos="fade-up" data-aos-duration="2000">

                <div className="about" data-aos="fade-up" data-aos-duration="2000">
                    <p>Pre-final year Computer Science undergraduate at Birla Vishvakarma Mahavidyalaya. Committed to strengthening experiences with positivity and professionalism. Impulsive towards Web Designing and Proficient in developing databases and creating user interfaces. Currently scaling my knowledge in the development aspects using MERN Stack.
                    </p>
                    <p>
                        Though I am an engineering undergrad, my interests also do lie in the field of finance, stock market analysis and macroeconomics.
                    </p>
                </div>
                <div className="img-container" data-aos="fade-up" data-aos-duration="2000">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="dummy1" ref={exp} id='experience' style={{ padding: "0px", textAlign: "center" }}>
                <div className="caption" style={{ fontWeight: "800px", paddingTop: "30px" }}>
                    <h1>EXPERIENCE</h1>
                </div>
            </div>
            <div className="container3">
                <div className="exp">
                    <div class="wrapper">
                        <div class="center-line">
                            {/* <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a> */}
                        </div>
                        <div class="row row-1">
                            <section>
                                <i class="icon"></i>
                                <div class="details">
                                    <span class="title">DEVELOPMENT HEAD</span>
                                    {/* <span style={{fontSize: "13px"}}>04/2022 - Present</span> */}
                                </div>
                                <p style={{ fontSize: "14px" }}>Computer Society Of India, BVM SB</p>
                                <p>Managing the Technical as well as Development related aspects of the Community.</p>

                            </section>
                        </div>
                        <div class="row row-2">
                            <section>
                                <i class="icon"></i>
                                <div class="details">
                                    <span class="title">TECH TEAM</span>
                                    {/* <span style={{fontSize: "13px"}}>08/2021 - Present</span> */}
                                </div>
                                <p style={{ fontSize: "14px" }}>Google Developer Student Clubs - BVM</p>
                                <p>Managing Technical Domains of the Clubs which includes : Website Handling and Development, Technical Documents etc.</p>

                            </section>
                        </div>
                        <div class="row row-1">
                            <section>
                                <i class="icon"></i>
                                <div class="details">
                                    <span class="title">COMMUNITY VOLUNTEER</span>
                                    {/* <span style={{fontSize: "13px"}}>07/2021 - 04/2022</span> */}
                                </div>
                                <p style={{ fontSize: "14px" }}>Computer Society Of India, BVM SB</p>
                                <p>Served as a Community Volunteer in Computer Society of India BVM.</p>

                            </section>
                        </div>
                        <div class="row row-2">
                            <section>
                                <i class="icon"></i>
                                <div class="details">
                                    <span class="title">DEVELOPMENT INTERN</span>
                                    {/* <span style={{fontSize: "13px"}}>06/2021 - 07/2021</span> */}
                                </div>
                                <p style={{ fontSize: "14px" }}>Sparrow Technologies - Bhavnagar</p>
                                <p>Worked on front-end widgets for shadowing senior developers on large project of Hospital Administrative Website.</p>

                            </section>
                        </div>
                        <div class="row row-1">
                            <section>
                                <i class="icon"></i>
                                <div class="details">
                                    <span class="title">MARKETING TEAM</span>
                                    {/* <span style={{fontSize: "13px"}}>03/2021 - 04/2021</span> */}
                                </div>
                                <p style={{ fontSize: "14px" }}>Computer Symposium 2021</p>
                                <p>Got a chance to be in the Marketing Team of Computer Symposium 2021.</p>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dummy1" ref={skill} id='skills' style={{ padding: "0px", textAlign: "center" }}>
                <div className="caption" style={{ fontWeight: "800px" }}>
                    <h1>SKILLS</h1>
                </div>
            </div>
            <div className="container4">
                <div class="p-container">
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>ReactJs</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>NodeJs</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>ExpressJs</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>MongoDB</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>Python</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>Java</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>Django</h3>
                    </div>
                    <div className="circle">
                        <h3 style={{ fontWeight: "800" }}>SQL</h3>
                    </div>
                </div>
            </div>
            <div className="dummy1" ref={project} id='projects' style={{ padding: "0px", textAlign: "center" }}>
                <div className="caption" style={{ fontWeight: "800px", paddingTop: "70px" }}>
                    <h1>PROJECTS</h1>
                </div>
            </div>
            <div className="container4">
                <div class="p-container" style={{ paddingBottom: "50px" }}>
                    <div className="work">
                        <h4 style={{ fontWeight: "700", fontSize: "22px" }}>HACKATHON WEBSITE</h4>
                        <p>Developed a Website for University Tech Community GDSC - BVM for Hackathon.</p>
                        <a href="https://github.com/Vatsal-Dhupelia/Hackathon-Website-SolutionFest" className='fa fa-github' target="_blank" rel='noreferrer' style={{ color: "white", margin: "0px" }}></a>
                    </div>
                    <div className="work">
                        <h4 style={{ fontWeight: "700", fontSize: "22px" }}>CLOUDBOOK</h4>
                        <p>Developed a CloudBook using MERN Stack, where a user can save their notes on their account.</p>
                        <a href="https://github.com/Vatsal-Dhupelia/CloudBook-ReactJs" className='fa fa-github' target="_blank" rel='noreferrer' style={{ color: "white", margin: "0px" }}></a>
                    </div>
                    <div className="work">
                        <h4 style={{ fontWeight: "700", fontSize: "22px" }}>NEWS DESK</h4>
                        <p>React App which serves the news of your Choice with the help of API.</p>
                        <a href="https://github.com/Vatsal-Dhupelia/NewsDesk-ReactJs" className='fa fa-github' target="_blank" rel='noreferrer' style={{ color: "white", margin: "0px" }}></a>
                    </div>
                    <div className="work">
                        <h4 style={{ fontWeight: "700", fontSize: "22px" }}>TEXT CONVERTER</h4>
                        <p>React App which for manipulating texts as per the user choices with Dark Mode functionality.</p>
                        <a href="https://github.com/Vatsal-Dhupelia/Text-Converter-ReactJs" className='fa fa-github' target="_blank" rel='noreferrer' style={{ color: "white", margin: "0px" }}></a>
                    </div>
                    <div className="work">
                        <h4 style={{ fontWeight: "700", fontSize: "22px" }}>HOSPITAL WEBSITE</h4>
                        <p>Full Stack Website for the Hospital Administration for Doctors and Patients.</p>
                        <a href="https://github.com/Vatsal-Dhupelia/Hospital-Administrative-Website" className='fa fa-github' target="_blank" rel='noreferrer' style={{ color: "white", margin: "0px" }}></a>
                    </div>
                    <div className="work">
                        <h4 style={{ fontWeight: "700", fontSize: "22px" }}>REAL ESTATE WEBSITE </h4>
                        <p>Full-Stack website of Real-Estate Business with functionality of Buying, Selling and Renting.</p>
                        <a href="https://github.com/Vatsal-Dhupelia/RealEstate-Business-Website" className='fa fa-github' target="_blank" rel='noreferrer' style={{ color: "white", margin: "0px" }}></a>
                    </div>
                    {/* <div className="work">
                        <h3 style={{ fontWeight: "800" }}>Django</h3>
                    </div>
                    <div className="work">
                        <h3 style={{ fontWeight: "800" }}>SQL</h3>
                    </div> */}
                </div>
            </div>
            <footer id='footer'>
                <div className="main-footer">
                    <div className="midFooter">
                        <p style={{ font: "white" }}>&#169; Copyright : VatsalDhupelia</p>
                        <p style={{ font: "white" }}>Developed &amp; Designed by Vatsal with &#10084;</p>

                    </div>
                </div>

            </footer>
        </>
    );
};

export default Home;
