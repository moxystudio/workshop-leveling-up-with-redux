import React from "react";
import {
    Layout,
    Link,
    Text,
    Heading
} from "spectacle";


class Cover extends React.Component {
    render() {
        return (
            <div>
                <Heading size={1} fit caps lineHeight={1} textColor="primary">
                    Leveling up your
                </Heading>
                <Heading size={1} fit caps lineHeight={1} textColor="primary" margin="0 0 40px 0">
                    UI using redux 🚀
                </Heading>
                <Layout>
                    <Text textSize="24" textAlign="right" textColor="primary">
                        Rui Neves
                    </Text>
                    <Text textSize="24" textAlign="right" textColor="primary">
                        Vasco Santos
                    </Text>
                </Layout>
                <Layout>
                    <Text textSize="18" textAlign="right" textColor="quintenary">
                        <Link href="https://github.com/ruipneves" textColor="quintenary">
                            @ruipneves
                        </Link>
                    </Text>
                    <Text textSize="18" textAlign="right" textColor="quintenary">
                        <Link href="https://github.com/vasco-santos" textColor="quintenary">
                            @vasco-santos
                        </Link>
                    </Text>
                </Layout>
                <Layout>
                    <Text textSize="18" textAlign="right" textColor="primary">
                        Software Engineer
                        <Link href="https://github.com/moxystudio" margin="0 3px" bold textColor="primary">
                            @moxystudio
                        </Link>
                    </Text>
                    <Text textSize="18" textAlign="right" textColor="primary">
                        Software Engineer
                        <Link href="https://github.com/moxystudio" margin="0 3px" bold textColor="primary">
                            @moxystudio
                        </Link>
                    </Text>
                </Layout>
            </div>
        );
    }
}

export default Cover;
