import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory } from '../../actions/category';
import { Link } from 'react-router-dom';

//Styling
import Button from '@material-ui/core/Button';

class CategoryUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryObject: { 
                id: this.props.categoryId,
                name: '',
                description: '',
                budgetLimit: '' 
            },
        };
    }

    inputFieldValueChanged = (event) => {
        this.setState(
            {
                categoryObject:
                    { ...this.state.categoryObject, [event.target.id]: event.target.value }
            });
    };

    updateCategoryButtonClicked = () => {
        const category = this.state.categoryObject;
        category.id = Number(category.id);  // id to Number
        category.budgetLimit = Number(category.budgetLimit);

        this.props.updateCategoryLocal(category);

        // this.setState(
        //     {
        //         newCategoryObject:
        //             { id: "", name: "", budgetLimit: "" },
        //     }
        // );
        // this.props.addCategoryLocal(this.state.newCategoryObject);   // Other way
    };

    render = () => {
        return (
            <div>
                <h2>Category id {this.props.categoryId}</h2>
                {/* <p>Category id digged out of react-router-dom params: {this.props.categoryId}</p> */}
                {/* 
        { (this.props.categories.categoryCurrent === null) 
                ?
            <CategoryItem item={{name:"Hard-coded placeholder", budgetLimit:12345}} />
                :
            <CategoryItem item={this.props.categories.categoryCurrent} />
        } */}
                <p>
                    Name: <input id="name" type="text" onChange={this.inputFieldValueChanged} value={this.state.categoryObject.name} /><br />
                    Description: <input id="description" type="text" onChange={this.inputFieldValueChanged} value={this.state.categoryObject.description} /><br />
                    Budget limit: <input id="budgetLimit" type="text" onChange={this.inputFieldValueChanged} value={this.state.categoryObject.budgetLimit} /><br />

                    <Button type="button" onClick={this.updateCategoryButtonClicked} color="primary">UPDATE</Button>
                </p>
                <p><Link to="/Categories">Back to all categories</Link></p>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateCategoryLocal: (category) => {
        dispatch(updateCategory(category));
      },
});

const mapStateToProps = state => ({
    categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryUpdate);

