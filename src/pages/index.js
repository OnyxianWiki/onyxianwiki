import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Table from '../components/WikiTable';

//Creo que sacaria el de la gema cool sola, el veerde agua

const plugins = [
  {
    title: <>Damage Potion Effects</>,
    imagePath: 'img/logos/DamagePotionEffects.png',
    description: (
      <>
        Increase your server depth, make damage have consequences!
        Apply potion effects to mob attacks, physics or any damage source! Super customizable!
      </>
    ),
    targetUrl: '../../DamagePotionEffects/home',
  },
  {
    title: <>Send Console Message</>,
    imagePath: 'img/logos/SendConsoleMessage.png',
    description: (
      <>
        Send console messages, with prefixes and colors!
        Combine with others to do informative and beautiful logging!
      </>
    ),
    targetUrl: '../../SendConsoleMessage/home',
  },
  {
    title: <>Fall Event API</>,
    imagePath: 'img/logos/FallEventAPI.png',
    description: (
      <>
        Ever wanted to listen to a player fall? I know I did!
        Get this API and jump straight to developing with Player Fall Events!
      </>
    ),
    targetUrl: '../../PlayerFallEventAPI/home'
  },
  // {
  //   title: <>OnyxianCore</>,
  //   imagePath: 'img/logos/1a.png',
  //   description: (
  //     <>
  //       The nucleus of my most advanced plugins. Makes your configuration easier, and increases their plugin power ∞-fold.
  //     </>
  //   ),
  //   targetUrl: '../../OnyxianCore/home',
  // },
  {
    title: <>OnyxianCore</>,
    imagePath: 'img/logos/2d.png',
    description: (
      <>
        The nucleus of my most advanced plugins. Makes your configuration easier, and increases their plugin power ∞-fold.
      </>
    ),
    targetUrl: '../../OnyxianCore/home',
  },
  // {
  //   title: <>OnyxianCore</>,
  //   imagePath: 'img/logos/2e.png',
  //   description: (
  //     <>
  //       The nucleus of my most advanced plugins. Makes your configuration easier, and increases their plugin power ∞-fold.
  //     </>
  //   ),
  //   targetUrl: '../../OnyxianCore/home',
  // },
];

function Feature({ imagePath, title, description, targetUrl }) {
  const imgUrl = useBaseUrl(imagePath);
  return (
    <div className={classnames('col col--4 landingCol', styles.feature)}>
      <a href={targetUrl}>
        {imgUrl && (
          <div className="text--center">
            <img className="featureImage" src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Documentation for OnyxianSoul's Spigot Plugins." wrapperClassName="centeredInDiv cloudyBackground" > {/*recordar, layout no aparece */}
      <div className="centerContent">
        <header>
          <div className="container centeredInDiv text--center">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <br />
            <h2>Click on a plugin to begin!</h2>
          </div>
        </header>

        <main className=" text--center">
          {plugins && plugins.length && (
            <section className={styles.features}>
              <div className="logosSection">
                <div className="row logosRow">
                  {plugins.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default Home;
