import {
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    Paper,
    TextField,
    ThemeProvider,
    Typography,
  } from "@mui/material";
  import SchoolIcon from "@mui/icons-material/SchoolSharp";
import { useSingup } from "../hooks/useSingUp";
import { LoginDto } from "../model/login";
import useCustomerForm from "../../hooksCustomForms/useCustomerForm";

  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1565c0", // Un azul escolar
      },
      secondary: {
        main: "#fdd835", // Un amarillo que recuerda a los lápices
      },
      background: {
        default: "#f5f5f5", // Un gris claro para el fondo
      },
    },
    typography: {
      fontFamily: '"Comic Sans MS", "Chalkboard SE", "Sans-serif"', // Una fuente más divertida y escolar
    },
  });
  const Login = () => {
    const { isPending, loginMutation: login } = useSingup();
  
    const loginSuccess = (data: LoginDto) => {
      login({ ...data });
    };
    const { register, handleSubmit, errors } =
      useCustomerForm<LoginDto>(loginSuccess);
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper
            elevation={6}
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
              backgroundColor: "#ffffff",
              border: "10px solid #fdd835",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SchoolIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography
                component="h1"
                variant="h4"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                Horario Escolar
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: "text.secondary" }}>
                Inicia sesión para ver tus clases
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, width: "100%" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
                  autoComplete="username"
                  autoFocus
                  {...register("username", {
                    required: "El Email es obligatorio",
                  })}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                  {...register("password", {
                    required: "campo obligatorio",
                  })}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "secondary.main",
                    },
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    );
  };
  
  export default Login;