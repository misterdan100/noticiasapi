import { Container, Grid, List, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";


function App() {

  

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography 
          align="center" 
          marginY={5} 
          omponent="h1" 
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textTransform: "uppercase"
          }}
          >
            News Searcher
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
