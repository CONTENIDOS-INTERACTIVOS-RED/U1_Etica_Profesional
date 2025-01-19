<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Componentes conceptuales, históricos y teóricos sobre la ética y la moral'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") Comenzar a aterrizar el concepto de ética no es sencillo, ya que tiene un gran antecedente histórico. Sin embargo, se puede iniciar generando una introducción general que indique que la ética es una rama de la filosofía que se ocupa del estudio de la moral.
            p.mb-0(data-aos="fade-up") En otras palabras, estudia las normas, valores y principios que rigen el comportamiento humano, preguntándose qué es correcto e incorrecto, qué es bueno y malo, y buscando entender las razones detrás de nuestras acciones y juicios morales.
    
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h2(data-aos="fade-left") Filosofía como base del estudio ético
        p Antes de avanzar en la definición de la ética, es fundamental entender el concepto de filosofía, base de la cual se deriva el estudio ético. Sus inicios se remontan a la antigua Grecia, donde predominaba un pensamiento mítico que idolatraba a los dioses. Las hazañas eran evocadas por poetas como Homero y Hesíodo, quienes reflejaban ideas sobre las causas de la humanidad y los sucesos atribuidos a la voluntad divina.
        .p-4.bg-color-4.mb-3(data-aos="fade-right")
          p.mb-0 Con el paso del tiempo, específicamente hacia mediados del siglo VI a.C., la adoración a los dioses y la religión comenzaron a perder fuerza. Esto dio paso a cuestionamientos racionales y críticos alejados de lo fabuloso, buscando respuestas más lógicas y realistas. En este contexto nace la filosofía, en un momento histórico conocido como “el paso del mito al logos”. Los presocráticos marcaron la etapa cosmológica, reflexionando sobre el mundo circundante y la naturaleza.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.svg", alt="", data-aos="zoom-in")


    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Más adelante, con el pensamiento de Sócrates, los sofistas y el desarrollo de la democracia, se resalta el tema del hombre, las preocupaciones morales, los valores y las virtudes que los ciudadanos deben tener. Este enfoque dio lugar al pensamiento ético, otorgando al conocimiento del hombre un rol protagónico en Grecia (Arredondo & Escobar, 2017).
    
    h2(data-aos="fade-left") Definición de la filosofía
    p Tras identificar el origen de la filosofía, surge la cuestión: ¿Qué es la filosofía? Aunque parece una pregunta sencilla, su definición es compleja. Pitágoras fue el primero en definirse como filósofo, describiendo su actividad como amor a la sabiduría. Platón y Aristóteles la entendieron desde la capacidad de asombro ante hechos inexplicables por sí mismos.
    p.mb-5.text-bold Desde diferentes perspectivas, la filosofía se define así:

    .row.justify-content-center.align-items-center.mb-5.bg-color-6.p-4
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
    
    h2(data-aos="fade-left") Teorías filosóficas
    p.mb-5.text-bold Se distinguen dos enfoques:
        
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Johan Hessen
              ul.lista-ul
                li.mb-2.d-flex.bg-color-7
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 <b>Teoría filosófica de la ciencia:</b> Formal (lógica) y material (teoría del conocimiento).
                li.mb-2.d-flex.bg-color-7
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 <b>Teoría de los valores:</b> Moral (ética), artísticos (estéticos), religiosos (filosofía de la religión).
                li.mb-2.d-flex.bg-color-7
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 <b>Teoría del universo:</b> Cosmología (metafísica y teoría del universo en sentido estricto).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Rafael Gambra
              ul.lista-ul
                li.mb-2.d-flex.bg-color-8
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 <b>Real:</b> Metafísica general y espacial.
                li.mb-2.d-flex.bg-color-8
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 <b>Conocimiento:</b> Lógica y teoría del conocimiento.
                li.mb-2.d-flex.bg-color-8
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 <b>Conducta:</b> Incluye la ética.

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En síntesis, la filosofía es una disciplina que estudia cuestiones fundamentales relacionadas con la existencia, el conocimiento, la moral, la mente y el lenguaje, buscando entender conceptos como la verdad, la justicia, la belleza, la libertad y la realidad.

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Historia y orígenes del concepto de ética
        p.mb-5.text-bold La ética se puede dividir en dos conceptos:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ética <em>utens</em>
                p.mb-0 Hace referencia a la capacidad humana de usar la razón para formar juicios morales sobre lo bueno y lo malo.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ética <em>docens</em>
                p.mb-0 Reflexiones más profundas y posteriores.
          
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Sócrates es reconocido como el fundador de la ética, al proponer debates sobre problemas como “qué es la justicia”, “qué es el deber”, “qué es la virtud” y “pór qué obligan las leyes” (Chávez, 2015).


    h2(data-aos="fade-left") Escuelas de ética filosófica 
    p.mb-5.text-bold Las escuelas de ética filosófica han influido profundamente en el pensamiento humano, ofreciendo perspectivas diversas sobre la virtud, la felicidad y la vida moral.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Sócrates")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Búsqueda de la verdad y autoconocimiento.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Relación entre conocimiento y virtud.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Importancia de la moral y la justicia.
    
          .div(titulo="Aristóteles")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Enfocado en el “bien” y la eudaimonía (felicidad plena).
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Virtudes éticas y dianoéticas desarrolladas mediante hábitos.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Importancia del equilibrio entre razón individual y vida comunitaria.
    
          .div(titulo="Epicuro")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Búsqueda de felicidad y tranquilidad.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Placer como bien supremo, enfocado en bienestar duradero.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Eliminación del dolor (aponía) y perturbaciones emocionales (ataraxia).
    
    p.mb-4 En conclusión, cada escuela filosófica contribuyó de manera significativa al desarrollo de la ética, brindando perspectivas complementarias sobre el comportamiento humano y su relación con la moralidad.
    
                     
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Ética

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Tras el reconocimiento de la filosofía y su recorrido histórico, se procede a profundizar en el objeto de estudio: la ética. Esta rama de la filosofía analiza la conducta humana, especialmente aquellas acciones libres que el ser humano decide realizar, evitar o ejecutar de una manera particular. Bajo sus plenas facultades, el individuo tiene la capacidad de discernir y decidir los actos que llevará a cabo.
        .p-4.bg-color-4.mb-3(data-aos="fade-right")
          p.mb-0 El término ética proviene del griego ethos, que significa <b>"modo de ser del individuo"</b> y <b>"costumbre obligatoria"</b>. A partir de esta etimología, se puede afirmar que la ética examina tanto las costumbres obligatorias, es decir, las normas sociales, como el modo de ser y actuar de la persona.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in")
    
    p.mb-4.text-bold La ética se presenta como un marco fundamental que guía las decisiones humanas, permitiendo que las personas ejerzan su libertad para elegir su camino. Este proceso implica evaluar:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las diferentes opciones disponibles.
    
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las variables asociadas a cada elección.
    
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las consecuencias posibles de dichas elecciones.
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-bold En este sentido, la ética se define como el saber filosófico cuya misión es orientar la conducta hacia el bien perfecto o el fin último del ser humano.

    h2(data-aos="fade-left") Principios y contexto cultural
    p.mb-5 La ética actúa como un conjunto de principios y normas que permiten discernir lo que se considera bueno o malo. Estos criterios no son exclusivamente individuales, ya que están influenciados por:

    .bg-full-width.bg-color-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5(data-aos="fade-left").mb-3.mb-lg-0
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>La cultura:</b> valores y costumbres arraigados en una sociedad.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>La historia:</b> acontecimientos que moldean la percepción colectiva.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>El contexto social:</b> factores familiares, comunitarios y económicos.
          .col-lg-7(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/tema1/14.svg", alt="", data-aos="zoom-in")

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Así, lo que una persona considera correcto o incorrecto está moldeado por estas influencias, que han contribuido a formar la conciencia colectiva.
    
    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Reflexión y responsabilidad
        p.mb-5 La reflexión ética invita a cuestionar y, en caso necesario, replantear los criterios establecidos. Este análisis debe considerar tanto:
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/15.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La libertad individual
                p.mb-0 La capacidad de decidir de manera autónoma.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La responsabilidad social
                p.mb-0 Tomar decisiones alineadas con la justicia y el bienestar colectivo.
        
        p.mb-5 En última instancia, la ética no solo guía las decisiones personales, sino que también contribuye a construir una sociedad más justa y equitativa.
        h2(data-aos="fade-left") Relación entre ética y filosofía
        p.mb-5 La filosofía es la raíz de la ética, que representa la aplicación práctica de los principios filosóficos. Mientras la filosofía abarca la reflexión crítica y teórica, la ética se enfoca en:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La conducta humana
              p Abordada desde una perspectiva operativa, visible y cuantificable.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La intención de guiar decisiones
              p Promoviendo resultados positivos tanto individuales como colectivos.
      
    h2(data-aos="fade-left") Implicaciones prácticas de la ética
    p.mb-5 La ética no se limita a ser un conjunto de normas o principios abstractos. Se traduce en acciones concretas que permiten:

    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.text-center.mb-3.mg-lg-0(data-aos="fade-up")
            h5.mb-0.p-4.bg-color-10.text-white.pst Facilitar la convivencia armónica
            p.mb-0.p-4.bg-color-11.pst-1 Fomentando relaciones justas y equitativas.
          .col-lg-4.text-center.mb-3.mg-lg-0(data-aos="fade-down")
            h5.mb-0.py-4.bg-color-12.text-white.pst Promover el desarrollo personal y social
            p.mb-0.p-4.bg-color-1.pst-1 Beneficiando a la comunidad en su conjunto.
          .col-lg-4.text-center.mb-3.mg-lg-0(data-aos="fade-up")
            h5.mb-0.p-4.bg-color-13.pst Educar sobre lo correcto e incorrecto
            p.mb-0.p-4.bg-color-4.pst-1 Sirviendo como herramienta de orientación en la vida cotidiana.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 De esta manera, la ética no solo enseña valores, sino que impulsa acciones que refuerzan el bienestar colectivo, actuando como una base esencial para la construcción de una sociedad más justa.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Moral 
         
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
        p En el marco de la conexión con la ética, surge el concepto de moral, el cual se refiere a un conjunto de normas, valores y creencias generalmente aceptados en una sociedad o cultura determinada. Estas normas son las que orientan el comportamiento de los individuos y su percepción sobre lo que es bueno o malo. Es importante destacar que la moral puede variar significativamente entre diferentes culturas y contextos históricos.
        h2(data-aos="fade-left") Diferencias entre ética y moral
        .py-4.px-5.bg-color-14(data-aos="fade-right")
          p.mb-0 Al examinar las diferencias entre ética y moral, se destacan varios aspectos fundamentales:
      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/19.png", alt="", data-aos="zoom-in")
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.png", alt="").mb-4.mb-lg-0
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Sócrates")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Es una reflexión crítica y filosófica sobre los principios morales.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Tiene una naturaleza universal, buscando aplicar conceptos de justicia y rectitud en diversas situaciones y contextos.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Formula preguntas profundas sobre lo “bueno” y lo “malo” y desafía las normas existentes, promoviendo un análisis y revisión constante de las creencias comunes.
    
          .div(titulo="Moral")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Se define como un conjunto de normas y valores compartidos por un grupo específico de personas.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Está contextualizada en una cultura, religión o grupo social particular.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Proporciona un marco práctico para orientar las acciones diarias, estableciendo comportamientos aceptables o inaceptables.
    
    h2(data-aos="fade-left") Relación y distinción
    
    .bg-full-width.bg-color-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5(data-aos="fade-left").mb-3.mb-lg-0
            p.text-bold Aunque ambos conceptos están interrelacionados, operan en niveles y dimensiones diferentes:
            ul.lista-ul
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>La ética</b> busca respuestas universales y racionales, orientadas al análisis teórico y la crítica
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>La moral</b> está influenciada por tradiciones, costumbres y creencias específicas, sirviendo como guía práctica en contextos sociales concretos.
              li.mb-2.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>El contexto social:</b> factores familiares, comunitarios y económicos.
          .col-lg-7(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/tema1/21.svg", alt="", data-aos="zoom-in")
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En síntesis, la ética invita a la reflexión crítica y a la evaluación de los principios morales desde una perspectiva teórica y universal. Por su parte, la moral rige la conducta en contextos específicos de manera práctica. Ambas son esenciales para la construcción de una convivencia armónica, complementándose al ofrecer un marco tanto analítico como operativo para guiar el comportamiento humano.
          

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40516?page=21 " target="_blank" rel="noopener noreferrer") Arredondo Campos, J. & Escobar Valenzuela, G. (2017). Ética 1: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40400?page=14 " target="_blank" rel="noopener noreferrer") Chávez Calderón, P. (2015). Ética: (3 ed.). Grupo Editorial Patria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/39401?page=23 " target="_blank" rel="noopener noreferrer") Torres Hernández, Z. (2015). Introducción a la ética: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/35955?page=14" target="_blank" rel="noopener noreferrer") Aristóteles. (2003). La Ética: ( ed.). El Cid Editor.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/69262?page=1 " target="_blank" rel="noopener noreferrer") Blanco Blanco, L. A. (2013). Ética integral: ( ed.). Ecoe Ediciones.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.fide.edu.pe/es-co/blog/detalle/la-etica-como-estrategia-de-vida-valores-en-accion/ " target="_blank" rel="noopener noreferrer") La Ética como Estrategia de Vida: Valores en Acción 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ethicslab.georgetown.edu/" target="_blank" rel="noopener noreferrer") Ethics Lab. 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/show/2W5LzEKcOA6eBAMQtk1LWW  " target="_blank" rel="noopener noreferrer") Martinez, M (Productor) (2024, Septiembre 02) Qué es la ética. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    
    


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
