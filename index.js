import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import App from './src/06/App'
import 'react-native-get-random-values'

AppRegistry.registerComponent(appName, () => App)
