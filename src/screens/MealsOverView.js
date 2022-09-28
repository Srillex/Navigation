//import liraries
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import MealItem from '../component/MeailItem';

import {CATEGORIES, MEALS} from '../Dummy/Dummy';
// create a component
const MealsOverViewScreen = ({route, navigation}) => {
  // meals Items display and filter by categoryIds
  const catID = route.params.categoriesID;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catID,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  // render function
  const renderMealItem = itemData => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

//make this component available to the app
export default MealsOverViewScreen;
