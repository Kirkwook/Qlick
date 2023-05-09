import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Ben and Connor login screens
import Login from '../screens/login';
import SignUp from '../screens/signup';
import ForgotPassword from '../screens/forgotpassword';

//Ben Screens
import CreateSession from '../screens/createSession'
import StartSession from '../screens/startSession'
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

// Connonr dashboards
import InternalUserDashboard from "../screens/internal_dashboard";
import StudentUserDashboard from "../screens/student_dashboard";
import ProfessorUserDashboard from "../screens/professor_dashboard";
import SessionManagerDashboard from "../screens/session_manager";
import AccountEditingPage from "../screens/edit_account";

// Drew student screens (currently pulling BasicDisplayTest 5/5/23)
import studentsQuizScreen from "../screens/studentQuizScreen";
import BasicDisplayTest from "../screens/basic_question_display";

// Bobby screens
import QuizCreator from "../screens/quiz_creator";

// Justin Professor Screens
import ProfQuestionList from "../screens/profQuestionList";
import ProfQuizScreen from "../screens/profQuizScreen";
import ViewStudentsForProf from "../screens/ViewStudentsForProf";
import ViewProfQuizSets from "../screens/ViewProfQuizSets";

// Unfinished screens
import ViewStudentResponses from "../screens/view_student_responses"
import StudentViewPastSessions from "../screens/student_view_past_sessions"
import EditDatabase from "../screens/edit_database";
import EditUserAccounts from "../screens/edit_all_user_accounts";

const screens = {

    AuthLoadingScreen: {
        screen: AuthLoadingScreen,
        navigationOptions: {
            title: 'Loading',
        }
    },


    // DEVELOPMENT - INTERNAL USER FIRST
    InternalUserDashboard: {
        screen: InternalUserDashboard,
        navigationOptions: {
            title: 'Internal',
        }
    },

    //LOGIN SCREENS

     
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

    // DASHBOARD SCREENS

    InternalUserDashboard: {
        screen: InternalUserDashboard,
        navigationOptions: {
            title: 'Internal',
        }
    },
    StudentUserDashboard: {
        screen: StudentUserDashboard,
        navigationOptions: {
            title: 'Qlick',
            headerLeft: ()=> null
        }
    },
    ProfessorUserDashboard: {
        screen: ProfessorUserDashboard,
        navigationOptions: {
            title: 'Professor',
            headerLeft: ()=> null
        }
    },
    AccountEditingPage: {
        screen: AccountEditingPage,
        navigationOptions: {
            title: 'Edit Account',
        }
    },

    // STUDENT SCREENS
    BasicDisplayTest: {
        screen: BasicDisplayTest,
        navigationOptions: {
            title: 'Quiz',
        }
    },
    StudentViewPastSessions: {
        screen: StudentViewPastSessions,
        navigationOptions: {
            title: 'Past Sessions',
        }
    },

    // PROFESSOR SCREENS
    QuizCreator: {
        screen: QuizCreator,
        navigationOptions: {
            title: 'Quiz Maker',
        }
    },
    SessionManagerDashboard: {
        screen: SessionManagerDashboard,
        navigationOptions: {
            title: 'Manage Sessions',
        }
    },
    CreateSession: {
        screen: CreateSession,
        navigationOptions: {
            title: 'Create Session',
        }
    },
    StartSession: {
        screen: StartSession,
        navigationOptions: {
            title: 'Start Session',
        }
    },
    ViewStudentResponses: {
        screen: ViewStudentResponses,
        navigationOptions: {
            title: 'Student Responses',
        }
    },
    StudentViewMode: {
        screen: StudentUserDashboard,
        navigationOptions: {
            title: 'Student Mode',
        }
    },
    ProfQuestionList: {
        screen: ProfQuestionList,
        navigationOptions: {
            title: 'ProfQuestionList',
        }
    },
    ProfQuizScreen: {
        screen: ProfQuizScreen,
        navigationOptions: {
            title: 'Session Quiz',
        }
    },
    ViewStudentsForProf: {
        screen: ViewStudentsForProf,
        navigationOptions: {
            title: 'ViewStudentsForProf',
        }
    },
    ViewProfQuizSets: {
        screen: ViewProfQuizSets,
        navigationOptions: {
            title: 'ViewProfQuizSets',
        }
    },

    // INTERNAL SCREENS

    ProfViewMode: {
        screen: ProfessorUserDashboard,
        navigationOptions: {
            title: 'Professor Mode',
        }
    },
    IntGoToLogin: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        }
    },
    EditUserAccounts: {
        screen: EditUserAccounts,
        navigationOptions: {
            title: 'Edit Accounts',
        }
    },
    EditDatabase: {
        screen: EditDatabase,
        navigationOptions: {
            title: 'Edit Database',
        }
    },
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
});

export default createAppContainer(LoginStack);