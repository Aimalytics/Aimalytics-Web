import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <main>
        {/* The current route's component will be rendered here */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;