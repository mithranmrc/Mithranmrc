import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default class Cup extends React.Component {
    myFunction() {
        alert("Item is added to your cart");
    }
    render(){
      const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
      });
  return (
    <div style={{display:"inline-block",width:"20%",paddingTop:"2%",paddingRight:"1%",paddingLeft:"1%",height:"20%"}}>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"#54CDEA",height:"40%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={this.props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Cost:   </strong>{this.props.cost}
            <br></br>
            <br></br>
            Quantity:<select name="Quantity" id="val">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <br></br>
            <br></br>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <StyledRating
        name="customized-color"
        defaultValue={this.props.rat}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="add to shopping cart"  onClick={()=>{alert("Your item is added to cart")}}>
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <br></br>
    </div>
  );
}
}