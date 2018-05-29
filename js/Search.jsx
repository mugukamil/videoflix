// @flow
import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

type Props = {
  shows: Array<Show>
};

type State = {
  searchTerm: string
};

class Search extends Component<Props, State> {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = (event: InputEvent) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
