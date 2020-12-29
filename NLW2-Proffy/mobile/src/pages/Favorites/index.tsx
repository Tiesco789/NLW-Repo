import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <View style={styles.container}>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
    </View>
  );
}

export default Favorites;
