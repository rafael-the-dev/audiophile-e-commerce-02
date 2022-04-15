import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Hidden, Typography } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'
import LinkButton from 'src/components/Link'
import CategoriesPreview from 'src/components/CategoriesPreview'
import Paragraph from 'src/components/Paragraph'
import speakerZX9 from 'public/images/home/mobile/image-speaker-zx9.png'
import yx1EarphoneImage from 'public/images/home/mobile/image-earphones-yx1.jpg'
import yx1EarphoneTabletImage from 'public/images/home/mobile/image-earphones-yx1.jpg'
import yx1EarphoneDesktopImage from 'public/images/home/mobile/image-earphones-yx1.jpg'

const Home = () => {
    const ImageContainer = ({ className, height, src, width }) => (
      <Image
        alt="speaker"
        className={className}
        height={height}
        src={src}
        width={width}
      />
    );

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
                        href="/headphones/xx99-mark-two-headphones" 
                        label="see product" 
                    />
                </div>
            </section>
            <CategoriesPreview />
            <section className={classNames("mt-8 px-[5%]")}>
                <div 
                    className={classNames(`bg-brown-500 rounded-lg py-8 px-4 flex flex-col items-center
                    bg-center bg-cover bg-no-repeat sm:py-12 md:flex-row md:justify-between md:px-[10%]
                    md:overflow-hidden`, styles.speaker)}>
                    <Hidden mdUp>
                      <ImageContainer height={200} src={speakerZX9} width={160} />
                    </Hidden>
                    <Hidden mdDown>
                      <div className={styles.speaker__imageContainer}>
                        <ImageContainer height={400} src={speakerZX9} width={320} />
                      </div>
                    </Hidden>
                    <div 
                      className="text-center mt-6 flex flex-col items-center md:text-left md:items-start
                      md:max-w-[50%]">
                      <Typography
                        className="font-bold uppercase text-slate-100 text-3xl"
                        component="h2">
                        zx9<br/>speaker
                      </Typography>
                      <Paragraph className="text-slate-100 sm:max-w-[60%] md:max-w-[80%]">
                        Upgrade to premium speakers that are phenomenally built to 
                        deliver truly remarkable sound.
                      </Paragraph>
                      <LinkButton 
                        buttonClassName={styles.speaker__Button}
                        className="mt-6"
                        href="/speakers/zx9-speaker"
                        label="See product" 
                      />
                    </div>
                </div>
            </section>
            <section className="px-[5%] mt-6">
              <div className={classNames(`bg-cover bg-no-repeat bg-center px-4 flex flex-col justify-center
                rounded-lg sm:px-[5%] md:px-[10%]`, styles.zx7Speaker)}>
                  <Typography
                    className="font-bold uppercase text-3xl"
                    component="h2">
                    zx7 speaker
                  </Typography>
                  <LinkButton 
                    buttonClassName={styles.zx7Speaker__Button}
                    className="mt-6"
                    href="/speakers/zx7-speaker"
                    label="See product" 
                  />
              </div>
            </section>
            <section className="px-[5%] mt-6 sm:flex sm:items-stretch">
              <Hidden smUp>
                <ImageContainer className="rounded-lg" src={yx1EarphoneImage} />
              </Hidden>
              <Hidden smDown mdUp>
                <ImageContainer className="rounded-lg" height={300} src={yx1EarphoneTabletImage} width={300} />
              </Hidden>
              <Hidden mdDown>
                <ImageContainer className="rounded-lg" height={350} src={yx1EarphoneDesktopImage} width={500} />
              </Hidden>
              <div className="bg-gray-300 flex flex-col mt-4 px-4 py-8 rounded-lg sm:mt-0 sm:grow sm:ml-4
                sm:justify-center sm:px-[5%] md:ml-8">
                  <Typography
                    className="font-bold uppercase text-3xl"
                    component="h2">
                    Yz1 earphone
                  </Typography>
                  <LinkButton 
                    buttonClassName={styles.zx7Speaker__Button}
                    className="mt-6"
                    href="/earphones/yx1-earphones"
                    label="See product" 
                  />
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
