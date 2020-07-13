import React, {useState} from 'react';
import './Settings.css';

const Settings = props => {
	const [amount, setAmount] = useState({value: ""});
	const [message, setMessage] = useState(null);
	
	const onChange = e => {
		setAmount({...amount, [e.target.name]: e.target.value})
	}
	
	const onSubmit = e => {
		e.preventDefault();
		props.newTotal(amount.value)
	}
	
	const onReset = () => {
		props.resetAmount();
	}
	
	const onClose = () => {
		props.toggleMenu();
	}
	
	return(
		<div className="menu-container">
		  <form className="settings-box">
			  <input 
				  type="number" 
				  value={amount.value}
				  onChange={onChange}
				  name="value"
				  pattern="[0-9]*" 
				  inputMode="numeric" 
				  placeholder="$XX.xx"
				  />
			 <button 
				 className="menu-button"
				 type="submit"
				 onClick={onSubmit}
				 >NEW TOTAL VALUE</button>
			 <button 
 				 type="submit"
				 onClick={onReset}
				 >RESET AMOUNT
			 </button>
			 <button 
				 type="submit"
				 onClick={onClose}
				 >CLOSE MENU
			 </button>
		  </form>
		</div>
	)
}

export default Settings
