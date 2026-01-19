import FormAdd from '@/components/FormAdd'
import Header from '@/components/Header'
import Liste from '@/components/Liste'
import React from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { styles } from './styles'
import ExempleSwipe from '@/components/ExempleSwipe'

const index = () => {
  return (
    <GestureHandlerRootView>
    <Provider store = {store}>
    <View style={styles.container}>
      
        <Header/>
        <FormAdd/>
        <Liste/>
         
    </View>
    </Provider>
    </GestureHandlerRootView>
  )
}

export default index

