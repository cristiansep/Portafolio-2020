export class Cliente {

    constructor(
        public nombre: string,
        public email: string,
        public asunto: string,
        public mensaje: string,
        public fecha?: string,
        public _id?: string
    ) { }

}