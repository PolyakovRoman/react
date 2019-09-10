import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let messageAndDialogItems = {
    messages: [
        {text: 'сшшбщение 3', date: '20.05.18', dialog: 1},
        {text: 'сшшбщение 2', date: '20.05.18', dialog: 1},
        {text: 'сшшбщение 1', date: '20.05.18', dialog: 2},
        {text: 'сшшбщение 0', date: '20.05.18', dialog: 3}
    ],
    dialogs: [
        {id: 1, name: 'Роман'},
        {id: 2, name: 'Павел'},
        {id: 3, name: 'Влад'}
    ]
};

ReactDOM.render(<App messageAndDialogItems={messageAndDialogItems} />, document.getElementById('root'));