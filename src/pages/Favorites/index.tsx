import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { ScrollView } from 'react-native-gesture-handler'

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos'/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
      </ScrollView>
    </View>
  )
}

export default Favorites