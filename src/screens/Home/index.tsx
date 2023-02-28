import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { v4 as uuid } from "uuid";
import { Task } from '../../components/Task'

import { styles } from './styles'

const notFocus = "#0d0d0d"
const focus = "#5860CE"

type Task = {
    title: string,
    id: string,
    completed: boolean
}
// {
//     title: 'Task 1',
//     id: uuid(),
//     completed: true,
// }

export function Home() {
    const [inputBorder, setInputBorder] = useState(notFocus)
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<Task[]>([])
    const completed = todos.filter((item) => item.completed == true).length
    
    const handleFocus = () => {
        setInputBorder(focus)
    }

    const handleBlur = () => {
        setInputBorder(notFocus)
    }

    const handleAddTodo = () => {
        setTodos([...todos , {
            title: text,
            id: uuid(),
            completed: false,
        }])
        setText('')
    }

    const handleRemoveTodo = (id: string) => {
        const todosWithoutRemoved = todos.filter((task) => {
            return task.id !== id
        })

        setTodos(todosWithoutRemoved)
    }

    const handleCompleteTodo = (id: string) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id && todo.completed === true) {
                return {...todo, completed: false}
            } else if (todo.id === id && todo.completed === false) {
                return {...todo, completed: true}
            } else {
                return todo
            }
        })
        setTodos(newTodos)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/Logo.png')}/>
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={setText}
                        style={[styles.input, {borderColor: inputBorder}]}
                        value={text}
                    />
                    
                    <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                        <Image source={require('../../../assets/plus.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.todos}>
                    <View style={styles.todosHeader}>
                        <View style={styles.headerTextContainer}>
                            <Text style={[styles.created, styles.text]}>
                                Criadas
                            </Text>
                            <Text style={[styles.numberSpan, styles.text]}>
                                {todos.length}
                            </Text>
                        </View>
                        <View style={styles.headerTextContainer}>
                            <Text style={[styles.done, styles.text]}>
                                Concluídas
                            </Text>
                            <Text style={[styles.numberSpan, styles.text]}>
                                {
                                    completed === 0 ? 0 : `${completed} de ${todos.length}`
                                }
                            </Text>
                        </View>
                    </View>

                    <FlatList 
                        data={todos}
                        renderItem={({item}) => (
                            <Task 
                                id={item.id}
                                title={item.title}
                                completed={item.completed}
                                remove={handleRemoveTodo}
                                done={handleCompleteTodo}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles.empty}>
                                <Image source={require('../../../assets/Clipboard.png')}/>
                                <Text style={styles.emptyTitle}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.emptySub}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}