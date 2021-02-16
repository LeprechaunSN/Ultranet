import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { initializeApp } from './redux/reducers/appReducer'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Messages from './components/Messages/Messages/Messages';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer />
                    <div className="wrapper">
                        <Navbar />
                        <main>
                            <Route path="/profile/:id?" render={() => <ProfileContainer />} />
                            <Route path="/messages" render={() => <Messages />} />
                            <Route path="/news" render={() => <News />} />
                            <Route path="/music" render={() => <Music />} />
                            <Route path="/settings" render={() => <Settings />} />
                            <Route path="/users" render={() => <UsersContainer />} />
                            <Route path="/login" render={() => <LoginContainer />} />
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return { initialized: state.app.initialized }
}

export default compose(
    connect(mapStateToProps, { initializeApp })
)(App);
