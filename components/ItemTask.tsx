import { styles } from '@/app/(tabs)/styles'
import { modifier, supprimer } from '@/app/store/slice/taskSlice'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import { useDispatch } from 'react-redux'

  const ItemTask = ({task}) => {
  
  const dispatch = useDispatch()

  const toggleTodo = (id) => {
    console.log(id)
    dispatch(modifier(id))
  }

  const deleteTodo = (id) => {
    console.log(id)
    dispatch(supprimer(id))
  }

  const RightAction = () => { 

        return (   <View style ={styles.rightAction}>

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


                      <TouchableOpacity
                            style={styles.deleteBtn}
                            onPress={() => deleteTodo(task.id)}
                          >
                            <Text style={styles.deleteText}>✕</Text>
                      </TouchableOpacity>
                    </View> 
                )

     }// end RightAction

  return (
    <ReanimatedSwipeable
      containerStyle={styles.todoItem}
      friction={4}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={RightAction} // Maintenant RightAction est accessible
    >
      <View style={styles.todoItem}>       
        <Text
          style={[
          styles.todoText,
          task.completed && styles.todoTextCompleted,
          ]}
        >
          {task.title}
        </Text>
      </View>
    </ReanimatedSwipeable>
  )
}

export default ItemTask