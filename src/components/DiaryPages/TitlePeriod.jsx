import React from 'react';
// import { useSelector } from 'react-redux';

import {
  NamePeriodH3,
  IngredientSpan,
} from './DiaryPage.styled';

import breakfastImg from '../../assets/images/meal-periods/breakfast.png';
import breakfastImg2 from '../../assets/images/meal-periods/breakfast-2x.png';
import dinnerImg from '../../assets/images/meal-periods/dinner.png';
import dinnerImg2 from '../../assets/images/meal-periods/dinner-2x.png';
import lunchImg from '../../assets/images/meal-periods/lunch.png';
import lunchImg2 from '../../assets/images/meal-periods/lunch-2x.png';
import snackImg from '../../assets/images/meal-periods/snack.png';
import snackImg2 from '../../assets/images/meal-periods/snack-2x.png';

import userF from './json/userFoot1.json';


const TitlePeriod = indexList => {
  // const dispatch = useDispatch();
  // const dateGlobal = useSelector(state => state.foodIntake.food.breakfast);
  const { breakfast, lunch, dinner, snack } = userF;
  // const windowInnerWidth = document.documentElement.clientWidth;
    
  let data = {};
  const titleObject = { img: "", name: "", isEdit: false };
  const isRetina = window.devicePixelRatio > 1;

  if (indexList.data === 'Breakfast') {
    data = breakfast;
    titleObject.img = isRetina ? breakfastImg2 : breakfastImg;
    titleObject.name = 'Breakfast';
  } else if (indexList.data === 'Lunch') {
    data = lunch;
    titleObject.img = isRetina ? lunchImg2 : lunchImg;
    titleObject.name = 'Lunch';
  } else if (indexList.data === 'Dinner') {
    data = dinner;
    titleObject.img = isRetina ? dinnerImg2 : dinnerImg;
    titleObject.name = 'Dinner';
  } else if (indexList.data === 'Snack') {
    data = snack;
    titleObject.img = isRetina ? snackImg2 : snackImg;
    titleObject.name = 'Snack';
  }

  const sumCarb = Math.round(data.reduce((acc, val) => acc + val.carbohydrates, 0) * 100) / 100;
  const sumProt = Math.round(data.reduce((acc, val) => acc + val.protein, 0) * 100) / 100;
  const sumFat = Math.round(data.reduce((acc, val) => acc + val.fat, 0) * 100) / 100;


  return (
    <>
      <img src={titleObject.img} alt={titleObject.name} style={{width: '32px', height: '32px'}} />
      <NamePeriodH3>{titleObject.name}</NamePeriodH3>

      <div style={{ display: 'inline' }}>
        <IngredientSpan> Carbonohidrates: </IngredientSpan>
        <IngredientSpan>{sumCarb}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan> Protein: </IngredientSpan>
        <IngredientSpan>{sumProt}</IngredientSpan>
      </div>
      <div style={{ display: 'inline' }}>
        <IngredientSpan>Fat: </IngredientSpan>
        <IngredientSpan>{sumFat}</IngredientSpan>
      </div>
    </>
  );
};

export default TitlePeriod;