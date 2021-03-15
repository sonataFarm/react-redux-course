import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [ term, setTerm ] = useState('');
  const [ results, setResults ] = useState([]);

  useEffect(() => {
    if (!term) return;

    const search = async () => {
      console.log('searched!')
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResults(response.data.query.search);
    };

    const timeoutId = setTimeout(search, 100);

    return () => clearTimeout(timeoutId);
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <div dangerouslySetInnerHTML={{ __html: result.snippet }}>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search-term">Search:</label>
          <input className="input" value={term} onChange={e => setTerm(e.target.value) }/>
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
