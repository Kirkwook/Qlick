import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import SignUp from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';
import InternalUserDashboard from '../screens/internal_dashboard'
import StudentUserDashboard from '../screens/student_dashboard'

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up',
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'Forgot Password?',
        }
    }
}

const DevStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
});


export default createAppContainer(DevStack);