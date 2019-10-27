import React, {useState} from 'react';
import {render} from 'react-dom';
import './index.css';
import {Clock} from "./Clock";
import { Body } from "./Body";
import {Header} from "./Header";

const App = () => {
    const [app, setApp] = useState({todos: ['first', 'second', 'third'], showClock: true});
    const onAdd = todo => setApp({...app, todos:[...app.todos, todo]});
    const onSwitch = () => setApp({...app, showClock: !app.showClock});

    return(
        <div className="app">
            <Header onAdd = {onAdd}>"This is our ToDo !!!"</Header>
            <Body todoList={app.todos}/>
            <button onClick={onSwitch}>Turn Clock {app.showClock ? 'off': 'on'}</button>
            {app.showClock && <Clock onSwitch = {onSwitch}/>}
        </div>
    );
};

render(<App />, document.getElementById('root'))

