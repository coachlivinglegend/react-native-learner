import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './Src/Screens/IndexScreen';
import { Provider } from './Src/Context/BlogContext'
import ShowScreen from './Src/Screens/ShowScreen';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}