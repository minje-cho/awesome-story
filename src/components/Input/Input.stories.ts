import Input from './Input.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
  borderColor: '#8700ff',
  backgroundColor: '#e9e9f0',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  borderColor: '#8700ff',
  backgroundColor: '#e9e9f0',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  borderColor: '#8700ff',
  backgroundColor: '#e9e9f0',
  size: 'large',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  borderColor: 'blue',
  backgroundColor: '#f0f0f0',
  size: 'medium',
  prefixIcon: '🔍',
  suffixIcon: '✔️',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  borderColor: '#8700ff',
  backgroundColor: '#e9e9f0',
  size: 'medium',
  prefixIcon: '🔍',
  suffixIcon: '✔️',
};
