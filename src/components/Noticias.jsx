import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

const Noticias = ({ noticia }) => {
  const { source, description, publishedAt, title, url, urlToImage } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`imagen de la noticia ${title}`}
            image={urlToImage}
            height={'250'}
          />
        )}

        <CardContent>
            <Typography variant="body1" color='error'>
                {source.name}
            </Typography>
            <Link 
                href={url}
                target='_blank'
                sx={{
                    textDecoration: 'none',
                    color: 'black'
                }}
            >
                <Typography variant="h5" component='h3' >
                    {title}
                </Typography>
            </Link>
            <Typography variant="body2" component='p' >
                {description}
            </Typography>
        </CardContent>

        <CardActions>
            <Link
                href={url}
                target='_blank'
                variant="button"
                color='primary'
                width={'100%'}
                sx={{
                    textDecoration: 'none',
                    marginLeft: '0.6rem'
                }}
            >
                Leer Noticia...
            </Link>
        </CardActions>

      </Card>
    </Grid>
  );
};

export default Noticias;
