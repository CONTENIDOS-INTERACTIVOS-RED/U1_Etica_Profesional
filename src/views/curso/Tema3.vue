<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. La ética y su relación con otras ciencias.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-15.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La ética, como rama de la filosofía, estudia los valores y principios que guían el comportamiento humano, distinguiendo lo correcto de lo incorrecto. Su conexión con otras disciplinas enriquece su alcance, proporcionando un marco normativo que incide en diversos campos del conocimiento.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2(data-aos="fade-left") Ética y política
        p(data-aos="fade-left") La ética política guía las acciones de la sociedad en aspectos como lo constitucional, jurídico, fiscal, económico y sanitario, evaluándolas en función del bien común. Este bien no solo abarca la convivencia, sino también la organización adecuada de la vida en comunidad. 
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es importante destacar que la ética política no juzga actos individuales, ya que esta tarea corresponde a la ética personal. Además, evalúa cómo el bien común político refleja tanto el bienestar colectivo como el individual, reconociendo que la vida plena solo se logra en sociedad.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="13%" y="10.5%" numero="+")
                h5 Toma de decisiones
                p La psicología analiza los factores emocionales, cognitivos y sociales que influyen en nuestras decisiones, mientras que la ética evalúa lo correcto o incorrecto de estas.
      
              .bg-color-white.box-shadow.p-3(x="51%" y="90%" numero="+")
                h5 Conducta moral
                p A través de teorías como las de Lawrence Kohlberg, la psicología del desarrollo examina cómo evolucionan las ideas de moralidad a lo largo de la vida.
      
              .bg-color-white.box-shadow.p-3(x="96.3%" y="27%" numero="+")
                h5 Intervención y cambio de comportamiento
                p La psicología ofrece herramientas para fomentar conductas éticas, promoviendo empatía y responsabilidad social en diversos contextos.
    
    .bg-full-width-2.bg-fondo-4
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            h2(data-aos="fade-left") Ética y derecho
            p El derecho, aunque regula aspectos externos del comportamiento humano, está intrínsecamente vinculado a la ética. Según Hartmann (2013), toda norma jurídica refleja una inclinación ética, pero mientras el derecho busca lo ideal a través de la ley, la ética abarca un espectro más amplio de valores. La ética fundamenta el derecho, proporcionando una escala de valores que guía su evolución.
            h2(data-aos="fade-left") Ética y sociología
            .p-4.bg-color-14.mb-3(data-aos="fade-right")
              p.mb-0 La sociología estudia los fenómenos sociales y su interacción con las normas éticas. Esta relación aborda aspectos clave:

          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/5.png", alt="", data-aos="zoom-in")
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5 Normas sociales y ética
              p.mb-0.text-center La sociología analiza cómo las normas culturales dictan lo ético en diferentes contextos, mientras que la ética evalúa su validez.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/7.svg" alt="" style="width: 90px")
              h5 Cambio social y ética
              p.mb-0.text-center A medida que evolucionan las sociedades, también lo hacen sus valores éticos..
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/8.svg" alt="" style="width: 90px")
              h5 Problemas sociales y dilemas éticos
              p.mb-0.text-center La sociología ayuda a comprender fenómenos como la pobreza y el racismo, planteando dilemas éticos sobre cómo abordarlos.
                  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        h2(data-aos="fade-left") Ética y economía
        p En economía, la ética discute temas como la justicia distributiva y las responsabilidades empresariales. Los principios éticos respaldan los sistemas económicos y ayudan a evaluar su impacto en la sociedad.
        h2(data-aos="fade-left") Ética y bioética
        p La bioética surge de la intersección entre biología, medicina, derecho y filosofía, abordando dilemas como:

      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/9.png", alt="", data-aos="zoom-in")

    .bg-full-width.bg-color-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            ul.lista-ul
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Investigación genética</b> Cuestiona los límites éticos de tecnologías como la edición genética.
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Eutanasia</b> Analiza el derecho a morir, la autonomía del paciente y las implicaciones culturales.
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Experimentación con animales</b> Evalúa el bienestar animal en la investigación biomédica y sus beneficios potenciales.
          .col-lg-5(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/tema3/10.svg", alt="", data-aos="zoom-in")

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La ética actúa como un eje transversal que conecta y guía diversas ciencias y profesiones, proporcionando un marco para enfrentar dilemas complejos con una perspectiva crítica. Su influencia promueve el respeto por la dignidad humana, la búsqueda del bien común y la construcción de un futuro más justo y solidario.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/61711?page=107" target="_blank" rel="noopener noreferrer") Hartmann, N. (2013). Ética: ( ed.). Ediciones Encuentro, S.A.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/74754?page=95" target="_blank" rel="noopener noreferrer") Varela Fregoso, G. (2010). Ética: ( ed.). Instituto Politécnico Nacional.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/58034" target="_blank" rel="noopener noreferrer") Ramiro Avilés, M. Á. (2010). Ética y medicina: ( ed.). Dykinson.    
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39443" target="_blank" rel="noopener noreferrer") Chávez Alcaraz, E. (2015). Ética para ingenieros: ( ed.). Grupo Editorial Patria. l
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.iese.edu/antonioargandona/ " target="_blank" rel="noopener noreferrer") Responsabilidad social y ética de la empresa. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ibm.com/es-es/watson" target="_blank" rel="noopener noreferrer") IBM Watson. 
            
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/d_01iMQlv1g?si=bwRa12ZsKR57QhgB " target="_blank" rel="noopener noreferrer") Ética psicológica (2024). Ética en la investigación y publicación en Psicología: el lugar de la Inteligencia Artificial.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
