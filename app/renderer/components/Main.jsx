import React, { Component } from 'react';
import './../styles/Main.scss';

import Header from './Header';
import Editor from './Editor';
import Sidebar from './Sidebar';
import Terminal from './Terminal';
import {editorContext,textFile} from './EditorContext';


export default class Main extends Component {
    constructor(props){
        super(props);
    this.toggleFile = () => {
        this.setState(state => ({
            textFile :
                state.textFile === textFile.FileTwo
                ? textFile.fileOne
                : textFile.FileTwo,
        }));
    };
    this.state = {
        textFile: textFile.FileTwo,
        toggleFile: this.toggleTheme,
      };
}
    render() {
        return (
            <div className="container">
                <Header />
                <div className="sub-container">
                <editorContext.Provider value={this.state.textFile}>
                    <Sidebar />
                    <div className="deep-container">
                        <Editor />
                        <Terminal />
                    </div>
                </editorContext.Provider>
                </div>
            </div>
        );
    }
}