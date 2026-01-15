import { styles } from '@/app/(tabs)/styles'
import { modifier, supprimer } from '@/app/store/slice/taskSlice'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const ItemTask = ({task}) => {

  const dispatch = useDispatch() //pour ecrire dans le store

const toggleTodo = (id) => {
    console.log(id)
   dispatch(modifier(id))
  };

const deleteTodo = (id) => {
    console.log(id)
    dispatch(supprimer(id)) //Supprimer la tache id dans le store

}
  return (
  
  //end Toggle

    <View style={styles.todoItem}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTodo(task.id)}
      >
        <View
          style={[
            styles.checkboxInner,
            task.completed && styles.checkboxChecked,
          ]}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      <Text
        style={[
          styles.todoText,
          task.completed && styles.todoTextCompleted,
        ]}
      >
        {task.title}
      </Text>

      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => deleteTodo(task.id)}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItemTask
