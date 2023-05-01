import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashbaord from '../screens/student_dashboard';
import SignUp from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';

const screens = {
    Dashbaord: {
        screen: Dashbaord,
        navigationOptions: {
            title: 'Dashbaord',
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




const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
});


export default createAppContainer(HomeStack);