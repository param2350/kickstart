import React from 'react';
import Header from './header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

if(typeof window != 'undefined') {
    setTimeout(_ => {
        if(window.ethereum){
          console.log("hey");
        
          try {
            window.ethereum.enable().then(function() {
        
              console.log('ethereum enable');
            });
        
          }
          catch(e) {
            console.log(e)
          }
        }
        
        else {
          alert('You have to install Metmask!')
        }
      }, 5000);
      
}

export default props => {

    return (
        <Container>
   
          
            <br></br>

            <Head>
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
      
            </Head>

            <Header></Header>
            <br></br>

            { props.children }


        </Container>

    );

};