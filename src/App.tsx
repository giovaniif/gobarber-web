import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyles />
  </>
);

export default App;
