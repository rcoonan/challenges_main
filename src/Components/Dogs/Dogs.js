import React from 'react';
import { Container } from 'reactstrap';

const Dogs = (props) => {

  return (
    <div>
      <Container className="App">
        <img src={props.url} alt="doggo" />
      </Container>
    </div>
  );

}

export default Dogs;
