import './App.css';
import Nav from './learn/Navigation/Nav';
import Hello from './learn/hello';
import Comment from './learn/split-component';
import Clock from './learn/tickClock';
import { Toggle, Form, LoginControl } from './learn/event';
// import List from './learn/listAndKey';
import FormAction from './learn/addDelete';
import {
  Switch,
  Route
} from "react-router-dom";
import UserList from './learn/Axios/User-list';
import DetailUser from './learn/Axios/DetailUser';

const comment = {
  date: new Date(),
  author: {
    name: "Phuc",
    type: "D"
  }
}

function App() {
  return (
    <>
      <div className='App'>
        <div className='App-header'>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Hello />
            </Route>
            <Route path="/addDelete">
              <FormAction />
            </Route>
            <Route path="/tickClock">
              <Clock name="init" />
            </Route>
            <Route path="/event">
              <Toggle />
              <Form />
              <LoginControl />
            </Route>
            <Route path="/axios" exact>
              <UserList />
            </Route>
            <Route path="/axios/:id">
              <DetailUser />
            </Route>
          </Switch>
          <div>
            <Comment date={comment.date}
              authora={comment.author} />
          </div>
          {/* <List /> */}
        </div>
      </div>
    </>
  );
}

export default App;
