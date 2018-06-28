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
                    Reducers
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
                        Reducers are responsible for applying the updates described in the actions
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        You can have a composed reducer which contains smaller reducers depending
                        on the dispatched actions (example here and talk about combinedReducers)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Reducers will receive the current state and the action and return the updated state
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        (prevState, action) => updatedState (code here)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Although you can have some processing here, to make the reducer cleaner and more readable
                        the logic should be in the action itself. The reducer should only be the applier.
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
                    <Code>Example of a reducer</Code>
                </Heading>
                <Appear>
                    { /* eslint-disable */ }
                    <CodePane
                        textSize="1.2rem"
                        lang="jsx"
                        source={require("raw-loader!../../assets/reducers01.example")}
                        margin="20px auto"
                        overflow = "overflow"
                    />
                    { /* eslint-enable */ }
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
