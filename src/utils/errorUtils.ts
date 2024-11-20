export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      const status = (error as any).response?.status;
      switch (status) {
        case 400:
          return "Bad Request: The server could not understand the request.";
        case 403:
          return "Forbidden: You do not have permission to perform this action.";
          case 500:
            return "Error en el servidor: No puedes realizar esta accion por integridad de la info.";
        case 404:
          return "Not Found: The requested resource could not be found.";
        default:
          return error.message;
      }
    }
    return "An error occurred";
  };