import React from 'react';
import { FlatList } from 'react-native';

import ItemTask from './ItemTask';
import NoTask from './NoTask';
import StatTask from './StatTask';
import { useSelector } from 'react-redux';



const Liste = () => {
  //lecture de la liste des taches qui sont dans le store
const dataTasks = useSelector((state)=>state.task);

  return (
    <FlatList 
    data={dataTasks}
    // Synthaxe spécifique
    //
    renderItem= {({item})=><ItemTask task={item}/>}
    keyExtractor = {(item)=> item.id}
    ListEmptyComponent={NoTask}
    ListFooterComponent={StatTask}
    />
  )
}

export default Liste