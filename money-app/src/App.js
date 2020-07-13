import React, {useContext} from 'react';
import Moneypg from './Moneypg'
import Settings from './Settings'
import Login from './Login';
import Navbar from './Navbar'
import Register from './Register';
import RegisterAmount from './Register2';
import Loading from './Loading';
import Message from './Message';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';

// const api = {
// 	key: "d82564eb0dc90d8da6c4",
// 	base: "https://free.currconv.com/api/v7/convert?q=",
// 	base2: "&compact=ultra&apiKey="
// }

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/hidden" component={Message} />
			<Route path="/loading" component={Loading} />
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/register2" component={RegisterAmount}/>
			<Route path="/settings" component={Settings} />
			<Route exact path="/" component={Moneypg}/>
			
		</Router>

	)
}

export default App;


//"Paralax" by Drew Selby is licensed under CC BY 2.0