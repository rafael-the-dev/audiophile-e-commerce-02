import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Typography } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'
import LinkButton from '../components/Link'
import CategoriesPreview from '../components/CategoriesPreview'
import Paragraph from '../components/Paragraph'
import speakerZX9 from '../../public/images/home/mobile/image-speaker-zx9.png'

const Home = () => {
    return (
        <>
            <Head>
                <title>Alterado</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className={classNames(styles.hero, ` bg-no-repeat bg-cover flex items-center 
                justify-center px-[5%] md:justify-start`)}>
                <div className={classNames(`text-center flex flex-col items-center md:items-start md:text-left`)}>
                    <Typography
                        className={classNames(`uppercase text-slate-50 text-3xl before:block before:opacity-70
                        before:mb-4 before:text-base sm:text-4xl`, styles.hero__title)}
                        component="h1">
                        xx99 mark ||<br/>headphones
                    </Typography>
                    <Typography
                        className={classNames(`mt-4 opacity-80 text-gray-200 sm:max-w-md`)}>
                        Experience natural, lifelike audio and exceptional build 
                        quality made for the passionate music enthusiast.
                    </Typography>
                    <LinkButton 
                        className="mt-6"
                        href="/" 
                        label="see product" 
                    />
                </div>
            </section>
            <CategoriesPreview />
            <section className={classNames("mt-8 px-[5%]")}>
                <div className={classNames("bg-brown-500 rounded-lg py-8 px-4 flex flex-col items-center")}>
                    <Image
                      alt="speaker"
                      height={200}
                      src={speakerZX9}
                      width={160}
                    />
                    <div className="text-center mt-6 flex flex-col items-center">
                      <Typography
                        className="font-bold uppercase text-slate-100 text-3xl"
                        component="h2">
                        zx9<br/>speaker
                      </Typography>
                      <Paragraph className="text-slate-100">
                        Upgrade to premium speakers that are phenomenally built to 
                        deliver truly remarkable sound.
                      </Paragraph>
                      <LinkButton 
                        buttonClassName={styles.speaker__Button}
                        className="mt-6"
                        href="/"
                        label="See product" 
                      />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

/**
 * <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
 */
