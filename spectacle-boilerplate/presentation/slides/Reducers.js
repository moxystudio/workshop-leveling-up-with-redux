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
                        Responsible for applying the updates described in the actions
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        Reducers will receive the current state and the action and return the updated state
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        (prevState, action) => updatedState (code here)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        The reducer should only be the applier. The processing logic should be inherent to the action.
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

class AdvancedDesc extends React.Component {
    render() {
        return (<div>
            <List textColor="secondary">
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Reducers can be composed by smaller reducers, each one associated with a set of
                        actions (using combinedReducers)
                    </ListItem>
                </Appear>
            </List>
        </div>);
    }
}

class Example02 extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>Example of a combined reducer</Code>
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
    Example01,
    AdvancedDesc,
    Example02
};
