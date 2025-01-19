export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Epistemología sobre la ética y la moral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Componentes conceptuales, históricos y teóricos sobre la ética y la moral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ética',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Moral',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipología de la ética y la moral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La ética y su relación con otras ciencias.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arredondo Campos, J. y Escobar Valenzuela, G. (2017). Ética 1. Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/40516?page=21.',
    },
    {
      referencia:
        'Chávez Calderón, P. (2015). Ética (3.ª ed.). Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/40400?page=14.',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). Introducción a la ética. Grupo Editorial Patria. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39401?page=23.',
    },
    {
      referencia: 'Lobberich (s.f.). Johannes Hessen.',
      link: 'https://www.lobberich.de/kultur/leute/Johannes-Hessen/ ',
    },
  ],
  glosario: [
    {
      termino: 'Bioética',
      significado:
        'campo interdisciplinario que aborda las implicaciones morales de las prácticas biológicas y médicas, especialmente en contextos de avances científicos..',
    },
    {
      termino: 'Ética del cuidado',
      significado:
        'teoría que enfatiza la importancia de las relaciones interpersonales y el cuidado hacia los demás en la toma de decisiones morales.',
    },
    {
      termino: 'Ética descriptiva',
      significado:
        'rama de la ética que estudia las creencias y prácticas morales en diversas culturas y sociedades, sin emitir juicios sobre su validez.',
    },
    {
      termino: 'Ética normativa',
      significado:
        'enfoque que se ocupa de establecer y analizar los fundamentos de nuestras creencias y normas morales, buscando justificar su validez.',
    },
    {
      termino: 'Eudaimonía',
      significado:
        'término griego que se traduce como "felicidad" o "florecimiento humano", representando el objetivo último de la vida según Aristóteles.',
    },
    {
      termino: 'Filosofía',
      significado:
        'disciplina que se ocupa del estudio de las cuestiones fundamentales relacionadas con la existencia, el conocimiento, la moral, la mente y el lenguaje.',
    },
    {
      termino: 'Metaética',
      significado:
        'rama de la ética que investiga la naturaleza, el significado y la justificación de los enunciados morales, así como los métodos de la ética normativa.',
    },
    {
      termino: 'Moral',
      significado:
        'conjunto de normas, valores y creencias que guían el comportamiento de los individuos en una sociedad o cultura determinada',
    },
    {
      termino: 'Normas sociales:',
      significado:
        'reglas y expectativas establecidas por una sociedad que dictan comportamientos considerados aceptables o inaceptables en un contexto social determinado.',
    },
    {
      termino: 'Sócrates',
      significado:
        'filósofo griego considerado el fundador de la ética occidental, conocido por su método de enseñanza basado en el diálogo y el cuestionamiento crítico.',
    },
    {
      termino: 'Virtud',
      significado:
        'cualidad moral que se considera buena y deseable, que forma parte del carácter de una persona y se desarrolla a través de la práctica',
    },
  ],
}
