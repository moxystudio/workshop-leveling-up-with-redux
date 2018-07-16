// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Deck,
    Slide
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import images from './getImages';
preloader(images);

// Import slides
import Cover from "./slides/Cover";
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
                <Slide transition={["spin"]} bgImage={images.thinking.replace("/", "")} bgDarken={0.75}>
                    <WhyRedux.Intro />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <WhyRedux.Desc />
                </Slide>
                <Slide bgColor="secondary">
                    <Immutability.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Immutability.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Immutability.Example01 />
                </Slide>
                <Slide transition={["spin"]} bgImage={images.data.replace("/", "")} bgDarken={0.75}>
                    <ReduxStore.Intro />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <ReduxStore.Desc />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <ReduxStore.Example01 />
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Flow.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Flow.Diagram />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Actions.Intro />
                </Slide>
                <Slide bgColor="primary">
                    <Actions.Desc />
                </Slide>
                <Slide bgColor="primary">
                    <Actions.Example01 />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
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
                <Slide transition={["slide"]} bgColor="primary">
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
                <Slide transition={["slide"]} bgColor="secondary">
                    <UIData.Intro />
                </Slide>
                <Slide bgImage={images.app.replace("/", "")} bgDarken={0.75}>
                    <UIData.Desc />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <UIData.BuildStoreIntro />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.BuildStoreDesc />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.BuildStoreExample />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.ProviderExample />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <UIData.ConnectIntro />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.ConnectDesc />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.ConnectExample />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <UIData.SelectorsIntro />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.SelectorsDesc />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.SelectorsExample />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <UIData.AdvancedSelectorsIntro />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.AdvancedSelectorsDesc />
                </Slide>
                <Slide bgColor="primary">
                    <UIData.AdvancedSelectorsDemo />
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Coding />
                </Slide>
            </Deck>
        );
    }
}
