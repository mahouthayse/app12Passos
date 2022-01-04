import React, { createContext } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
import colors from '../Style/colors';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  if (!true) {
    return (
      <View style={{ backgroundColor: `${colors.white}`, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={true} color={colors.primary} size="large"/>
      </View>
    );
  } else {
    return <AuthContext.Provider value={{ signed: false }}>{children}</AuthContext.Provider>;
  }
};

export default AuthContext;
