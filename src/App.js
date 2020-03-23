import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'N7EFRCTHH2',
  '7e5c39e35b1d13d0adedcf38336928de'
);

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            Airport Search
          </h1>
        </header>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="airports">
            <div className="left-panel">
              <ClearRefinements />
              <h2>Countries</h2>
              <RefinementList attribute="country" searchable="true" />
              <Configure hitsPerPage={8} />
            </div>
            <div className="search-panel right-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="city" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="country" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="iata_code" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
