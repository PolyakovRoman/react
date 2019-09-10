import React from 'react';
import './Dialog.module.css';

const DialogItem = (props) => {
    return (
        <div className='dialog__item'>
            <span className='dialog__date'>{props.date}</span> {props.text}
        </div>
    );
};

const Dialog = (props) => {

    let messageElements = props.messages.map( (m, i) => <DialogItem key={i} text={m.text} date={m.date}/>);

    return (
        <div className='dialog'>
            <div className='dialog__items'>
                { messageElements }
            </div>
            <div className='dialog__add-message'>
                <textarea></textarea>
                <button>Оправить</button>
            </div>
        </div>
    );
};

export default Dialog;