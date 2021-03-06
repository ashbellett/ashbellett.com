import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import Background from './Background';
import Content from './Content';
import styles from '../styles/Layout.module.scss';

type LayoutProps = {
  title?: string;
  page: string;
};

const Layout = ({ title, page }: LayoutProps): JSX.Element => {
  const isMobile = useMediaQuery({ maxWidth: 719 });
  const isBigMobile = useMediaQuery({ maxAspectRatio: '2/3' });
  const mobile = isMobile || isBigMobile;

  const [mobileState, setMobileState] = useState(true);

  useEffect(() => {
    setMobileState(mobile);
  }, [mobile]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div id={styles.Layout}>
        <Background mobile={mobileState} />
        <Content page={page} mobile={mobileState} />
      </div>
    </>
  );
};

Layout.getInitialProps = () => {
  const title = 'Ash Bellett';
  const page = 'home';
  return { title, page };
};

export default Layout;
