import React from 'react';
import Expenditure from "./components/Expenditures.component";

class App extends React.Component {
  render() {
    return (
      <div className="bg-purple-taupe">
        <Expenditure/>
      </div>
    );
  }
}

export default App;
