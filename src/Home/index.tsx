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
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const sections = [
  { title: "Gestión de Docente", icon: "D", path: "/docent" },
  { title: "Aplicar Matriculas", icon: "C", path: "/matricular" },
  { title: "Gestión de Horario", icon: "H", path: "/schedule" },
  { title: "Gestión de Estudiante", icon: "E", path: "/student" },
  { title: "Gestión de Matriculas", icon: "E", path: "/gestionMatricula" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };

  const handleLogout = () => {
    // Aquí puedes implementar la lógica para cerrar sesión
    console.log("Cerrando sesión");
    localStorage.removeItem("jwt");

    navigate("/login"); // Redirige a la página de login
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Panel de Control del secretario</Typography>
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
                      backgroundColor: "action.selected",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 140,
                    }}
                  >
                    <Typography variant="h2">{section.icon}</Typography>
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {section.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Botón de Salir en la esquina superior derecha */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Salir
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
