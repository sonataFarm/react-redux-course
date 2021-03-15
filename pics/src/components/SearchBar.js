import React from 'react';

class SearchBar extends React.Component {
  state = { query: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  }

  onInputChange(e) {
    console.log('hi')
    this.setState({ query: e.target.value });
  }

  onInputClick() {
    console.log('Input was clicked');
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              name="query"
              type="text"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
