import React from 'react';

export const textFile = {
    fileOne: {
      text: 'test1',
      background: '#eeeeee',
    },
    FileTwo: {
      text: 'test2',
      background: '#222222',
    },
  };

export const editorContext = React.createContext(
    textFile.fileOne);
    //toggleTheme: () => {},
    //} // default value
  //);