import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages/Messages';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="wrapper">
                    <Navbar />
                    <main>
                        <Route path="/profile" component={ Profile } />
                        <Route path="/messages" component={ Messages } />
                        <Route path="/news" component={ News } />
                        <Route path="/music" component={ Music } />
                        <Route path="/settings" component={ Settings } />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
