import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/layout";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    /* get called before component get render to screen */
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    console.log(campaigns);

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(async (address) => {
      const c = await Campaign(address);

      details = await c.methods.getDetails().call();

      console.log(details);

      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaigns</a>
          </Link>
        ),
      };
    });

    return <Card.Group className="col-md-6" items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <br></br>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <a href="/campaigns/0x02c7478376Ff86FdD3D9CA719a8D6504b40bC248">
                <div class="ui card">
                  <div class="image">
                    <img
                      src="https://netdna.coolthings.com/wp-content/uploads/2019/05/EpiWear-syringe-watch-360x240.jpg"
                      width="300px"
                      height="150px"
                    />
                  </div>
                  <div class="content">
                    <div class="header">Matthew</div>
                    <div class="description">
                      Matthew is a musician living in Nashville.
                    </div>
                  </div>
                </div>
              </a>
            </Grid.Column>
            <Grid.Column width={5}>
              <a href="/campaigns/0x02c7478376Ff86FdD3D9CA719a8D6504b40bC248">
                <div class="ui card">
                  <div class="image">
                    <img
                      src="https://i1.wp.com/www.prophethacker.com/wp-content/uploads/2016/12/Mavic_Pro_2.0.jpg?ssl=1"
                      width="300px"
                      height="150px"
                    />
                  </div>
                  <div class="content">
                    <div class="header">Matthew</div>
                    <div class="description">
                      Matthew is a musician living in Nashville.
                    </div>
                  </div>
                </div>
              </a>
            </Grid.Column>
            <Grid.Column width={5}>
              <a href="/campaigns/0x02c7478376Ff86FdD3D9CA719a8D6504b40bC248">
                <div class="ui card">
                  <div class="image">
                    <img
                      src="https://s3.wp.wsu.edu/uploads/sites/609/2019/07/DJI-Phantom-3-drone-1188x792.jpg"
                      width="300px"
                      height="150px"
                    />
                  </div>
                  <div class="content">
                    <div class="header">Matthew</div>
                    <div class="description">
                      Matthew is a musician living in Nashville.
                    </div>
                  </div>
                </div>
              </a>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
              <a href="/campaigns/0x02c7478376Ff86FdD3D9CA719a8D6504b40bC248">
                <div class="ui card">
                  <div class="image">
                    <img
                      src="https://beebom.com/wp-content/uploads/2018/12/hoversurf.jpg"
                      width="300px"
                      height="150px"
                    />
                  </div>
                  <div class="content">
                    <div class="header">Matthew</div>
                    <div class="description">
                      Matthew is a musician living in Nashville.
                    </div>
                  </div>
                </div>
              </a>
            </Grid.Column>
            <Grid.Column width={5}>
              <a href="/campaigns/0x02c7478376Ff86FdD3D9CA719a8D6504b40bC248">
                <div class="ui card">
                  <div class="image">
                    <img
                      src="https://i.pinimg.com/originals/99/e8/c2/99e8c263e69d783af06f6ca7e5cb39b9.jpg"
                      width="300px"
                      height="150px"
                    />
                  </div>
                  <div class="content">
                    <div class="header">Matthew</div>
                    <div class="description">
                      Matthew is a musician living in Nashville.
                    </div>
                  </div>
                </div>
              </a>
            </Grid.Column>
            <Grid.Column width={5}>
              <a href="/campaigns/0x02c7478376Ff86FdD3D9CA719a8D6504b40bC248">
                <div class="ui card">
                  <div class="image">
                    <img src="https://i.ytimg.com/vi/lFhBvkMK0b4/maxresdefault.jpg" width="300px" height="150px" />
                  </div>
                  <div class="content">
                    <div class="header">Matthew</div>
                    <div class="description">
                      Matthew is a musician living in Nashville.
                    </div>
                  </div>
                </div>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        ;
      </Layout>
    );
  }
}

export default CampaignIndex;
