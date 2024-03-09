import { Grid, Typography } from '@mui/material'
import Noticias from './Noticias'
import useNoticias from '../hooks/useNoticias'

const ListadoNoticias = () => {

    const { noticias } = useNoticias()
    

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Ultimas Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias?.map((noticia, index) => (
                <Noticias 
                    key={index}
                    noticia={noticia}
                />
            ))}
        </Grid>
    </>
  )
}

export default ListadoNoticias