/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <label>Search Video</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
