export interface UsuarioAutenticado {
    datos: DatosUsuario;
    tk: string;
}

export interface DatosUsuario {
    nombre: string,
    usuario: string,
    id: string,
    rol: string,
    estado: string
}

export interface recuperacion {
    usuario: string
}