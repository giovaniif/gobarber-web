import React from 'react';

import { AuthProvider } from './contexts/AuthContext';

import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyles />
  </>
);

export default App;
