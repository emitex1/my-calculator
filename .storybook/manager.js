import { addons } from '@storybook/addons';
//import { themes } from '@storybook/theming';
import emitTheme from './emit-theme';

addons.setConfig({
  // theme: themes.dark,
  theme: emitTheme,
});
