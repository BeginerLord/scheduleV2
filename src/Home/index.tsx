import { createTheme } from "@mui/material";
import { 
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    ThemeProvider,
    Box
  } from '@mui/material';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const sections = [
  { title: 'Docente', icon: 'D', path: '/docent' },
  { title: 'Curso', icon: 'C', path: '/matricular' },
  { title: 'Horario', icon: 'H', path: '/schedule' },
  { title: 'Estudiante', icon: 'E', path: '/student' },
];

const Home = () => {
    const navigate= useNavigate();
    const handleCardClick = (path: string) => {
        console.log(`Navigating to ${path}`);
        navigate(path);
    };
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Panel de Control
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} md={3} key={section.title}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(section.path)}>
                <Box
                  sx={{
                    backgroundColor: 'action.selected',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 140,
                  }}
                >
                  <Typography variant="h2">{section.icon}</Typography>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    {section.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </ThemeProvider>
  )
}

export default Home