import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../context/AuthContext';
import styles from '../themes/themes';

import Icon from 'react-native-vector-icons/Ionicons';
export const SettingScreen = () => {
    const {
        authState: { isLoggedIn, icon },
        logOut,
    } = useContext(AuthContext);
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Setting Screen</Text>
            {/*  <Text>{JSON.stringify(authState, null, 4)}</Text> */}

            {icon && <Icon name={icon} size={150} color={'#999999'} />}

            {isLoggedIn && (
                <TouchableOpacity onPress={logOut} style={styles.buttonTopTapNavigator}>
                    <Text>logOut</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
