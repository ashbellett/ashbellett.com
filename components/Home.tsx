import { Icon, Image } from 'semantic-ui-react';
import styles from '../styles/Home.module.scss';

type HomeProps = {
  mobile: boolean;
};

const Home = ({ mobile }: HomeProps): JSX.Element => {
  return (
    <div id={styles.Home}>
      <Image
        src="ash.png"
        size={mobile ? 'small' : 'medium'}
        alt="Profile picture"
        centered
        circular
      />
      <h1 id={mobile ? styles.MobileTitle : styles.Title}>Ash Bellett</h1>
      <p id={mobile ? styles.MobileSubtitle : styles.Subtitle}>
        I'm a <span id={styles.DataScientist}>data scientist</span> and{' '}
        <span id={styles.SoftwareEngineer}>software engineer</span> in{' '}
        <span id={styles.MelbourneAustralia}>Melbourne, Australia</span>.
      </p>
      <a
        href="https://youtube.com/channel/UCSirULWi2TjJaPh3qmFLKTA"
        target="_blank"
      >
        <Icon name="youtube" size={mobile ? 'big' : 'huge'} />
      </a>
      <a href="https://linkedin.com/in/ashbellett/" target="_blank">
        <Icon name="linkedin" size={mobile ? 'big' : 'huge'} />
      </a>
      <a href="https://twitter.com/ashbellett" target="_blank">
        <Icon name="twitter" size={mobile ? 'big' : 'huge'} />
      </a>
      <a href="https://github.com/ashbellett" target="_blank">
        <Icon name="github" size={mobile ? 'big' : 'huge'} />
      </a>
      <a href="https://ashbellett.medium.com/" target="_blank">
        <Icon name="medium" size={mobile ? 'big' : 'huge'} />
      </a>
    </div>
  );
};

Home.getInitialProps = () => {
  return {};
};

export default Home;
