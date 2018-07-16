import React from "react";
import {
    Code,
    List,
    ListItem,
    CodePane,
    Appear,
    Heading
} from "spectacle";


class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="primary">
                    Redux Store
                </Heading>
            </div>
        );
    }
}

class Desc extends React.Component {
    render() {
        return (<div>
            <List textColor="secondary">
                <Appear>
                    <ListItem textSize="34px" margin="20px 0">
                        Object holding the application state
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34px" margin="20px 0">
                        Provides a getState function for reading the state
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34px" margin="20px 0">
                        Provides a dispatch function for dispatching actions that update the state
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34px" margin="20px 0">
                        Provides a subscribe and unsubscribe listener
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34px" margin="20px 0">
                        Can be split with the use of reducers and combineReducers function
                    </ListItem>
                </Appear>
            </List>
        </div>);
    }
}

class Example01 extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>Redux Store</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/redux-store01.example")}
                            margin="20px auto"
                            overflow = "overflow" />
                    </div>
                </Appear>
            </div>
        );
    }
}

export default {
    Intro,
    Desc,
    Example01
};
