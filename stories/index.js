import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import { styled } from 'styletron-react'

const Test = styled('div', (props) => ({
  backgroundColor: 'papayawhip',
  width: '500px',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rebeccapurple',
}))

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
  .add('Styletron test', () => <Test>Hello world</Test>)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)


// issues with webpack or babel, fix!