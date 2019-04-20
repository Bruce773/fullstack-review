import RepoList from './components/RepoList.jsx';
import Search from './components/Search.jsx';
import Repos from './components/Repos.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  search(term) {
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: { user: term },
      // success: (result) => console.log(`${term} was searched`, result.data),
    });
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/repos',
      success: (result) => {
        result.data.forEach((item) => {
          this.setState((state) => ({
            repos: state.repos.concat(item),
          }));
        });
      },
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
        {this.state.repos.map((item) => {
          let { id, name, fork, created_at, html_url } = item;
          console.log(item);
          return (
            <Repos
              name={name}
              fork={fork}
              created_at={created_at}
              id={id}
              html_url={html_url}
            />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
