import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewdetails';
import About from '../screens/about';


const screens = {
    About: {
        screen: About
    },
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);