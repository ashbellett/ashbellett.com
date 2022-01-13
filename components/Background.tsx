import Particles from 'react-tsparticles';
import styles from '../styles/Background.module.scss';

type BackgroundProps = {
  mobile: boolean;
};

const Background = ({ mobile }: BackgroundProps): JSX.Element => {
  return (
    <Particles
      id={styles.Background}
      options={{
        background: {
          color: {
            value: '#0f111a'
          }
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#474b5e'
          },
          links: {
            color: '#474b5e',
            enable: true,
            distance: mobile ? 80 : 120,
            opacity: 1,
            width: 4
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: mobile ? 80 : 60
          },
          size: {
            value: 4
          },
          shape: {
            type: 'circle'
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false
          },
          opacity: {
            value: 1
          }
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: true,
                force: 100,
                smooth: 10
              }
            }
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 1,
              size: 5
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default Background;
