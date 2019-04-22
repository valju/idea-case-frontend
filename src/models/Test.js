import Category from './Category';

export function fetchTestCategories () {
/*
    const obj1 = new Category('1', 'Trainings', 1000,);
    const obj2 = new Category('2', 'Talkoot', 20000,);
    const obj3 = new Category('3', 'Parties', 300,);
    const obj4 = new Category('4', 'Excursions', 400,);
    const obj5 = new Category('5', 'Purchases', 500,);

    const objArray = [obj1, obj2, obj3, obj4, obj5,];

    return objArray;
*/

    return [
        new Category('1', 'Trainings', 1000,),
        new Category('2', 'Talkoot', 20000,),
        new Category('3', 'Parties', 300,),
        new Category('4', 'Excursions', 400,),
        new Category('5', 'Purchases', 500,),
    ];

    // NOTE: Try to comment out one line = 4 categories. See how you get an error!!!
}