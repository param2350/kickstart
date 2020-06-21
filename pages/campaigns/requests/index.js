import React, { Component } from 'react';
import Layout from '../../../components/layout'
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/requestRow';

class RequestIndex extends Component {

    static async getInitialProps(props) {
        const  {address} = props.query;

        const campaign = Campaign(address);

        const requestCount = await campaign.methods.getRequestCount().call();

        const approversCount = await campaign.methods.approversCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call()
            })
        );

        console.log(requests);
        
        return { address, requests, requestCount, approversCount }

    }

    renderRows () {
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow
                    id= {index} 
                    request={request}
                    address={this.props.address}
                    approversCount={this.props.approversCount}
            
                >
                </RequestRow>
            )
        })
    }

    render() {

        const  { Header, Row, HeaderCell, Body} = Table;


        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button
                            primary
                            floated='right' style={{marginBottom:10}}>
                            new request
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                           <HeaderCell>Id</HeaderCell>
                           <HeaderCell>Description</HeaderCell>
                           <HeaderCell>Amount</HeaderCell>
                           <HeaderCell>Recipient</HeaderCell>
                           <HeaderCell>Approval</HeaderCell>
                           <HeaderCell>Approve</HeaderCell>
                           <HeaderCell>Finalize</HeaderCell>


                        </Row>
                    </Header>

                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <div> Found {this.props.requestCount} requests</div>
            </Layout>
        );
    }
}

export default RequestIndex;