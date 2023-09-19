export default {
  global: {
    componenteFormativo: 'Pensamiento <em>Lean Manufacturing</em>',
    descripcionCurso:
      'El pensamiento <em>Lean Manufacturing</em> o Sistema Esbelto, desarrolla actividades en los procesos de manufactura, de mejora continua, y se conoce como filosofía KAIZEN. Apoyado en otras herramientas, aplica estas estrategias en el flujo de la producción para la eliminación de las mudas o desperdicios y corrige sistemáticamente, todas las pérdidas que resulten de las ineficiencias de los actuales procesos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Pensamiento Lean Manufacturing <em>Lean Manufacturing</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cultura KAIZEN ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Filosofía 5S',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Filosofía TPM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '(SMED) Cambio Rápido De Modelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '<em>POKA YOKE</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: '<em>JUST IN TIME</em> (Justo a tiempo)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'KANBAN',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: '<em>JIDOKA</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: '<em>HEIJUNKA</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Desperdicios (MUDAS)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Implementación de sistema <em>Push-Pull</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: '<em>Lean Six Sigma</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Pensamiento <em>Lean Manufacturing</em> <br> Filosofía 5S <br> (SMED) Cambio Rápido De Modelo <br> KANBAN <br> <em>HEIJUNKA</em>',
      referencia:
        'Rajadell Carreras, M. (2012). <em>Lean Manufacturing, la evidencia de una necesidad</em>. Ediciones Díaz de Santos. ',
      tipo: 'Base de datos Biblioteca SENA – eLibro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53016?page=131',
    },
    {
      tema: '<em>POKA YOKE</em>',
      referencia:
        'Castillo, L. (2021). <em>POKA YOKE Confección industrial textil. Ejemplos y pasos de aplicación</em>',
      tipo: 'Video',
      link: 'https://youtu.be/sZnGE2NsxlE',
    },
    {
      tema: '<em>JUST IN TIME</em> (Justo a tiempo)',
      referencia: 'Lean Culture. (2019). <em>Producción Justo a Tiempo</em> ',
      tipo: 'Video',
      link: 'https://youtu.be/7asw6qgY9hE',
    },
    {
      tema: 'Implementación de sistema <em>Push-Pull</em>',
      referencia: 'SENA. (2015). <em>Confección Lean Manufacturing</em>',
      tipo: 'Video',
      link: 'https://youtu.be/CJdTlzDa2n4',
    },
    {
      tema: 'Implementación de sistema <em>Push-Pull</em>',
      referencia:
        'Lean Kin. (2019) 7. <em>Just in Time (JIT) - Método Pull vs Push. Principios Lean Manufacturing IV | Cursos Lean Thinking</em>',
      tipo: 'Video',
      link: 'https://youtu.be/TH19SBVibDQ',
    },
  ],
  glosario: [
    {
      termino: 'Andon',
      significado:
        'Sistema de gestión visual en planta de producción que indica el estado de esta, avisa cuando se necesita ayuda y permite a los colaboradores parar el proceso de producción.',
    },
    {
      termino: 'DMAIC',
      significado:
        'Proceso que mejora la aplicación de Seis Sigma como un componente crítico de las iniciativas de calidad y mejora continua.',
    },
    {
      termino: 'DPMO',
      significado:
        'Defectos por millón de oportunidades (DPMO) es el número de defectos en una muestra. El DPMO estandariza el número de defectos en el nivel de oportunidad y es útil porque permite comparar procesos con diferentes complejidades.',
    },
    {
      termino: 'Niveles de inventario o <em>stock</em>',
      significado:
        'Es el control de la cantidad óptima de producción que debe realizar una planta para evitar el exceso de prendas.',
    },
    {
      termino: 'Flujo continuo',
      significado:
        'Proceso equilibrado donde el flujo de las prendas sigue una secuencia operacional con cambios rápidos de referencia, contando siempre con los mínimos recursos para obtener la producción deseada.',
    },
    {
      termino: '<em>HEIJUNKA</em>',
      significado:
        'Sistema de producción <em>lean</em> que mejora la logística en una empresa.',
    },
    {
      termino: 'Programación nivelada',
      significado:
        'Programación de la producción que fabrica en lotes pequeños por secuenciación.',
    },
    {
      termino: '<em>Toyota Production System</em> (TPS)',
      significado:
        'Son las siglas y se centra en la eliminación completa de los residuos del proceso de fabricación, y es el progenitor de la manufactura esbelta o <em>Lean Manufacturing</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anaya Vega, G. (2020) Diseño de la propuesta de implementación de un sistema de mantenimiento productivo total TPM para la Empresa Colombiana de Cementos S.A.S. en la región de Rio Claro – Antioquia. [Tesis de maestría] Universidad EAN.  ',
      link:
        'https://repository.ean.edu.co/bitstream/handle/10882/10058/AnayaGerman2020.pdf?sequence=1',
    },
    {
      referencia:
        'Antony, Jiju & Kumar, Maneesh & Madu, Christian. (2005). <em>Six sigma in small- and medium-sized UK manufacturing enterprises: Some empirical observations</em>. International Journal of Quality & Reliability Management. 22. 860-874. DOI 10.1108/02656710510617265 ',
      link:
        'https://www.emerald.com/insight/content/doi/10.1108/02656710510617265/full/html',
    },
    {
      referencia:
        'Aldavert, J., Vidal, E., Lorente, J., & Aldavert, X. (2016). 5´S para la mejora continua. ',
      link:
        'https://books.google.com.co/books?id=BFENyAEACAAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Cuatrecasas, L., & Torrell, F. (2010). TPM en un entorno Lean Management: Estrategia competitiva. Profit. Editorial. ',
      link:
        'https://books.google.com.mx/books?id=n5qUDVbPA6wC&printsec=copyright#v=onepage&q&f=false',
    },
    {
      referencia:
        'Caño, G. [@farmagemma] (2020, mayo 28) ¿Qué ejemplos de Poka-Yoke conoces? [Tuit] Twitter. ',
      link: 'https://twitter.com/farmagemma/status/1265894970688524289',
    },
    {
      referencia:
        'Felizzola Jiménez, Heriberto, & Luna Amaya, Carmenza. (2014). Lean Six Sigma en pequeñas y medianas empresas: un enfoque metodológico. <em>Ingeniare. Revista chilena de ingeniería</em>, 22(2), 263-277. ',
      link: 'https://dx.doi.org/10.4067/S0718-33052014000200012 ',
    },
    {
      referencia:
        'Guerrero, J. (29 de Septiembre de 2017). <em>Poka Yoke</em>. Obtenido de Leanroots, Lean Manufacturing y Productividad Personal: ',
      link: 'https://www.leanroots.com/wordpress/2017/09/29/poka-yoke/ ',
    },
    {
      referencia:
        'Hernández, J y Vizán A. (2013) Lean Manufacturing Conceptos, técnicas e implantación. Escuela de organización industrial. ',
      link:
        'https://www.eoi.es/es/savia/publicaciones/20730/lean-manufacturing-concepto-tecnicas-e-implantacion',
    },
    {
      referencia:
        'Hubbard, B. (14 de Enero de 2010). Lean Manufacturign Revolution! Obtenido de Mura, Muda and Muri: ',
      link: 'http://bobsleanlearning.wordpress.com/2010/01/14/muda/',
    },
    {
      referencia:
        'Pérez Rave, Jorge, La Rotta, Daniel, Sánchez, Katherine, Madera, Yiseth, Restrepo, Guillermo, Rodríguez, Mayra, Vanegas, Johan, & Parra, Carlos. (2011). Identificación y caracterización de mudas de transporte, procesos, movimientos y tiempos de espera en nueve pymes manufactureras incorporando la perspectiva del nivel operativo. <em>Ingeniare. Revista chilena de ingeniería</em>, 19(3), 396-408. ',
      link: 'https://dx.doi.org/10.4067/S0718-33052011000300009',
    },
    {
      referencia:
        'PROALNET (2016, Octubre 25) Cómo implementar la metodología justo a tiempo (JIT) [Blog] ',
      link: 'https://proalnet.com/blog/37-justo-a-tiempo-jit/',
    },
    {
      referencia:
        'Rajadell, Carreras, J, Sánchez García L (2010). Lean Manufacturing, la evidencia de una necesidad. Ediciones Díaz de Santos Albasanz. ',
    },
    {
      referencia:
        'Ruiz. P. (2007). La gestión de costes en Lean Manufacturing. Cómo evaluar las mejoras en costes en un sistema Lean. Netbiblo. ',
    },
    {
      referencia:
        'Snee. R.D (2010). Lean Six Sigma - getting better all the time. <em>International Journal of Lean Six Sigma</em>. Vol. 1, Issue 1, pp. 9-29. March 2010. ISSN: 2040-4166. DOI: 10.1108/20401461011033130.  ',
    },
    {
      referencia:
        'Suárez- Barraza, M.F. (2001). La filosofía del KAIZEN, una aplicación práctica en un área de servicio del sector público. <em>Revista CONTACTO. La revista de la Calidad Total</em>. 11, pp. 11-16',
    },
    {
      referencia:
        'Suárez- Barraza, Manuel F., y Castillo-Arias, Ileana y Miguel- Dávila, José-A (2011). La aplicación del KAIZEN  en las organizaciones mexicanas. Un estudio empírico. Journal of Globalization, Competitiveness & Governability / Revista de Globalización, Competitividad y Gobernabilidad / Revista de Globalização, Competitividade e Governabilidade, 5 (1), 60-74. ',
      link: 'https://www.redalyc.org/articulo.oa?id=511851326007',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora metodóloga Diseño y desarrollo curricular',
          centro: 'Diseño, confección y moda - Regional Antioquía',
        },
        {
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Diseño y desarrollo curricular',
          centro: 'Diseño, confección y moda - Regional Antioquía',
        },
        {
          nombre: 'Carlos Parra Carrillo',
          cargo: 'Experto temático',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Fernelis Mauricio Echeverri',
          cargo: 'Experto temático',
          centro: 'Diseño, confección y moda - Regional Antioquía',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodología y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Julián Ramirez',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
