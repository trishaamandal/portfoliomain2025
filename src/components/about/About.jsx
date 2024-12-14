// import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I’m Trisha Mandal, live in Kolkata, West Bengal, India. Currently, I am pursuing a BTech degree in IoT, Cybersecurity, and Blockchain Technology at the University of Engineering and Management, Kolkata. Along my academic journey, I’ve gained hands-on experience in software development and cybersecurity through virtual internships at companies like Goldman Sachs and Tata Group.

                            Fast forward to today, I’m focused on expanding my technical expertise and portfolio through impactful projects. From developing ML-based resume categorization tools to building generative AI platforms, my work reflects my passion for problem-solving and innovation.

                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">

                            <li>Python</li>
                            <li>SQL</li>
                            <li>NoteBook</li>
                            <li>JavaScript</li>
                            <li>HTML CSS</li>
                            <li>React</li>
                            <li>Cybersecurity and Cloud Computing</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About