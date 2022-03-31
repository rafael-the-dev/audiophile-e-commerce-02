import logo from '../../../public/images/shared/desktop/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import classNames from 'classnames'
import { useMemo } from 'react'

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

    return (
        <footer className={classNames(`bg-black flex flex-col items-center px-[5%] py-8 text-slate-50`)}>
            <div>

            </div>
            <div>
                <p>
                    Copyright 2021. All Rights Reserved
                </p>
                { socialMedia }
            </div>
        </footer>
    );
};

export default Footer;