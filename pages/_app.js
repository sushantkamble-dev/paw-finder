import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getServerSideProps(context) {
  const session = await getIronSession(context.req, context.res, ironOptions);
  return {
    props: {
      session,
    },
  };
}