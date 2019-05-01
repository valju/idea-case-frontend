import Category from './Category';
import Idea from './Idea';

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

export function fetchTestIdeas () {
    /*
    Idea: id, name, description, budget, readyForComments, peopleNeeded, creationDate, lastModified, categoryId
    */
        return [
            new Idea('1', 'Weekend Training', 'Training on weekends', 3456.32, false, 3, '2019-04-25', '2019-04-25T03:31:04-05', 1),
            new Idea('2', 'Weekend Trekking', 'Training on weekends', 1234.32, true, 3, '2019-04-25', '2019-04-25T03:31:04-05', 2),
            new Idea('3', 'Office Decoration', 'Training on weekends', 34563.32, false, 3, '2019-04-25', '2019-04-25T03:31:04-05', 3),
            new Idea('4', 'Fruit and Oat', 'Training on weekends', 6786.32, true, 3, '2019-04-25', '2019-04-25T03:31:04-05', 4),
            new Idea('5', 'New Office Equipment', 'Training on weekends', 2222.32, false, 3, '2019-04-25', '2019-04-25T03:31:04-05', 5),
        ];
    
}