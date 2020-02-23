export class Usuario {

    constructor(
        public nombre: string,
        public nick: string,
        public perfil: string,
        public email: string,
        public password: string,
        public img?: string,
        public telefono?: string,
        public direccion?: string,
        public desc?: string,
        public _id?: string

    ) { }
}