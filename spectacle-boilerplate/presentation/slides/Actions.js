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
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                    Actions
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
                    <ListItem textSize="34" margin="20px 0">
                        Describe updates.
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Contain a type and a payload
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        Type must be self explanatory
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        Payload contains the changes the action will trigger
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Async actions (redux-thunk to be apple to use getState and dispatch)
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
                    <Code>Action example</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/actions01.example")}
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
