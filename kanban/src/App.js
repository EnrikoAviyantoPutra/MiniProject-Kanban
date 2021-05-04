import Home from './pages/Home'
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Container } from '@material-ui/core'

function App() {
  return (
    <>
      <Router>
        <Container>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>

    </>
  )
}

export default App;
