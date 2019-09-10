import React from 'react';
import './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {
    return (
        <div className='messages'>
            <Dialogs dialogs={props.data.dialogs} />
            <Dialog messages={props.data.messages} />
        </div>
    );
};

export default Messages;