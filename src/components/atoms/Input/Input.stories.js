import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input
}

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />

const Template = args => <Input {...args} />


export const SmallInputA = Template.bind({})
SmallInputA.args = {
  size: 'small',
  placeholder: 'Small Size'
}

export const MediumInputA = Template.bind({})
MediumInputA.args = {
  size: 'medium',
  placeholder: 'Medium Size'
}

export const LargeInputA = Template.bind({})
LargeInputA.args = {
  size: 'large',
  placeholder: 'Large Size'
}

Small.storyName = 'Small Input'