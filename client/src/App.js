import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.component";
import Landing from "./components/layout/Landing.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register.component";
import Login from "./components/auth/Login.component";
import Alert from "./components/layout/alert/Alert.component";

const App = () => {
	return (
		<Router>
			<>
				<Navbar />
				<Route path="/" exact component={Landing} />

				<div className="container">
					<Alert />
					<Switch>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
					</Switch>
				</div>
			</>
		</Router>
	);
};

export default App;
