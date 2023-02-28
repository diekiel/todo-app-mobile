import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 12,
        backgroundColor: "#262626",
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
    },
    radio: {

    },
    remove: {
        alignSelf: 'flex-end',
    },
    title: {
        color: '#f2f2f2',
        flex: 1,
        maxWidth: '80%',
    },
    checked: {
        borderColor: 'transparent',
        color: "#808080",
        textDecorationStyle: 'solid',
        textDecorationColor: '#808080',
        textDecorationLine: 'line-through'
    }

})