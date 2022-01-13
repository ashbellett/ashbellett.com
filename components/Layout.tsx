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
  // const isDesktop = useMediaQuery({ minWidth: 1080, minAspectRatio: '2/3' });
  // const isTablet = useMediaQuery({
  //   minWidth: 720,
  //   maxWidth: 1079,
  //   minAspectRatio: '2/3'
  // });
  const isMobile = useMediaQuery({ maxWidth: 719 });
  const isBigMobile = useMediaQuery({ maxAspectRatio: '3/4' });
  const mobile = isMobile || isBigMobile;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id={styles.Layout}>
        <Background mobile={mobile} />
        <Content page={page} mobile={mobile} />
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
