import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { Container } from "./doc-elements";
import { TokensTable } from "./tokens-table";

type Component = typeof Button.Default;

const meta: Meta<Component> = {
    title: "Selection and input/Button/Base",
    component: Button.Default,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button.Large>Large</Button.Large>
                    <Button.Large styleType="secondary">Secondary</Button.Large>
                    <Button.Large styleType="light">Light</Button.Large>
                    <Button.Large styleType="link">Link</Button.Large>
                    <Button.Large disabled>Disabled</Button.Large>
                </Container>
                <Container>
                    <Button.Default>Default</Button.Default>
                    <Button.Default styleType="secondary">
                        Secondary
                    </Button.Default>
                    <Button.Default styleType="light">Light</Button.Default>
                    <Button.Default styleType="link">Link</Button.Default>
                    <Button.Default disabled>Disabled</Button.Default>
                </Container>
                <Container>
                    <Button.Small>Small</Button.Small>
                    <Button.Small styleType="secondary">Secondary</Button.Small>
                    <Button.Small styleType="light">Light</Button.Small>
                    <Button.Small styleType="link">Link</Button.Small>
                    <Button.Small disabled>Disabled</Button.Small>
                </Container>
            </>
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button.Large loading>Large</Button.Large>
                    <Button.Large styleType="secondary" loading>
                        Loading
                    </Button.Large>
                    <Button.Large styleType="light" loading>
                        Loading
                    </Button.Large>
                    <Button.Large styleType="link" loading>
                        Loading
                    </Button.Large>
                    <Button.Large disabled loading>
                        Loading
                    </Button.Large>
                </Container>
                <Container>
                    <Button.Default loading>Default</Button.Default>
                    <Button.Default styleType="secondary" loading>
                        Loading
                    </Button.Default>
                    <Button.Default styleType="light" loading>
                        Loading
                    </Button.Default>
                    <Button.Default styleType="link" loading>
                        Loading
                    </Button.Default>
                    <Button.Default disabled loading>
                        Loading
                    </Button.Default>
                </Container>
                <Container>
                    <Button.Small loading>Small</Button.Small>
                    <Button.Small styleType="secondary" loading>
                        Loading
                    </Button.Small>
                    <Button.Small styleType="light" loading>
                        Loading
                    </Button.Small>
                    <Button.Small styleType="link" loading>
                        Loading
                    </Button.Small>
                    <Button.Small disabled loading>
                        Loading
                    </Button.Small>
                </Container>
            </>
        );
    },
};

export const Danger: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button.Large danger>Large</Button.Large>
                    <Button.Large styleType="secondary" danger>
                        Secondary
                    </Button.Large>
                    <Button.Large styleType="light" danger>
                        Light
                    </Button.Large>
                    <Button.Large styleType="link" danger>
                        Link
                    </Button.Large>
                </Container>
                <Container>
                    <Button.Default danger>Default</Button.Default>
                    <Button.Default styleType="secondary" danger>
                        Secondary
                    </Button.Default>
                    <Button.Default styleType="light" danger>
                        Light
                    </Button.Default>
                    <Button.Default styleType="link" danger>
                        Link
                    </Button.Default>
                </Container>
                <Container>
                    <Button.Small danger>Small</Button.Small>
                    <Button.Small styleType="secondary" danger>
                        Secondary
                    </Button.Small>
                    <Button.Small styleType="light" danger>
                        Light
                    </Button.Small>
                    <Button.Small styleType="link" danger>
                        Link
                    </Button.Small>
                </Container>
            </>
        );
    },
};

export const DangerLoadingState: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Container>
                    <Button.Large loading danger>
                        Large
                    </Button.Large>
                    <Button.Large styleType="secondary" loading danger>
                        Loading
                    </Button.Large>
                    <Button.Large styleType="light" loading danger>
                        Loading
                    </Button.Large>
                    <Button.Large styleType="link" loading danger>
                        Loading
                    </Button.Large>
                </Container>
                <Container>
                    <Button.Default loading danger>
                        Default
                    </Button.Default>
                    <Button.Default styleType="secondary" loading danger>
                        Loading
                    </Button.Default>
                    <Button.Default styleType="light" loading danger>
                        Loading
                    </Button.Default>
                    <Button.Default styleType="link" loading danger>
                        Loading
                    </Button.Default>
                </Container>
                <Container>
                    <Button.Small loading danger>
                        Small
                    </Button.Small>
                    <Button.Small styleType="secondary" loading danger>
                        Loading
                    </Button.Small>
                    <Button.Small styleType="light" loading danger>
                        Loading
                    </Button.Small>
                    <Button.Small styleType="link" loading danger>
                        Loading
                    </Button.Small>
                </Container>
            </>
        );
    },
};

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <Button.Default
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        >
            Add to cart
        </Button.Default>
    ),
};

export const TokenCustomisation: StoryObj = {
    tags: ["!dev"],
    render: () => <TokensTable />,
};
