// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Heading,
    Layout,
    Text,
    Slide
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import slides
import Cover from "./slides/Cover"
import WhyRedux from "./slides/WhyRedux";
import ReduxStore from "./slides/ReduxStore";
import Immutability from "./slides/Immutability";
import Flow from "./slides/Flow";
import Actions from "./slides/Actions";
import Middlewares from "./slides/Middlewares";
import Reducers from "./slides/Reducers";
import UIData from "./slides/UIData";
import Coding from "./slides/Coding";


// Require CSS
require("normalize.css");

const theme = createTheme({
    primary: "white",
    //secondary: "#764abcff",
    secondary: "#2932d3",
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
                    <Cover />
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
                    <Middlewares.Usage />
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
                    <Reducers.AdvancedDesc />
                </Slide>
                <Slide bgColor="primary">
                    <Reducers.Example02 />
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
                <Slide bgColor="primary">
                    <UIData.AdvancedSelectors />
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Coding />
                </Slide>
            </Deck>
        );
    }
}
