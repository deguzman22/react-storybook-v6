 import React from 'react';
 import { addDecorator, addParameters } from '@storybook/react';
 import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
 import { withConsole } from '@storybook/addon-console';
 import { withKnobs } from '@storybook/addon-knobs';
 import { withA11y } from '@storybook/addon-a11y';
 import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}


addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>
      {story()}
    </Box>
  </ThemeProvider>
));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box m='4'>
//         <Story />
//       </Box>
//     </ThemeProvider>
//   )
// ]