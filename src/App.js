import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    data: this.props.schema
  };

  render() {
    const { data } = this.state;

    console.log(data);
    
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
