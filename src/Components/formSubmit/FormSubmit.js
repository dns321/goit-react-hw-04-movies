import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class FormSubmit extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Serch movies"
            value={query}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={() =>
              this.props.history.push({
                pathname: this.props.location.pathname,
                search: `query=${query}`,
              })
            }
          >
            Search
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(FormSubmit);
