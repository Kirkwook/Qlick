import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import SignUp from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';
import StudentUserDashboard from "../screens/student_dashboard";
import ProfessorUserDashboard from "../screens/professor_dashboard";

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
    },
    StudentUserDashboard: {
        screen: StudentUserDashboard,
        navigationOptions: {
            title: 'Qlick Home',
            headerLeft: ()=> null
        }
    },
    ProfessorUserDashboard: {
        screen: ProfessorUserDashboard,
        navigationOptions: {
            title: 'Professor Home',
            headerLeft: ()=> null
        }
    }

}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
});

export default createAppContainer(LoginStack);