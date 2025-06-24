import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RootLayout = ({ children }) => {

  const location = useLocation();

   useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="bg-gradient-to-br from-sky-200 via-white to-sky-200">
      <main className="p-0">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
