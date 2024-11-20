import { Box, Paper, CircularProgress, Typography, Alert } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDeleteDocent, useGetAllDocent, useUpdateDocent } from "../../hooks";
import { UpdateDocentDto } from "../../model/docent";
import useCustomerForm from "../../../hooksCustomForms/useCustomerForm";
import MenuButtonComponent from "../../../Components/ui/buttonMenu";
import FormUpdateDocent from "../formUpdate";
import { useEffect, useState } from "react";
import { getErrorMessage } from "../../../utils/errorUtils";

const BoardDocent = () => {
  const { docent, isLoading } = useGetAllDocent(
    0,
    10,
    "userEntity.username",
    "asc"
  );
  const { deleteDocentMutate: deleteDocent, isPending: isDeletePending, isError: isDeleteError, error: deleteError, isSuccess:isDeleteSuccess } = useDeleteDocent();
  const { updateDocentMutation, isPending: isUpdatePending, isError: isUpdateError, error: updateError,isSuccess:isUpdateSuccess } = useUpdateDocent();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  useEffect(() => {
    if (isDeleteSuccess || isUpdateSuccess) {
      setShowSuccessAlert(true);
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isDeleteSuccess, isUpdateSuccess]);

  useEffect(() => {
    if (isDeleteError || isUpdateError) {
      setShowErrorAlert(true);
      const timer = setTimeout(() => {
        setShowErrorAlert(false);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isDeleteError, isUpdateError]);

  const handleDeactivate = async (dni: string) => {
    await deleteDocent(dni);
  };

  const updateDocentSucces = async (data: UpdateDocentDto) => {
    await updateDocentMutation({
      dni: data.dni || "",
      docent: {
        dni: data.dni || "",
        profile: data.profile || "",
        username: data.username || "",
        fullName: data.fullName || "",
        phoneNumber: data.phoneNumber || "",
        address: data.address || "",
        email: data.email || "",
        password: data.password || "",
      },
    });
  };

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<UpdateDocentDto>(updateDocentSucces);

  // Definir las columnas del DataGrid
  const columns: GridColDef[] = [
    { field: "profile", headerName: "Perfil", width: 150, align: "center" },
    { field: "username", headerName: "Usuario", width: 150, align: "center" },
    {
      field: "fullName",
      headerName: "Nombre Completo",
      width: 200,
      align: "left",
    },
    { field: "dni", headerName: "DNI", width: 150, align: "center" },
    {
      field: "phoneNumber",
      headerName: "Teléfono",
      width: 180,
      align: "center",
    },
    { field: "address", headerName: "Dirección", width: 250, align: "left" },
    { field: "email", headerName: "Correo", width: 200, align: "left" },
    {
      field: "actions",
      headerName: "Acciones",
      width: 120,

      renderCell: (params) => (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <MenuButtonComponent
              onEdit={() => handleSubmitUpdate(params.row)}
              onDeactivate={() => handleDeactivate(params.row.dni)}
              isPendingDeactivate={isDeletePending}
              isPendingEdit={isUpdatePending}
              title={`¿Desactivar docente ${params.row.fullName}?`}
              label={`Se desactivará permanentemente el docente con DNI ${params.row.dni}.`}
            >
              <FormUpdateDocent
                errorsUpdate={errorsUpdate}
                registerUpdate={registerUpdate}
              />
            </MenuButtonComponent>
          </Box>
        </>
      ),
    },
  ];

  // Mapeo de los datos obtenidos de la API para que tengan la estructura adecuada
  const rows =
    docent?.content?.map((docent) => ({
      id: docent.dni, // Usamos el DNI como identificador único de cada fila
      profile: docent.profile || "",
      username: docent.username || "",
      fullName: docent.fullName || "",
      dni: docent.dni || "",
      phoneNumber: docent.phoneNumber || "",
      address: docent.address || "",
      email: docent.email || "",
    })) || [];

  // Verificar si está cargando los datos
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
 
  return (

    <Box sx={{ padding: 2 }}>
      {showErrorAlert && (
          <Alert severity="error">{getErrorMessage(deleteError || updateError)}</Alert>
        )}
        {showSuccessAlert && (
          <Alert severity="success">Operación realizada exitosamente!</Alert>
        )}
      <Typography variant="h4" gutterBottom>
        Historial de Docentes
      </Typography>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          rowBuffer={5}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 10 : 5,
            bottom: params.isLastVisible ? 10 : 5,
          })}
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "1rem",
              padding: "8px 12px",
              textAlign: "left", // Alineación por defecto a la izquierda
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.1rem",
              fontWeight: "bold",
              textAlign: "center", // Alineación de los encabezados al centro
            },
            "& .MuiDataGrid-footerContainer": {
              textAlign: "center",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default BoardDocent;
