import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
// It's good practice to have a 404 page
// import NotFoundPage from './pages/NotFoundPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes within this <Route> will have the Header and Footer */}
        <Route path="/" element={<Layout />}>
          {/* The index route is the default page for the parent path "/" */}
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />

          {/* A catch-all route for any path that doesn't match */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;