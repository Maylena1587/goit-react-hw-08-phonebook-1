import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeView from 'views/HomeView';
import ContactsView from 'views/ContactsView';
import SignUpView from 'views/SignUpView';
import LogInView from 'views/LogInView';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar';
import Footer from 'Components/Footer';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute, PublicRoute } from 'services/routes';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      {!isFetchingCurrentUser && (
        <>
          <Switch>
            <PublicRoute exact path="/" restricted redirectTo={'/contacts'}>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/signup" restricted redirectTo={'/contacts'}>
              <SignUpView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo={'/contacts'}>
              <LogInView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo={'/login'}>
              <ContactsView />
            </PrivateRoute>
          </Switch>

          <Footer />
        </>
      )}
    </Container>
  );
}

export default App;
