import { Meta } from "@storybook/react";
import { Search } from "../Search";

export default {
  title: "@travelmakers-design-v2/core/General/Search",
  component: Search,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["fill", "line"],
      },
      defaultValue: "fill",
      description: "search 타입",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "search Disabled 여부",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ maxWidth: "328px" }}>
      <Search {...props} />
    </div>
  );
};
