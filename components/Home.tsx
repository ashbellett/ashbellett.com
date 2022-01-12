import { Icon, Image } from 'semantic-ui-react';
import styles from '../styles/Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <div id={styles.Home}>
      <Image
        src="ash.png"
        size="medium"
        alt="Profile picture"
        centered
        circular
      />
      <h1>Ash Bellett</h1>
      <p>
        I'm a <span id={styles.DataScientist}>data scientist</span> and{' '}
        <span id={styles.SoftwareEngineer}>software engineer</span> in{' '}
        <span id={styles.MelbourneAustralia}>Melbourne, Australia</span>.
      </p>
      <a
        href="https://youtube.com/channel/UCSirULWi2TjJaPh3qmFLKTA"
        target="_blank"
      >
        <Icon name="youtube" size="huge" />
      </a>
      <a href="https://linkedin.com/in/ashbellett/" target="_blank">
        <Icon name="linkedin" size="huge" />
      </a>
      <a href="https://twitter.com/ashbellett" target="_blank">
        <Icon name="twitter" size="huge" />
      </a>
      <a href="https://github.com/ashbellett" target="_blank">
        <Icon name="github" size="huge" />
      </a>
      <a href="https://ashbellett.medium.com/" target="_blank">
        <Icon name="medium" size="huge" />
      </a>
    </div>
  );
};

Home.getInitialProps = () => {
  return {};
};

export default Home;
