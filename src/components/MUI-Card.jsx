// import React from 'react';
// import PropTypes from 'prop-types';

// import CategoryItem from './categoryComponents/CategoryItem';
// import { Link } from 'react-router-dom';

// //Styling
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
// import UpdateIcon from '@material-ui/icons/Update';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// };

// function SimpleCard(props) {
//   const { classes } = props;

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//       <Link to={"/Category/" + this.props.item.id}>
//           <CategoryItem item={this.props.item} />
//         </Link>
        

        

//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be
          
//           nev
//           o
//           lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Link to={"/CategoryUpdate/" + this.props.item.id}>
//           <Button type="button" size="small"><UpdateIcon></UpdateIcon></Button>
//         </Link>
//         <Button type="button" size="small"
//           onClick={() => {
//             this.props.deleteCategoryClicked(
//               this.props.item.id
//             )
//           }}
//         ><DeleteIcon></DeleteIcon></Button>
//       </CardActions>
//     </Card>
//   );
// }

// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleCard);