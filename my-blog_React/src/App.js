import Navbar from './Navbar';
import Button from './Buttons';
import List from './List'
import Buttons2 from './Buttons2';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import JsonBlogs from './JsonBlogs';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div className="content1">
                <JsonBlogs />
              </div>
            </Route>

            <Route exact path="/Buttons">
              <div>
                <Button />
                <Buttons2 />
              </div>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            
            <Route path="/creat">
              <Create />
            </Route>
            
            <Route path="/List">
              <List />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
