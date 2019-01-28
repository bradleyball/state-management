import React, { Component } from "react";

const WithCount = WrappedComponent =>
  class extends Component {
    state = { count: 0 };
    increment = () => {
      this.setState(state => ({ count: state.count + 1 }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onIncrement={this.increment}
          {...this.props}
        />
      );
    }
  };
