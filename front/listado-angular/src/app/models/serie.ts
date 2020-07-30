export class Serie{
    constructor(
        public id: String,
        public titulo: String,
        public descripcion: String,
        public estadoObra: String,
        public estadoUser: String,
        public temporadas: Number,
        public tipo: String,
        public tomos:Number,
        public autor:String,
        public director:String,
        public estudio:String,
        public plataforma:String,
        public genero: [String]
    ){}
}
