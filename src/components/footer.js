import React from 'react';
import { Segment,Message } from 'semantic-ui-react';


const Footer = props =>
  <Segment color={props.errorType==='Success'?'green':'red'} attached size='tiny' className='footer'>
    <Message error={props.errorType==='Failure'} success={props.errorType==='Success'}floating>
      <p>{props.error}</p>
    </Message>
  </Segment>

export default Footer;
