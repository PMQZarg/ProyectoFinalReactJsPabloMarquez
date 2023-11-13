import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={item.img}
          title={`image ${item.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
           {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          $ {item.price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          item.stock > 0 ?
        <Link to={`/itemDetail/${item.id}`}>
        <Button size="small" color="primary">
          Ver detalle
        </Button>
                </Link> : <Button variant="contained" disabled>Sin Stock</Button>
        }
      </CardActions>
    </Card>
  )
}

export default ProductCard;