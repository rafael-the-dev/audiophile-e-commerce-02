import logo from '../../../public/images/shared/desktop/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import classNames from 'classnames'
import { useCallback, useMemo } from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const socialMedia = useMemo(() => (
        <ul className="flex items-center mt-4">
            <li className='mr-3'>
                <FacebookIcon className="text-slate-50" />
            </li>
            <li className='mr-3'>
                <TwitterIcon className="text-slate-50" />
            </li>
            <li>
                <InstagramIcon className="text-slate-50" />
            </li>
        </ul>
    ), []);

    const listItem = useCallback(([ label, href, index ]) => (
        <li className={classNames('mb-4 last:mb-0 md:mb-0 md:mr-3 md:last:mr-0')} key={index}>
            <Link href={href}>
                <a className={classNames('no-underline text-sm text-slate-50 uppercase hover:text-brown-500')}>
                    { label }
                </a>
            </Link>
        </li>
    ), []);

    const navigation = useMemo(() => (
        <ul className={classNames('text-slate-50 flex flex-col items-center mt-8 sm:flex-row')}>
            {
                [[ 'Home', '/'], [ 'Headphones', '/headphones'], 
                    [ 'Speakers', '/speakers'], 
                    [ 'Earphones', '/earphones' ]].map((tuple, index) => listItem([ ...tuple, index ]))
            }
        </ul>
    ), []);

    return (
        <footer className={classNames(`bg-black flex flex-col items-center px-[5%] py-16`)}>
            <div>
                <Image 
                    alt='logo'
                    src={logo}
                />
                { navigation }
            </div>
            <div className="mt-8">
                <Typography
                    className="text-[0.93rem] leading-[1.4rem] text-center text-gray-200 opacity-80">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a 
                    small team of music lovers and sound specialists who are devoted 
                    to helping you get the most out of personal audio. Come and visit 
                    our demo facility - we’re open 7 days a week.
                </Typography>
            </div>
            <div className='flex flex-col items-center mt-8'>
                <Typography className="text-[0.91rem] text-gray-200 opacity-80">
                    Copyright 2021. All Rights Reserved
                </Typography>
                { socialMedia }
            </div>
        </footer>
    );
};

export default Footer;