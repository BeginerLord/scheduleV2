export interface Docent {
    profile: string; // El perfil del docente (ej. "Profesor", "Tutor", etc.)
    username: string; // El nombre de usuario (ej. "jdoe")
    fullName: string; // El nombre completo del docente (ej. "John Doe")
    dni: string; // Documento Nacional de Identidad (ej. "12345678")
    phoneNumber: string; // Número de teléfono con formato internacional (ej. "+235225294127964")
    address: string; // Dirección del docente (ej. "123 Main St, Ciudad X")
    email: string; // Correo electrónico (ej. "johndoe@example.com")
    password: string; // Contraseña (ej. "mysecretpassword")
  }
  
  export type DocentDto = Omit<Docent, "id">;
  export type UpdateDocentDto = Partial<Docent>;