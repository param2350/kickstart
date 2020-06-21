import React, { Component } from 'react';
import { Form, Button, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3';

import { Router } from '../../routes';
class CampaignNew extends Component {

    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false,
        title: '',
        description: '',
        img: ''
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading: true, errorMessage:''})
        try {
            const accounts = await web3.eth.getAccounts()
            const deployed = await factory.methods.createCampaign(this.state.minimumContribution, this.state.title,this.state.description, this.state.img)
            .send({
                from: accounts[0]
        });

        Router.pushRoute('/')
        } catch (err) {
            this.setState({errorMessage: err.message})
        }
        this.setState({loading: false})


    };
     
    render() {
        return(

            <Layout>
                <h3>Create new Campaign</h3>
                <br></br>
                
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field >
                        <label>title</label>
                        <Input 
                            
                            labelPosition='right'
                            value = {this.state.title}
                            onChange = { event => this.setState({title: event.target.value})}>

                        </Input>  
                        <br></br>
                         <label>Minimum Contribution</label>
                        <Input label='wei' 
                            type="number"
                            labelPosition='right'
                            value = {this.state.minimumContribution}
                            onChange = { event => this.setState({minimumContribution: event.target.value})}>

                        </Input>  
                        <br></br>
                         <label>Description</label>
                        <Input 
                            labelPosition='right'
                            value = {this.state.description}
                            onChange = { event => this.setState({description: event.target.value})}>

                        </Input>  
                        <br></br>
                         <label>img</label>
                        <Input 
                            labelPosition='right'
                            value = {this.state.img}
                            onChange = { event => this.setState({img: event.target.value})}>

                        </Input>                       
                    </Form.Field>
                        <Message 
                            error
                            header="Oops!"
                            content={this.state.errorMessage} >

                        </Message>
                        <Button
                            loading={this.state.loading}
                            positive
                            disabled={this.state.loading}
                            type='submit'
                        > Create
                        </Button>
                </Form>

            </Layout>


        );
    }
}

export default CampaignNew;