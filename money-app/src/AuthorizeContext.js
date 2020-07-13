import React, {createContext, useState, useEffect} from 'react';
import Authorize from './Authorize';

export const AuthContext = createContext();

export default ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	
	useEffect(() => {
		Authorize.isAuthenticated().then(data => {
			setUser(data.user);
			setIsAuthenticated(data.isAuthenticated);
			setIsLoaded(true);
		});
	}, [user && isAuthenticated]);
	
	return (
		<div>
			{!isLoaded ? <h1>Loading...</h1> : 
				<AuthContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
					{ children }
				</AuthContext.Provider>}
		</div>
	)
}