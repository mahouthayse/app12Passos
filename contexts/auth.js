import React, { createContext, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
import colors from '../Style/colors';

const AuthContext = createContext({ token: null, setToken: () => {} });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  if (!true) {
    return (
      <View style={{ backgroundColor: `${colors.white}`, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={true} color={colors.primary} size="large"/>
      </View>
    );
  } else {
    return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
  }
};

export default AuthContext;
