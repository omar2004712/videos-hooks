/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <label>Search Video</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
