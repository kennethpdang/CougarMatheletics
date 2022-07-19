// File Description: Whatever components you place in _app.js would display to all other pages. This is used for navigation bars and things.

// Packages to import:
import '../styles/globals.css'; // Importing styles for every page.
import '../components/Navigation_bar';
import NavigationBar from '../components/Navigation_bar';
import { Toaster } from 'react-hot-toast';

// Main Component:
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
      <Toaster /> {/* Toaster components are hidden by default, and when trigger they go over your stuff. */}
    </>
  );
}

export default MyApp;