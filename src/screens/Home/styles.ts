import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingBottom: 70,
        paddingTop: 50
    },
    content: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 24,
    },
    form: {
        flexDirection: 'row',
        marginTop: -50,
        gap: 4
    },
    input: {
        flex: 1,
        padding: 16,
        borderRadius: 5,
        backgroundColor: "#262626",
        borderWidth: 1,
        color: "#f2f2f2"
    },
    button: {
        padding: 18,
        borderRadius: 5,
        backgroundColor: "#1e6f9f"
    },
    todos: {
        marginTop: 32,
        flex: 1,
    },
    todosHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerTextContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    created: {
        color: "#4ea8de"
    },
    done: {
        color: "#8284fa"

    },
    numberSpan: {
        color: "#d9d9d9",
        backgroundColor: '#333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 100,
    },
    text: {
        fontWeight: "bold",
    },
    empty: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 48,
    },
    emptyTitle: {
        color: "#808080",
        fontWeight: "bold",
        paddingBottom: 2,
        paddingTop: 16
    },
    emptySub: {
        color: "#808080",
    },
})