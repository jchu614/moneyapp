import React, {useState} from 'react';
import './Settings.css';

// class Settings extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {inputValue: ''};
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	handleChange(e){
// 		this.setState({
// 			inputValue: e.target.value
// 		})
// 	}
// 	handleSubmit(){
// 		this.props.saveSettings(this.state.inputValue);
// 	}
// 	render(){
// 		const {onClose} = this.props;
// 		const {resetAmount} = this.props;
// 		return(
// 			<div className="menu-container">
// 			<form className="settings-box">
// 			  <input 
// 				  type="number" 
// 				  value={this.state.inputValue}
// 				  onChange={this.handleChange}
// 				  pattern="[0-9]*" 
// 				  inputMode="numeric" 
// 				  placeholder="$XX.xx"
// 				  />
// 			 <button
// 				 className="menu-button"
// 				 type="submit"
// 				 onClick={this.handleSubmit}
// 				 >NEW TOTAL VALUE
// 			</button>
// 			<button 
// 				 type="submit"
// 				 onClick={resetAmount}
// 				 >RESET AMOUNT
// 			</button>
// 			<button 
// 				 type="submit"
// 				 onClick={onClose}
// 				 >CLOSE MENU
// 			</button>
// 		  </form>
// 			</div>
// 		)
// 	}
// }

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