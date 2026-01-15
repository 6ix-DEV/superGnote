import { styles } from '@/app/(tabs)/styles'
import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const StatTask = () => {
    //Lecture des taches dans le store
    const todos = useSelector((state) =>state.task)

    console.log('todos' , todos)
return (
    <View>
             {todos.length > 0 && (
               <Text style={styles.counter}>
                 {todos.filter((t) => !t.completed).length} tâche(s) restante(s)
               </Text>
             )}
    </View>
)
}

export default StatTask