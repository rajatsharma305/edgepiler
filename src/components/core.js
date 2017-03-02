import React, { Component } from 'react';
import Footer from './footer.js';
import AceEditor from 'react-ace';
import Lebab from 'lebab';
import '../prism.css';


import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Core extends Component {
  constructor(){
    super();
    this.state = {
      input:'/* Enter ES6 Here */',
      output:'',
      err:'If something goes wrong, see here for details'
    }
  }

  transpile(event){
    let code = event;
    try{
      this.setState({
        input:code,
        output:window.Babel.transform(code,{presets:['es2015','react']}).code,
        err:''
      })
    }catch(e){
      this.setState({
        input:code,
        err:e.message
      })
    }
  }

  detranspile(event){
    let code = event;
    try{
      this.setState({
        input:Lebab.transform(code,['let', 'arrow']).code,
        output:code,
        err:''
      })
    }catch(e){
      this.setState({
        output:code,
        err:e.message
      })
    }
  }

  render() {
    return(
      <div>
        <div className="container">
          <AceEditor
            height='78vh'
            width='50%'
            mode='javascript'
            theme='monokai'
            showPrintMargin={false}
            value={this.state.input}
            onChange={this.transpile.bind(this)}/>
          <AceEditor
            height='78vh'
            width='50%'
            mode='javascript'
            theme='github'
            showPrintMargin={false}
            value={this.state.output}
            onChange={this.detranspile.bind(this)}/>
        </div>
        <Footer error={this.state.err}/>
      </div>
    )
  }
}

export default Core;
