import React from 'react';
import './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItems = (props) => {
   return (
       <div className='dialogs__item'>
           <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
       </div>
   );
};

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map((d, i) => <DialogItems key={i} name={d.name} id={d.id} />);

    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                { dialogElements }
            </div>
        </div>
    );
};

export default Dialogs;