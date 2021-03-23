import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { ScenesKey } from "@common/constants";
import { Login } from "@pages/auth/login/Login";
import { Home } from "@pages/home/Home";
import { SignUp } from "@pages/auth/signup/SignUp";
import { VerifyAccount } from "@pages/auth/verify-account/VerifyAccount";
import { Start } from "@pages/auth/start/Start";
import { ResetPassword } from "@pages/auth/reset-password/ResetPassword";
import { SetNewPassword } from "@pages/auth/set-new-password/SetNewPassword";
import { TabBar } from "@components/AppTabs/TabBar";
import { SpecialOffers } from "@pages/special-offers/SpecialOffers";
import { OrdersHistory } from "@pages/orders-history/OrdersHistory";
import { Profile } from "@pages/profile/Profile";
import { FilmDetail } from "@pages/home/components/FilmDetail/FilmDetail";
import { BookingTicket } from "@pages/home/components/BookingTickets/BookingTickets";
import { ChooseSeats } from "@pages/home/components/BookingTickets/components/ChooseSeats";
import { Payment } from "@pages/home/components/BookingTickets/components/Payment";
import { Information } from "@pages/profile/components/Informations";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface InitProps {
  navigation: any;
}

const Init = ({ navigation }: InitProps) => {
  //   const getTokenFromStorage = async () => {
  //     const tokenStorage = await getTokenStorage();
  //     if (tokenStorage !== null) {
  //       goToDashboard(navigation);
  //     } else {
  //       goToAuth(navigation);
  //     }
  //   };

  //   useEffect(() => {
  //     getTokenFromStorage();
  //   }, []);

  return <></>;
};

const HomeTab = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={ScenesKey.HOME}
      >
          <Stack.Screen name={ScenesKey.HOME} component={Home} />
          <Stack.Screen name={ScenesKey.FILM_DETAIL} component={FilmDetail} />
          <Stack.Screen name={ScenesKey.BOOKING_TICKETS} component={BookingTicket} />
          <Stack.Screen name={ScenesKey.CHOOSE_SEATS} component={ChooseSeats} />
          <Stack.Screen name={ScenesKey.PAYMENT} component={Payment} />
      </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={ScenesKey.PROFILE}
      >
          <Stack.Screen name={ScenesKey.PROFILE} component={Profile} />
          <Stack.Screen name={ScenesKey.EDIT_INFORMATION} component={Information} />
      </Stack.Navigator>
  );
};

const SpecialOffersTab = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={ScenesKey.SPECIAL_OFFERS}
      >
          <Stack.Screen name={ScenesKey.SPECIAL_OFFERS} component={SpecialOffers} />
      </Stack.Navigator>
  );
};

const OrdersHistoryTab = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
          }}
          initialRouteName={ScenesKey.ORDERS_HISTORY}
      >
          <Stack.Screen name={ScenesKey.ORDERS_HISTORY} component={OrdersHistory} />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
      <Tab.Navigator 
        initialRouteName={ScenesKey.HOME} 
        tabBar={(props) => <TabBar {...props} />} 
      >
          <Tab.Screen name={ScenesKey.HOME} component={HomeTab} />
          <Tab.Screen name={ScenesKey.SPECIAL_OFFERS} component={SpecialOffersTab} />
          <Tab.Screen name={ScenesKey.ORDERS_HISTORY} component={OrdersHistoryTab} />
          <Tab.Screen name={ScenesKey.PROFILE} component={ProfileTab} />
      </Tab.Navigator>
  );
};


const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScenesKey.START}
    >
      <Stack.Screen name={ScenesKey.START} component={Start} />
      <Stack.Screen name={ScenesKey.LOGIN} component={Login} />
      <Stack.Screen name={ScenesKey.SIGN_UP} component={SignUp} />
      <Stack.Screen name={ScenesKey.VERIFY_ACCOUNT} component={VerifyAccount} />
      <Stack.Screen name={ScenesKey.RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen name={ScenesKey.SET_NEW_PASSWORD} component={SetNewPassword} />
    </Stack.Navigator>
  );
};

const Navigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScenesKey.APP}
      >
        <Stack.Screen name={ScenesKey.INIT} component={Init} />
        <Stack.Screen name={ScenesKey.AUTH} component={Auth} />
        <Stack.Screen name={ScenesKey.APP} component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

