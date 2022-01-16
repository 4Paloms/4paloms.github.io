function KnockViewModel() {
    var self = this;


    this.listLProg=ko.observableArray(
        [ 
            {icon:"java", name:"Java",level :"Intermedio"},
            {icon:"js", name:"JavaScript",level :"Intermedio"},
            {icon:"python", name:"Python",level :"Intermedio"},
            {icon:"typescript", name:"TypeScript",level :"Intermedio"},
            {icon:"php", name:"PHP",level :"Intermedio"},

        ]
    )


    this.listBBDD = ko.observableArray(
        [
            {icon:"MySQL", name:"MySQL",level :"Intermedio"},
            {icon:"MongoDB", name:"MongoDB",level :"Intermedio"}

        ]
    )

    this.listCMS = ko.observableArray(
        [
            {icon:"drupal", name:"Drupal",level :"Intermedio"},
            {icon:"prestashop", name:"Prestashop",level :"Intermedio"}

        ]
    )

    this.listBackend = ko.observableArray(
        [
            {icon:"nodeJS", name:"NodeJS",level :"Intermedio"},
            {icon:"express", name:"Express",level :"Intermedio"},
            {icon:"spring", name:"Spring",level :"Intermedio"},
            {icon:"maven", name:"Maven",level :"Intermedio"}
        ]
    )

    this.listFront = ko.observableArray(
        [
            {icon:"angular", name:"Angular",level :"Intermedio"},
            {icon:"capacitor", name:"Capacitor",level :"Intermedio"},
            {icon:"ionic" , name:"Ionic",level:"Intermedio"},
            {icon:"html", name:"HTML5",level :"Intermedio"},
            {icon:"sass", name:"Sass",level :"Intermedio"},
            {icon:"ko",name:"KnockoutJS",level:"Intermedio"}
        ]
    )

    this.listOther = ko.observableArray(
        [
            {icon:"arduino", name:"Arduino",level :"Intermedio"},
            {icon:"sigfox", name:"Sigfox",level :"Intermedio"},
            {icon:"latex", name:"Latex",level :"Intermedio"},
            {icon:"git", name:"Git",level :"Intermedio"},
            {icon:"linux", name:"Linux",level :"Intermedio"},
        ]
    )

    this.listPortfolio = ko.observableArray(
        [
            {type:"system", icon:"file" , link: "/assets/files/TFG_AntonioRubioMenchero_FINAL.pdf" ,
            title:"Arquitectura IoT basada en SigFox y Arduino para industrias agrícolas" , 
           body:"Trabajo Fin de Grado en el que se crea una Arquitectura IoT para la obtención de datos ambientales almacenamiento , procesamiento y  visualización de estos." 
           , tech:"Tecnologías: Drupal 9 | AngularJS | Ionic | Capacitor | PHP | SigFox | Arduino | Latex" },
           
            {type:"system", icon:"github" , link: "https://github.com/AntonioRubioMenchero/tysVideoConferencia/tree/testing" , title:"TyS Videoconferencia" , 
            body:" Práctica realizada para la asignatura de Tecnologias y Sistemas Web que tenía como objetivo el desarrollo de videochat con una arquitectura Cliente-Servidor" 
            , tech:"Tecnologías: Spring | Java | Javascript | HTML5 | MySQL" },
            {type:"system", icon:"github" , link: "https://github.com/AntonioRubioMenchero/videoPlayer" ,
             title:"Videoplayer" , 
            body:"Práctica realizada para la asignatura de Multimedia que tenia como objetivo la creación de una plataforma de videos interactivos. Debido a problemas de tiempo esta no se encuentra finalizada en su totalidad." 
            , tech:"Tecnologías: ExpressJS | Node.js | HTML | EJS | JavaScript | Boostrap 4 | SQLite" },
            {type:"system", icon:"github" , link: "https://github.com/AntonioRubioMenchero/AntonioRubioMenchero.github.io" ,
            title:"Web Personal" , 
           body:"Práctica realizada para la asignatura de Comercio Electrónico en la que realizamos una página web personal para mostrar nuestro Portfolio/Curriculum" 
           , tech:"Tecnologías: CSS3 | SASS | HTML | JavaScript | Google Analytics | Knockout.js" },
           {type:"system", icon:"web" , link: "https://gourmetcontradicion.com" ,
           title:"Ecommerce-Gourmet con Tradición" , 
          body:" Despliege y Administración de portal de eCommerce con Prestashop para empresa familiar dedicada a venta de productos típicos de la zona." 
          , tech:"Tecnologías: Prestashop | Google Analytics " },
          {type:"system", icon:"github" , link: "https://github.com/AntonioRubioMenchero/Inteligentes" ,
          title:"Resolver Cubo de Rubik" , 
         body:"Práctica realizada para la asignatura de Sistemas Inteligentes con el objetivo de desarrollar un programa para resolver un cubo de rubik utilizando diferentes algoritmos de busqueda." 
         , tech:"Tecnologías: Java" },
         {type:"system", icon:"github" , link: "https://github.com/AntonioRubioMenchero/RubioPalomares" ,
         title:"Sistema Distribuido para descarga de archivos" , 
        body:"Práctica realizada para la asignatura de Sistemas Distribuidos en la que se implementa un sistema distribuido para descarga de ficheros." 
        , tech:"Tecnologías: Python | ZeroC Ice" },
           
           

        ]
    )

}

var knock = new KnockViewModel();
ko.applyBindings(knock);