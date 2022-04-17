import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from "./src/pages/PeoplePage";
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/utils';

const StackNavigator = createStackNavigator({
  'main':{
    screen: PeoplePage
  },
  'peopleDetail':{
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first) 
      return  ({
        title: peopleName,
        headerTitleStyle:{
          color: 'white',
          fontSize: 30,
          flexGrow: 1,
          textAlign: 'center'
        }
        });
    }
  }
},{
  defaultNavigationOptions:{
    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#6ca2f7',
      borderBottomWidth:1,
      borderBottomColor: '#C5C5C5'
    },
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer;
