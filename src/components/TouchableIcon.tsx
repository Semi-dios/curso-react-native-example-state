import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {
    const { changeFavoriteIcon } = useContext(AuthContext);
    return (
        <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
            <Icon name={iconName || 'ios-person'} size={30} color="#4F8EF7" />;
        </TouchableOpacity>
    );
};
