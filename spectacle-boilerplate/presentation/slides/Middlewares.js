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
                    Middlewares
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
                        Every dispatched action will go through the middlewares
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Middlewares listen to all the actions and process those that you want them to
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Very helpful for logging
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Amazing to react to a certain action.
                        Example: After a successful login you want to load all the user’s info.
                        Instead of doing it in a component which is susceptible to some kind of fail,
                        you can simply listen to the successful login action and dispatch a load user info action upon receiving it.
                        This way, you are transferring that logic into a middleware which makes your component cleaner and more reliable.
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
                    <Code>Do something upon login</Code>
                </Heading>
                <Appear>
                    { /* eslint-disable */ }
                    <CodePane
                        textSize="1.2rem"
                        lang="jsx"
                        source={require("raw-loader!../../assets/middlewares01.example")}
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
