import { Story, Meta } from "@storybook/react";
import PhotoGallery from "../components/PhotoGallery";

export default {
  title: "PhotoGallery",
  component: PhotoGallery,
} as Meta;

const Template: Story = (args) => <PhotoGallery {...args} />;

export const Default = Template.bind({});
Default.args = {};
