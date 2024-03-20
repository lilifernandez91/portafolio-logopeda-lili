import '@/styles/base.scss';
import { roboto } from '@/utils/fonts';
import Layout from '@/components/shared/layout';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${roboto.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
