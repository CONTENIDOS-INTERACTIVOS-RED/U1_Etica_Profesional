<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipología de la ética y la moral'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        .p-4.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 Para entender los diferentes tipos de ética y moral, es fundamental retomar sus definiciones y aplicaciones. La ética se define como la disciplina encargada de estudiar la configuración propia de la forma o modo de vida, analizando las condiciones de la moralidad, aquella cualidad que convierte una actuación individual o grupal en moral. Por su parte, la moral establece normas y valores que guían el comportamiento humano, determinando lo que se considera correcto o incorrecto en un contexto específico.
        h2(data-aos="fade-left") Clasificación de la ética
       
        p.mb-0 La ética puede dividirse en diversas categorías según sus enfoques y propósitos. A continuación, se presentan sus principales clasificaciones:

      .col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.svg", alt="", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Descriptiva")
            p Estudia las creencias y prácticas morales de diversas culturas desde perspectivas empíricas, históricas o científicas, documentando sin emitir juicios normativos.
    
          .div(titulo="Normativa")
            p Analiza los fundamentos y justificaciones de normas y principios morales, explorando enfoques como el utilitarismo, la ética deontológica y la ética de la virtud.
    
          .div(titulo="Metaética")
            p Investiga la naturaleza y validez de los principios éticos, cuestionando el significado y la justificación de las normas morales.
          .div(titulo="Deontológica")
            p Se centra en el deber y las reglas, defendiendo que ciertas acciones son inherentemente correctas o incorrectas, independientemente de sus consecuencias (Immanuel Kant como referente principal).
          .div(titulo="Utilitarista")
            p Propone que la mejor acción es la que maximiza el bienestar o felicidad para el mayor número de personas. Representada por Jeremy Bentham y John Stuart Mill.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.mb3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="De la virtud")
            p Enfocada en el carácter del individuo y el desarrollo de virtudes como la justicia, valentía y sabiduría. Aristóteles es uno de sus principales exponentes.
    
          .div(titulo="Contextual")
            p Considera las circunstancias específicas para determinar lo ético en una situación particular, destacando la influencia del contexto en las decisiones morales.
    
          .div(titulo="Del cuidado")
            p Resalta la importancia de las relaciones interpersonales y la empatía, promoviendo el cuidado hacia los demás.
          .div(titulo="Pragmática")
            p Valora las acciones según su efectividad y resultados prácticos, priorizando lo que funciona por encima de principios rígidos.
          
    h2(data-aos="fade-left") Clasificación de la moral
    p.mb-5 La moral, al igual que la ética, presenta diversas clasificaciones que permiten entender su aplicación en diferentes contextos. Las principales son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Objetiva
              p Basada en principios universales que se consideran válidos para todas las personas, independientemente del contexto.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Subjetiva
              p Relativa a creencias, emociones y contextos individuales o culturales, donde lo moralmente correcto varía según la perspectiva personal o social.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Deontológica
              p Fundamentada en reglas y deberes universales, obligatorias independientemente de las consecuencias. Ejemplo: ética kantiana.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consecuencialista
              p Evalúa la moralidad de una acción según sus consecuencias. Busca maximizar el bienestar general, siendo el utilitarismo una referencia clave.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Virtuosa
              p Enfocada en el carácter del individuo y en el desarrollo de virtudes como la honestidad y la justicia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Social
              p Basada en normas aceptadas por una sociedad específica, las cuales pueden variar entre culturas y épocas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Religiosa
              p Sustentada en principios religiosos que dictan lo correcto e incorrecto según textos sagrados y creencias.
    
    .bg-full-width.bg-color-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            p.text-bold Hartmann añade una clasificación complementaria a los tipos de moral, distinguiendo las siguientes categorías:
            ul.lista-ul
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Moral del trabajo y frugalidad:</b> enfocada en la productividad y el ahorro.
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Moral de lucha y competencia:</b> basada en el esfuerzo y la rivalidad.
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Moral de autoridad y normas:</b> fundada en la obediencia a reglas establecidas.
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Moral del presente:</b> centrada en la satisfacción inmediata.
              li.mb-4.d-flex.bg-color-8
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Moral de la vida activa:</b> enfocada en la acción y el dinamismo.
          .col-lg-6(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/11.svg", alt="", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Comprender las diversas clasificaciones de ética y moral es fundamental para abordar los dilemas éticos actuales y fomentar un diálogo constructivo sobre lo que significa actuar correctamente en un mundo diverso. Ambas categorías son esenciales para reflexionar sobre nuestras creencias, decisiones y su impacto en la convivencia social.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La interacción entre ética y moral no solo ayuda a clarificar principios universales y subjetivos, sino que también promueve un marco de entendimiento para responder a los desafíos de nuestra sociedad.


    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/61711?page=83 " target="_blank" rel="noopener noreferrer") Hartmann, N. (2013). Ética: ( ed.). Ediciones Encuentro, S.A.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/74754?page=8" target="_blank" rel="noopener noreferrer") Varela Fregoso, G. (2010). Ética: ( ed.). Instituto Politécnico Nacional.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/38981?page=12" target="_blank" rel="noopener noreferrer") Rosmini, A. (2010). Principios de la ciencia moral: ( ed.). Plaza y Valdés (México).  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.oxfamintermon.org/de-la-etica-individual-a-la-etica-social/ " target="_blank" rel="noopener noreferrer") De la ética individual a la ética social
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://myethics.net/" target="_blank" rel="noopener noreferrer") MyEthics  
            
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/12ycKJQrapo?si=CFBCbM4pJGd0comQ" target="_blank" rel="noopener noreferrer") NEWMEDIA UFM (2023) Ética y moral | Inmanuel Kant.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
