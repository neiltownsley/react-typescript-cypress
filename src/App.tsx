import * as React from 'react';
import './App.css';
import Demo from './component/Demo';

class App extends React.Component {
  public render(): JSX.Element  {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React Typescript Cypress Boilerplate</h1>
            </header>
            <Demo />
        </div>
    );
  }
}

export default App;

