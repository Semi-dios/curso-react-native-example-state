import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../context/AuthContext';
import styles from '../themes/themes';
export const HomeScreen = () => {
    const {
        authState: { isLoggedIn, username, icon, changeUsername },
    } = useContext(AuthContext);
    return (
        <View style={styles.sectionContainer}>
            <Text>Home Screen</Text>

            <Text>{isLoggedIn}</Text>
            <Text>{icon}</Text>
            <Text>{username}</Text>

            {isLoggedIn && (
                <TouchableOpacity
                    onPress={() => changeUsername('')}
                    style={styles.buttonTopTapNavigator}>
                    <Text>Dele username</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
