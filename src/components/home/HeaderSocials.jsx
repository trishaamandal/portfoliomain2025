// import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, } from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/trishaamandal' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='https://leetcode.com/u/trishumandal/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLeetcode />
            </a> */}


            <a href='https://www.linkedin.com/in/trishamandal123/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            <a href='https://leetcode.com/u/trishumandal/' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiLeetcode />
            </a>

            <a href='https://www.hackerrank.com/trishamandal0505' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHackerrank />
            </a>

            <a href='https://www.facebook.com/profile.php?id=61556312901718' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/trishamandal00' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
