import React, { Component } from 'react';
import editorContext, { textFile } from './EditorContext';
import './../styles/Editor.scss';

export default class Editor extends Component {
    render() {
        let context = this.context;
        return (
            <div className="editor-container">
                {/* <textarea className="editor">
                    <editorContext.Consumer>
                    {({textFile, toggleTheme}) => (
                        <p
                        onClick={toggleTheme}>
                        {textFile.text}
                        </p>
                        )}
                    </editorContext.Consumer>
                </textarea> */}
                {/* <editorContext.Consumer>{(textFile) =>{
                    return(<textarea className="editor" value={textFile.text}/>);
                }}
                </editorContext.Consumer> */}
                <p>{context.text}</p>
                <textarea className="editor">

                </textarea>

            </div>
        );
    }
}
Editor.contextType = editorContext;