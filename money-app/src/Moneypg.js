import React, {useState, useEffect, useContext} from 'react';
import MoneyAmount from './moneyamount';
import moneyservice from './moneyservice';
import RegisterAmount from './Register2';
import SubmitForm from './SubmitForm';
import Settings from './Settings'
import { AuthContext } from './AuthorizeContext';
import './Moneypg.css';

const Moneypg = props => {
	const [moneyStart, setMoneyStart] = useState(); 
	const [moneyLeft, setMoneyLeft] = useState();
	const [showMenu, setShowMenu] = useState(false);
	const [message, setMessage] = useState(null);
	const authContext = useContext(AuthContext);
	

	useEffect(() => { 
		moneyservice.getMoney().then(data => {
			console.log(data)
			if (!data.data) {
				return;
			}
			else if (data.data.length == 0) {
				return;
			} else {
				const startData = data.data[0].moneyStart;
				const leftData = data.data[0].moneyLeft;
				setMoneyStart(startData);
				setMoneyLeft(leftData);
			}
		});
	}, [moneyLeft, moneyStart]);
	
	//TOGGLING MENU FUNCTIONS
	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}
	
	
	//HANDLING DB/STATE VALUES FUNCTIONS
	const subtractValue = val => {
		const id = authContext.user.data
		let newAmount = moneyLeft - val;
		moneyservice.editAmount(id, newAmount)
			.then(data => {
			setMoneyLeft(data.moneyLeft);
		})
	}
	
	const newTotal = val => {
		const id = authContext.user.data
		moneyservice.editStart(id, val)
			.then(data => {
			setMoneyLeft(data.moneyLeft);
			setMoneyStart(data.moneyStart);
			toggleMenu();
		})
	}
	
	const resetAmount = () => {
		const id = authContext.user.data
		let newAmount = moneyStart
		moneyservice.editAmount(id, newAmount)
			.then(data => {
			setMoneyLeft(data.moneyLeft);
			toggleMenu();
		})
	}
	
	const registerAmount = val => {
		moneyservice.postAmount(val).then(data=> {
			const { message, moneyStart, moneyLeft } = data;
			setMessage(message);
			setMoneyStart(moneyStart);
			setMoneyLeft(moneyLeft);
		})
	}
	
	
	//RETURNED JSX FUNCTIONS
	const hasData = () => {
		return (
			<div className="container">
				{ showMenu === true ? menu() : appDisplay() }
			</div>
		)
	}
	
	const noData = () => {
		return (
			<RegisterAmount registerAmount={registerAmount}/>
		)
	}
	
	const redirect = () => {
		return (
			props.history.push('/login')
		)
	}
	
	const menu = () => {
		return (
		<Settings 
			newTotal={newTotal} 
			resetAmount={resetAmount} 
			toggleMenu={toggleMenu}
		/>
		)
	}
	
	const appDisplay = () => {
		return (
		<div className="App">
			<div className="header">
				<h1> Money Left:</h1>
				<h2>${moneyLeft}</h2>
			</div>
			<SubmitForm subtractValue={subtractValue} />
			<button className="settings-btn" onClick={toggleMenu}>SETTINGS</button>
		</div>
		)
	}
	
	return(
		<div>
			{ !authContext.isAuthenticated ? redirect() : authContext.user.data.length == 0 ? noData() : hasData() }
		</div>
		
	)
}

export default Moneypg;