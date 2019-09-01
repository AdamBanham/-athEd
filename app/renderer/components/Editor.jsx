import React, { Component } from 'react';
import {editorText} from './EditorContext';
import './../styles/Editor.scss';

export default class Header extends Component {
    render() {
        let text = this.context;
        return (
            <div className="editor-container">
                <textarea className="editor">
                    {text}
                </textarea>
            </div>
        );
    }
}