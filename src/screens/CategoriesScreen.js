//import libraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import CategoryGridTile from '../component/CategooryGridTile';
import {CATEGORIES} from '../Dummy/Dummy';

// create a component
const CategoriesScreen = ({navigation}) => {
  // const Nav = useNavigation();
  // renderItem  function
  const renderCategoryItem = itemData => {
    // pressHandler function
    const pressHandler = () => {
      navigation.navigate('MealsOverView', {
        categoriesID: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

//make this component available to the app
export default CategoriesScreen;
