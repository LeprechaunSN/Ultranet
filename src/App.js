import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <Navbar />
                <main>

                </main>
            </div>
        </div>
    );
}

export default App;
