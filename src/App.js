import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Auth from './components/Auth';

import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

const App = () => {
  const loggedIn = useSelector(state => state.auth.isAuthenticated)
  // const profile = useSelector(state)

  return (
    <Fragment>
      <Header />
      {loggedIn ? <UserProfile /> : (<Auth />)}

      <Counter />
    </Fragment>
  );
}

export default App;
