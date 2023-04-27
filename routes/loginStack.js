import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import Register from '../screens/register';
import ForgotPassword from '../screens/forgotpassword';

const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    ForgotPassword: {
        screen: ForgotPassword
    }
}




const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);