import React, { Component } from 'react';
import Footer from './footer';
import Editor from './editor';
import lambdalebab from 'lambdalebab';
import { Grid } from 'semantic-ui-react';

class Core extends Component {

  state = {
    input:'//Enter λ expressions to convert',
    output:'//Enter functions expressions to convert',
    err:'If something goes wrong, see here for details'
  }

  transpile = event=>{
    let code = event;
    try{
      this.setState({
        input:code,
        output:window.Babel.transform(code,{presets:['es2015','react']}).code,
        err:'All Good',
        errType:'Success'
      })
    }catch(e){
      this.setState({
        input:code,
        err:e.message,
        errType:'Failure'
      })
    }
  }

  detranspile = event=>{
    let code = event;
    try{
      this.setState({
        input:lambdalebab.transform(code,['arrow']).code,
        output:code,
        err:'All Good',
        errType:'Success'
      })
    }catch(e){
      this.setState({
        output:code,
        err:e.message,
        errType:'Failure'
      })
    }
  }

  render() {
    return(
      <div className='core'>
        <Grid columns={2} stretched className='codecontainer'>
          <Grid.Row>
            <Grid.Column>
              <Editor
                value={this.state.output}
                changeEmitter={this.detranspile}/>
            </Grid.Column>
            <Grid.Column>
              <Editor
                value={this.state.input}
                changeEmitter={this.transpile}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer error={this.state.err} errorType={this.state.errType}/>
      </div>
    )
  }
}

export default Core;
