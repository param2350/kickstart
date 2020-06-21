import React, { Component } from "react";
import { Form, Input, Message, Button, Loader } from "semantic-ui-react";
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
class ContributeForm extends Component {

  state = {
      value: '',
      loading: false,
      errorMessage: ''
  }


  onSubmit =  async event => {
      event.preventDefault();
      console.log(this.props.address);
      const campaign = Campaign(this.props.address);
    
      this.setState({loading: true});
      this.setState({errorMessage:''});

      try {
         
        const accounts =  await web3.eth.getAccounts();
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
        });

       
      }
      catch (err) {
        this.setState({loading:false});
        this.setState({errorMessage: err.message });
        console.log(err)
      }

      this.setState({loading:false});
      Router.replaceRoute(`/campaigns/${this.props.address}`);
     
  }


  render() {
    return (
      <Form onSubmit={this.onSubmit} error  ={!!this.state.errorMessage}>
          
        <Form.Field >
          <label>Amount to Contribute</label>          
          <Input placeholder="ether" 
          value={this.state.values}
          onChange={ event => this.setState({value: event.target.value })}
          labelPosition="right"></Input>
        </Form.Field>
        <Button 
            loading={this.state.loading}
            type='submit'
            primary>Contribute
        </Button>
        <Message error header="oops!" content={this.state.errorMessage}></Message>
      </Form>
    );
  }
}

export default ContributeForm;
