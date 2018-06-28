// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Deck,
    Heading,
    Slide
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import slides
import WhyRedux from "./slides/WhyRedux";
import ReduxStore from "./slides/ReduxStore";
import Immutability from "./slides/Immutability";
import Flow from "./slides/Flow";
import Actions from "./slides/Actions";
import Middlewares from "./slides/Middlewares";
import Reducers from "./slides/Reducers";
import UIData from "./slides/UIData";


// Require CSS
require("normalize.css");

const theme = createTheme({
    primary: "white",
    secondary: "#764abcff",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Leveling up your UI using redux
                    </Heading>
                </Slide>
                <Slide bgColor="primary">
                    <WhyRedux.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <WhyRedux.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <ReduxStore.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <ReduxStore.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <ReduxStore.Example01 />
                </Slide>
                <Slide bgColor="primary">
                    <Immutability.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Immutability.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Immutability.Example01 />
                </Slide>
                <Slide bgColor="primary">
                    <Flow.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Flow.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Flow.Diagram />
                </Slide>
                <Slide bgColor="primary">
                    <Actions.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Actions.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Actions.Example01 />
                </Slide>
                <Slide bgColor="primary">
                    <Middlewares.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Middlewares.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Middlewares.Example01 />
                </Slide>
                <Slide bgColor="primary">
                    <Reducers.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Reducers.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Reducers.Example01 />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.BuildStore />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.Connect />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.Selectors />
                </Slide>
            </Deck>
        );
    }
}
