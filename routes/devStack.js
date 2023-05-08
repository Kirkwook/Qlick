import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from '../screens/login';
import SignUp from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';
import InternalUserDashboard from "../screens/internal_dashboard";
import StudentUserDashboard from "../screens/student_dashboard";
import ProfessorUserDashboard from "../screens/professor_dashboard";
import SessionManagerDashboard from "../screens/session_manager";
import AccountEditingPage from "../screens/edit_account";
import studentsQuizScreen from "../screens/QuizScreen";
import QuizCreator from "../screens/quiz_creator"
import profDashboard from "../screens/profDashboard"
import ProfQuestionList from "../screens/profQuestionList";
import BasicDisplayTest from "../screens/basic_question_display";

import devNav from "../screens/dev_nav"

const screens = {
  // devNav: {
  //   screen: devNav,
  //   navigationOptions: {
  //     title: "Developer Navigation",
  //   },
  // },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
    },
  },
  AccountEditingPage: {
    screen: AccountEditingPage,
    navigationOptions: {
      title: "AccountEditingPage",
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: "Forgot Password?",
    },
  },
  InternalUserDashboard: {
    screen: InternalUserDashboard,
    navigationOptions: {
      title: "In. Dashboard",
    },
  },
  StudentUserDashboard: {
    screen: StudentUserDashboard,
    navigationOptions: {
      title: "St. Dashboard",
    },
  },
  ProfessorUserDashboard: {
    screen: ProfessorUserDashboard,
    navigationOptions: {
      title: "Pr. Dashboard",
    },
  },
  profDashboard: {
    screen: profDashboard,
    navigationOptions: {
      title: "Pr. Dashboard 2",
    },
  },
  SessionManagerDashboard: {
    screen: SessionManagerDashboard,
    navigationOptions: {
      title: "Session Dashboard",
    },
  },
  studentsQuizScreen: {
    screen: studentsQuizScreen,
    navigationOptions: {
      title: "Quiz",
    },
  },
  QuizCreator: {
    screen: QuizCreator,
    navigationOptions: {
      title: "Quiz Maker",
    },
  },
  ProfQuestionList: {
    screen: ProfQuestionList,
    navigationOptions: {
      title: "Prof Q List",
    },
  },
};

const DevStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default createAppContainer(DevStack);
