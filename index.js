import { name as appName } from './app.json';
import Root from './src/Root.tsx';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent(appName, () => Root);

