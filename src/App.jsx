import LoginWithPopup from './components/login-popup/LoginWithPopup';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<h1>Firebase</h1>
			<AuthProvider>
				<Login />
				<Register />
				<Logout />
				<LoginWithPopup />
			</AuthProvider>
		</>
	);
};

export default App;
