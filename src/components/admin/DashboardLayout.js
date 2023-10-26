import React from "react";
import {ConnectedLayout, DashBoardHook} from "Hook/DashBoardHook";
import Login from "../Login/Login";

export class DashBoardLayout extends React.Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }
    state = {
        userToken: false,
        isConnected: false,
    }

    handler(value) {
        this.setState({
            isConnected: value
        })
    }

    componentDidMount() {
        this.setState({userToken: this.props.token});
        this.setState({isConnected: this.props.isConnected});
    }

    render() {
        return <>
            {this.state.isConnected && (
                <ConnectedLayout isLogin={this.state.isConnected}/>
            )}

            {!this.state.isConnected && (
                <Login setIsConnected={this.handler}/>
                /* <ConnectedLayout setIsConnected={this.handler} isLogin={this.state.isConnected}/>*/
            )}
        </>
    }

}