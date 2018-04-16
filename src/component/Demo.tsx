
import * as React from 'react';
import {JavascriptComponent} from "../JavascriptComponent";
export interface IAppState {
    message: string;
}

class Demo extends React.Component<any, IAppState> {

    constructor(props?: {}) {
        super(props);
        this.state = {message: "Do not press the button!"}
    }

    public changeMessage = (): void => {
        this.setState({message: "Boom!!"});
    };

    public render(): JSX.Element  {
        return (
            <div>
                <p id="appIntro" className="App-intro">
                    This is a proof of concept Application.
                </p>
                <button id="actionBtn" onClick={this.changeMessage}>Button</button>
                <p id="actionMessage">{this.state.message}</p>
                <JavascriptComponent />
            </div>
        );
    }

}

export default Demo;