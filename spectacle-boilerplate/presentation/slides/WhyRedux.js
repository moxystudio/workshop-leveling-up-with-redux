import React from "react";
import {
    List,
    ListItem,
    Appear,
    Heading
} from "spectacle";


class Intro extends React.Component {
    render() {
        return (
            <div>
                <Heading size={2} lineHeight={1} caps fit textColor="secondary">
                Why Redux
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
                        Apps are getting more and more complex
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="24" margin="20px 46px">
                        We need to trigger an event with a state change in the component, which is a sibling of the father
                        of the three children that contains the father of our component
                        (Lost yourself reading this? imagine doing all this logic with component state and callbacks)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Need to store and manage our data coming from a server (API calls, server-rendering)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Need to differentiate data, which hasn’t been persisted to the server yet (eg. optimistic updates)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        Need predictability
                    </ListItem>
                </Appear>
            </List>
        </div>);
    }
}

export default {
    Intro,
    Desc
};
