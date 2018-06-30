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
                        Apps are more and more complex nowadays
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        We need to trigger some event with the change of something
                        in the component that is a sibling of the father of the three
                        children that contains the father of our component (if you have
                        lost yourself reading this, imagine doing all this logic
                        with component state and callbacks)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        We need some place to store and manage our data coming from a server (API calls, server-rendering)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        We need to differentiate data that hasn’t been persisted to the server yet (optimistic updates for instance)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textSize="34" margin="20px 0">
                        We need predictability
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
