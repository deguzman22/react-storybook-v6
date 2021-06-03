import React from 'react';
import { Button } from '@chakra-ui/core';
import { action, actions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

const Template = args => <Button {...args} />

export const SuccessA = Template.bind({})
SuccessA.args = {
  variantColor: 'green',
  children: 'Success'
}

export const DangerA = Template.bind({})
DangerA.args = {
  variantColor: 'red',
  children: 'Danger'
}

export const Success = () => <Button onClick={action('sdsdsdsdsd')} variantColor='green'>Success</Button>
export const Danger = () => <Button  {...actions('onClick', 'onMouseOver')} variantColor='red'>Danger</Button>

export const Log = () => <Button  onClick={() => { console.log("log") }} variantColor='red'>Danger</Button>


export const Knobs = () => (
  <Button disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
)
