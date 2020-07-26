import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter history={window.routerHistory}>
            <div className='app-wrapper'>
                <Header />
                <div className='all_content d_flex'>
                    <Sidebar sidebar={props.state.sidebar} />
                    <div className='content'>

                        <Route path='/dialogs' render={() => <Dialogs dialog={props.state.dialogsPage} dispatch={props.dispatch} />} />

                        <Route path='/profile' render={() => <Profile profile={props.state.profilePage} dispatch={props.dispatch} />} />

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;