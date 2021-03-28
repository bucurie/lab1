import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import AllPatients from './pages/AllPatients'
import Patient from './pages/Patient'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<AllPatients />
				</Route>

				<Route path="/patient/:id">
					<Patient />
				</Route>

				<Route path="*"><Redirect to="/"/></Route>

			</Switch>
		</Router>
	);
}

export default App;
