import { styles } from '@/app/(tabs)/styles'
import { ajouter } from '@/app/store/slice/taskSlice'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const FormAdd = () => {

    //Declaration de l'atat de Tache
    const[textTache,setTextTache] = useState('')
    //Ecrire dans le store
    const dispath = useDispatch() ;

    //AJOUTER UNE TACHE
    const addTodo = () => {
        console.log('cliqué')

    //AJOUT DE LA LOGIQUE 
    const newTodo = {
              id: Date.now().toString(),
              title: textTache,
              completed: false,
            };
            
            dispath(ajouter(newTodo));
            setTextTache('');
            console.log('newTodo:',newTodo)
            // end addTodo
    } // end addTodo

   

  return (
    <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ajouter une nouvelle tâche..."
              value={textTache}
              onChangeText={setTextTache}
              onSubmitEditing={addTodo}
            />
            <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
          </View>
  )
}

export default FormAdd