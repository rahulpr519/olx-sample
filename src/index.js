import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/FirebaseContext';
import { FirebaseContest } from './store/FirebaseContext';
import firebase from './firebase/config'
ReactDOM.render(
    <FirebaseContest.Provider value={{firebase}}>
        <Context>
        <App />

        </Context>

    </FirebaseContest.Provider>

    , document.getElementById('root'));