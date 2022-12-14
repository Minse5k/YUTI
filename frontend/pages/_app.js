import '../styles/globals.css';
import Layout from '../template/Layout';
import { RouteChangeProvider } from '../context/RouteChangeContext';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
);
function MyApp({ Component, pageProps }) {
  const [colors, setColors] = useState();

  useEffect(() => {
    if (colors) {
      return;
    }
    const [MAIN_COLOR, SUB_COLOR] =
      Math.random() > 0.5 ? ['#67D193', '#2A9220'] : ['#FC7D71', '#FFC9CA'];
    setColors({ main: MAIN_COLOR, sub: SUB_COLOR });
  }, []);

  return (
    <>
      <ThemeProvider theme={{ colors }}>
        <RouteChangeProvider>
          {colors && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </RouteChangeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
