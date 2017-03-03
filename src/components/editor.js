import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';


const Editor = props =>
  <AceEditor
    width='100%'
    mode='javascript'
    theme='monokai'
    showPrintMargin={false}
    value={props.value}
    onChange={props.changeEmitter}/>

export default Editor;
