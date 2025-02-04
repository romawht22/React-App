import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Content from './content/Content';
import Dialogs from './dialogs/Dialogs';
import Settings from './dialogs/Settings';
import Header from './navigation/Header';
import LoginPage from './navigation/LoginPage';
import Sidebar from './navigation/Sidebar';
import SingleUser from './users/SingleUser';
import UserPage from './users/UserPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='wrapper'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Content/>
            </Route>
            <Route exact path='/profile'>
              <Content />
            </Route>
            <Route path='/users/:userId'>
              <SingleUser/>
            </Route>
            <Route exact path='/messages'>
              <Dialogs />
            </Route>
            <Route exact path='/settings'>
              <Settings />
            </Route>
            <Route exact path='/users'>
              <UserPage />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route path='*'>
              <div>404 Page not found</div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
