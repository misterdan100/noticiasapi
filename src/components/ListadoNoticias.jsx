import { Grid, Typography, Pagination, Stack } from '@mui/material'
import Noticias from './Noticias'
import useNoticias from '../hooks/useNoticias'

const ListadoNoticias = () => {

    const { noticias, pagina, totalNoticias, } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)
    

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Last News
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


        <Stack 
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
                marginY: '1.5rem'
            }}
        >
            <Pagination 
            count={totalPaginas} 
            shape='rounded'
            page={2}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias