import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { Timeline } from "src/timeline";
import { Typography } from "src/typography";

type Component = typeof Timeline;

const meta: Meta<Component> = {
    title: "Feedback indicators/Timeline",
    component: Timeline,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Timeline
                title="What's next"
                items={[
                    {
                        title: "Item 1",
                        content:
                            "Just a regular text based item. Lorem ipsum dolor sit amet, consectetur.",
                    },
                    {
                        title: "Item 2",
                        content: (
                            <Typography.BodyMD>
                                An example with a{" "}
                                <Typography.LinkMD>link</Typography.LinkMD>.
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 3",
                        content: (
                            <Typography.BodyMD>
                                This one comes with an{" "}
                                <Typography.LinkMD
                                    href="https://google.com.sg"
                                    rel="noreferrer"
                                    external
                                >
                                    external link
                                </Typography.LinkMD>
                                .
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 4",
                        content: (
                            <Typography.BodyMD>
                                This item comes with an action button.{" "}
                                <Button.Default
                                    style={{ marginTop: "1rem" }}
                                    onClick={() => {
                                        alert("I was clicked");
                                    }}
                                >
                                    Click me
                                </Button.Default>
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 5",
                        content: "This one comes with the DS pills.",
                        statuses: [
                            {
                                type: "outline",
                                colorType: "red",
                                children: "Status outline red",
                                icon: <PlusCircleFillIcon />,
                            },
                            {
                                type: "solid",
                                colorType: "blue",
                                children: "Status solid blue",
                                icon: <PlaceholderIcon />,
                            },
                        ],
                    },
                    {
                        title: "Item 6",
                        content:
                            "This one comes with the DS pills containing long status text.",
                        statuses: [
                            {
                                type: "outline",
                                colorType: "red",
                                children: "Status outline red long text",
                                icon: <PlusCircleFillIcon />,
                            },
                            {
                                type: "solid",
                                colorType: "blue",
                                children: "Status solid blue",
                                icon: <PlaceholderIcon />,
                            },
                        ],
                    },
                ]}
            />
        );
    },
};

export const Variants: StoryObj<Component> = {
    render: () => {
        return (
            <Timeline
                title="What's next"
                items={[
                    {
                        title: "Item 1",
                        variant: "completed",
                        content: (
                            <Typography.BodyMD>
                                An example with <code>completed</code> variant
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 2",
                        variant: "current",
                        content: (
                            <Typography.BodyMD>
                                An example with <code>current</code> variant
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 3",
                        variant: "upcoming-active",
                        content: (
                            <Typography.BodyMD>
                                An example with <code>upcoming-active</code>{" "}
                                variant
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 4",
                        variant: "upcoming-inactive",
                        content: (
                            <Typography.BodyMD>
                                An example with <code>upcoming-inactive</code>{" "}
                                variant
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 5",
                        variant: "error",
                        content: (
                            <Typography.BodyMD>
                                An example with <code>error</code> variant
                            </Typography.BodyMD>
                        ),
                    },
                    {
                        title: "Item 6",
                        variant: "disabled",
                        content: (
                            <Typography.BodyMD>
                                An example with <code>disabled</code> variant
                            </Typography.BodyMD>
                        ),
                    },
                ]}
            />
        );
    },
};
