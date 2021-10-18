import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowResultsScreen from './src/screens/ShowResultsScreen';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ShowResultsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
