import React from "react";
import {
    List,
    ListItem,
    Appear,
    Image,
    Heading
} from "spectacle";

class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="primary">
                    Redux Flow
                </Heading>
            </div>
        );
    }
}

/*
class Desc extends React.Component {
    render() {
        return (<div>
            <List textColor="secondary">
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Actions describing updates
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Dispatching action to the store
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Actions goes through all the middlewares
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Actions arrives at store
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Reducers apply the updates
                    </ListItem>
                </Appear>
            </List>
        </div>);
    }
} */

class Diagram extends React.Component {
    render() {
        return (
            <div>
                <Appear>
                    { /* eslint-disable */ }
                    <Image src={require("../../assets/redux-flow.png")} />
                    { /* eslint-enable */ }
                </Appear>
            </div>
        );
    }
}

export default {
    Intro,
    Diagram
};
