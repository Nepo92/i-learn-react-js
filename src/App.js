import './Settings.scss';
import classes from './App.module.scss';
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className={classes.socialNetwork}>
            <Header />
            <div className={classes.socialNetwork__content}>
                <Route exact path="/" render={() => <Profile profile={props.state.profile} newPostText={props.state.profile.newPostText} addPost={props.addPost} changePost={props.changePost} />} />
                <Route exact path="/messages" render={() => <Dialogs messages={props.state.messages} />}/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
