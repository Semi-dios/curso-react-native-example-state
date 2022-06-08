import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TouchableIcon } from '../components/TouchableIcon';
import { AuthContext } from '../context/AuthContext';

import styles from '../themes/themes';

export const ContactScreen = () => {
    const {
        signIn,
        authState: { isLoggedIn },
    } = useContext(AuthContext);

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Contact Screen</Text>

            {!isLoggedIn && (
                <TouchableOpacity onPress={signIn} style={styles.buttonTopTapNavigator}>
                    <Text>SignIn</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
