import React, {Component, Fragment} from "react";
import "antd/dist/antd.min.css";
import TransformTree from "./components/treeform/TreeTransform";

class App extends Component {
    render() {
        return (
            <Fragment>
                <TransformTree/>
            </Fragment>
        );
    }
}

export default App;

