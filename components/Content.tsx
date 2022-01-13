import Home from './Home';
import styles from '../styles/Content.module.scss';

type ContentProps = {
  page: string;
  mobile: boolean;
};

const Content = ({ page, mobile }: ContentProps): JSX.Element => {
  const renderSelection = () => {
    if (page === 'home') {
      return <Home mobile={mobile} />;
    } else {
      return;
    }
  };

  return <div id={styles.Content}>{renderSelection()}</div>;
};

Content.getInitialProps = () => {
  const page = 'home';
  return { page };
};

export default Content;
