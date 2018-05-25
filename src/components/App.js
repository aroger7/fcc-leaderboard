import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #e0e0e0;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Body usersApiRoot={this.props.usersApiRoot} />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
