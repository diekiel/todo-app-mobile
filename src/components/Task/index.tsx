import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'

type TaskProps = {
    title: string,
    completed: boolean,
    id: string,
    remove: (id: string) => void,
    done: (id: string) => void
}

export function Task({title, completed, id, remove, done}: TaskProps) {
    const onRemove = () => {
        remove(id);
    }

    const onDone = () => {
        done(id);
    }

    return (
        <View style={completed === true ? [styles.container, styles.checked] : styles.container}>
            <TouchableOpacity style={styles.radio} onPress={onDone}>
                {
                    completed === true ? <Image source={require('../../../assets/checked.png')}/> :
                    <Image source={require('../../../assets/unchecked.png')}/>

                }
            </TouchableOpacity>
            <Text style={completed === true ? [styles.title, styles.checked] : styles.title}>
                {title}
            </Text>
            <TouchableOpacity style={styles.remove} onPress={onRemove}>
                <Image source={require('../../../assets/trash.png')}/>
            </TouchableOpacity>
        </View>
    )
}