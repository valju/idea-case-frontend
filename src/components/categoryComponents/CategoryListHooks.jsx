import React, { useEffect } from 'react';
import { fetchAllCategories, deleteCategory } from '../../actions/category';
import CategoryListItem from './CategoryListItem';
import { useSelector, useDispatch } from 'react-redux';

export default function CategoryList() {
  // "mapStateToProps" replaced with the hooks way, local consts used, no props
  const categoryList = useSelector((state)=>state.categories.categoryList);

  // "mapDispatchToProps" replaced with the hooks way, local consts used, no props
  const dispatch = useDispatch();  // getting the redux store connected dispatch into our use
  const deleteCategoryLocal = (id) => {
    dispatch(deleteCategory(id))
  }

  // componentDidMount replaced with useEffect, see also the dispatch using useDispatch
  useEffect(()=>{dispatch(fetchAllCategories())},[dispatch]);

  return (
      <div>
        <h4>List of Categories</h4>
        <ol>
          {
            categoryList.map((item) =>
              <CategoryListItem key={item.id}
              item={item} delete={deleteCategoryLocal} />
            )
          }
        </ol>
      </div>
    );
}

/*
const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  },
  deleteCategoryLocal: (id) => {
    dispatch(deleteCategory(id))
  }
});
*/

/*
const mapStateToProps = state => ({
  categories: state.categories,
});
*/

/*
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
*/

// What happens with last line? Kind of this:
// export default prepareToConnect(mapStateToProps,mapDispatchToProps)(CategoryList);
// export default doActualConnect(CategoryList);
// export default reduxConnectedComponentType;   // exports a redux-connected React component
