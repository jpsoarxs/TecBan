import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../pages/Intro';
import Sign from '../pages/Sign';
import SignIn from '../pages/Sign/SignIn';

import Home from '../pages/Home';

import Choice from '../pages/Choice';

import Rent from '../pages/Choice/Rent';
import RentSelected from '../pages/Choice/Rent/RentSelected';
import ScheduleVisit from '../pages/Choice/Rent/RentSelected/ScheduleVisit';

import Finance from '../pages/Choice/Finance';
import FinanceSelected from '../pages/Choice/Finance/FinanceSelected';
import FinanceVisit from '../pages/Choice/Finance/FinanceSelected/FinanceVisit';
import FinanceNegociationSimulation from '../pages/Choice/Finance/FinanceSelected/FinanceNegociationSimulation';
import Negociate from '../pages/Choice/Finance/FinanceSelected/FinanceNegociationSimulation/Negociate';
import BankList from '../pages/Choice/Finance/FinanceSelected/FinanceNegociationSimulation/Negociate/BankList';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator initialRouteName="Negociate" screenOptions={{ headerShown: false }}>
    <App.Screen name="Intro" component={Intro} />
    <App.Screen name="Sign" component={Sign} />

    <App.Screen name="Home" component={Home} />

    <App.Screen name="Choice" component={Choice} />

    <App.Screen name="Rent" component={Rent} />
    <App.Screen name="RentSelected" component={RentSelected} />
    <App.Screen name="ScheduleVisit" component={ScheduleVisit} />

    <App.Screen name="Finance" component={Finance} />
    <App.Screen name="FinanceSelected" component={FinanceSelected} />
    <App.Screen name="FinanceVisit" component={FinanceVisit} />
    <App.Screen name="FinanceNegociationSimulation" component={FinanceNegociationSimulation} />
    <App.Screen name="Negociate" component={Negociate} />
    <App.Screen name="BankList" component={BankList} />
  </App.Navigator>
);

export default AppRoutes;
