import React, { Component } from "react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/contributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      address,
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description: "The manager has created this campaign",
        style: { overflowWrap: "break-word" }
      },

      {
        header: minimumContribution,
        meta: "minimumContribution wei",
        description: "You must contribute this much wei to become an approver"
      },

      {
        header: requestsCount,
        description: "A request tries to withdraw money from the contracts",
        meta: "Number of Requests"
      },

      {
        header: approversCount,
        meta: "Number of Aprrovers",
        description: "Number of people who have already donated to the campaign"
      },

      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign balance (wei)",
        description: "Amount of money left to spend"
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
          <Grid.Column width={10}>
            {this.renderCards()}           
          </Grid.Column>

          <Grid.Column width={6}>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
              <Grid.Column width={6}>
              <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
              </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;

