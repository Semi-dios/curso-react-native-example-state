import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },

     buttonTabs: {
        backgroundColor: '#5d43f7',
        color: 'white',
        padding: 15,
        width: 150,
        height: 50,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    contentHeader: {
        padding: 16,
        textAlign: 'center',
    },
    contentTab: {
        display: 'flex',
        padding: 16,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    buttonTopTapNavigator: {
        backgroundColor: '#5d43f7',
        padding: 16,
        width: 296,
        height: 60,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 15,
    },
    buttonTopText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
});

export default styles;
