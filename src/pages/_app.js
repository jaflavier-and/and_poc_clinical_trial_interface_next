import '@aws-amplify/ui-react/styles.css'
import '../styles/globals.css'
import { ThemeProvider } from '@aws-amplify/ui-react';
import { studioTheme } from '../ui-components';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
<ThemeProvider theme={studioTheme} >
  {/* <Component {...pageProps} />   */}
  {getLayout(<Component {...pageProps} />)}

</ThemeProvider>
  )
}

export default MyApp

