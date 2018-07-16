import React from "react";
import {
    S,
    Code,
    List,
    Link,
    Appear,
    Heading,
    CodePane,
    ListItem,
    Text
} from "spectacle";

/* eslint-disable */

class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="primary">
                    Relation between UI and Data
                </Heading>
            </div>
        );
    }
}

class Desc extends React.Component {
    render() {
        return (<div>
            <Appear>
                <Text textColor="primary">
                    What do we need to have redux working with our app?
                </Text>
            </Appear>
        </div>);
    }
}

class BuildStoreIntro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                    Build the store
                </Heading>
            </div>
        );
    }
}

class BuildStoreDesc extends React.Component {
    render() {
        return (
            <div>
                <List textColor="secondary">
                    <Appear>
                        <ListItem textSize="34px">
                            Create the redux store that holds the state of the app
                        </ListItem>
                    </Appear>
                    <Appear>
                        <div>
                            <CodePane
                                textSize="1.2rem"
                                lang="jsx"
                                source={require("raw-loader!../../assets/buildStore01.example")}
                                margin="20px 40px 20px 20px"
                                overflow = "scroll" />
                        </div>
                    </Appear>
                    <Appear>
                        <Text textSize="24px" margin="20px 46px">
                            <Text textColor="quaternay">
                                ☞ reducer
                            </Text>
                            is the function that returns the next state tree upon receiving the
                            current state and the action
                        </Text>
                    </Appear>
                    <Appear>
                        <Text textSize="24px" margin="20px 46px">
                            <Text textColor="quaternay">
                                ☞ preloadedState
                            </Text>
                            is the initial state where we can hydrate the state
                            from the server or restore a previously serialized state
                        </Text>
                    </Appear>
                    <Appear>
                        <Text textSize="24px" margin="20px 46px">
                            <Text textColor="quaternay">
                                ☞ enhancer
                            </Text>
                            is capability to enhance the store by adding middlewares, time travel, persistance
                        </Text>
                    </Appear>
                </List>
            </div>
        );
    }
}

class BuildStoreExample extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>buildStore example</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/buildStore02.example")}
                            margin="20px auto"
                            height="60vh"
                            overflow = "scroll" />
                    </div>
                </Appear>
            </div>
        );
    }
}

class ProviderExample extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>Add store to the app</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/buildStore03.example")}
                            margin="20px auto"
                            height="60vh"
                            overflow = "scroll" />
                    </div>
                </Appear>
            </div>
        );
    }
}

class ConnectIntro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                    Connect
                </Heading>
            </div>
        );
    }
}

class ConnectDesc extends React.Component {
    render() {
        return (
            <div>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/connect01.example")}
                            margin="40px 0"
                            overflow = "overflow" />
                    </div>
                </Appear>
                <List textColor="secondary">
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            Connects a component to a redux store
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            Returns a new connected component
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            Shallow compares to avoid re-renders
                        </ListItem>
                    </Appear>
                    <Appear>
                        <S type="underline" margin="50px">
                            <Link type="underline" href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options">
                                ✍ documentation
                            </Link>
                        </S>
                    </Appear>
                </List>
            </div>
        );
    }
}

class ConnectExample extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>connect example</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/connect02.example")}
                            margin="20px auto"
                            overflow = "overflow" />
                    </div>
                </Appear>
            </div>
        );
    }
}

class SelectorsIntro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                    Use Selectors
                </Heading>
            </div>
        );
    }
}

class SelectorsDesc extends React.Component {
    render() {
        return (
            <div>
                <List textColor="secondary">
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            Selectors can compute derived data
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            Selectors are not recomputed unless one of its arguments changes (memoization)
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            Selectores can be used as input for other selectors
                        </ListItem>
                    </Appear>
                </List>
            </div>
        );
    }
}

class SelectorsExample extends React.Component {
    render() {
        return (
            <div>
                <Heading size={3} lineHeight={1} textColor="quaternary" margin="20px 0">
                    <Code>selectors example</Code>
                </Heading>
                <Appear>
                    <div>
                        <CodePane
                            textSize="1.2rem"
                            lang="jsx"
                            source={require("raw-loader!../../assets/selectors01.example")}
                            margin="20px auto"
                            overflow = "overflow" />
                    </div>
                </Appear>
            </div>
        );
    }
}

class AdvancedSelectorsIntro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                    Advanced Selectors
                </Heading>
            </div>
        );
    }
}

class AdvancedSelectorsDesc extends React.Component {
    render() {
        return (
            <div>
                <List textColor="secondary">
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            What happens if two components use the same selector to fetch data from the state?
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem textSize="34px" margin="20px 0">
                            How can we perform per instance memoization?
                        </ListItem>
                    </Appear>
                </List>
            </div>
        );
    }
}

class AdvancedSelectorsDemo extends React.Component {
    render() {
        return (
            <div>
                <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="15% 0">
                    <Text textColor="secondary" >DEMO TIME! 😱</Text>
                </Heading>
            </div>
        );
    }
}

export default {
    Intro,
    Desc,
    BuildStoreIntro,
    BuildStoreDesc,
    BuildStoreExample,
    ProviderExample,
    ConnectIntro,
    ConnectDesc,
    ConnectExample,
    SelectorsIntro,
    SelectorsDesc,
    SelectorsExample,
    AdvancedSelectorsIntro,
    AdvancedSelectorsDesc,
    AdvancedSelectorsDemo,
};

/* eslint-enable */
