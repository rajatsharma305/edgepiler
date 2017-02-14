import React, { Component } from 'react';
import Footer from './footer.js';
import Prism from 'prismjs';
import '../prism.css';

class Core extends Component {
  constructor(){
    super();
    this.state = {
      input:'/* Enter ES6 Here */',
      output:'',
      err:'If something goes wrong, see here for details'
    }
  }

  transpile(e){
    let code = e.target.value;
    try{
      this.setState({
        output:Prism.highlight(window.Babel.transform(code,{presets:['es2015','react']}).code, Prism.languages.javascript),
        err:''
      })
    }catch(e){
      this.setState({
        err:e.message
      })
    }
  }

  render() {
    return(
      <div>
        <div className="container">
          <textarea
            onChange={this.transpile.bind(this)}
            defaultValue={this.state.input}/>
          <pre>
            <code className="language-javascript" dangerouslySetInnerHTML={{
              __html: this.state.output
            }}/>
          </pre>
        </div>
        <Footer error={this.state.err}/>
      </div>
    )
  }
}

export default Core;
