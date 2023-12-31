import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import TodoClass from './components/TodoClass';
import Todo from './components/Todo';
import Counter from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
}