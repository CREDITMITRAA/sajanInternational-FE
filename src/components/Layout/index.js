import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-sky-200 via-white to-sky-200">
      <main className="p-0">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
