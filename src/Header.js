import React, {Fragment, useState} from "react";

export const Header = ({children, onAdd}) => {
    const [inputValue, setInputValue] = useState('');
    const onChange = event => setInputValue(event.target.value);
    const onClick = () => {
        onAdd(inputValue);
        setInputValue('');
    };
    return(
        <Fragment>
            <div className="header">{children}</div>
            <div>
                <input value={inputValue} onChange={onChange}/>
                <button onClick={onClick}>Add</button>
            </div>
        </Fragment>
    );
};

