<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 POKA YOKE


    p.mb-4(data-aos="fade") POKA YOKE es una palabra japonesa, cuyo significado está enfocado a evitar errores en los procesos. Donde POKA traduce error no intencionado y YOKE significa evitar. La combinación de ambas palabras se conoce como mecanismo a prueba de errores o evitar equivocaciones en el proceso, que impide la generación de defectos y detectar los mismos de una manera muy fácil. 

    .row.fondo-rosa.align-items-center.py-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            img(src='@/assets/curso/temas/t6/img.png' alt='')
          .col-md-7(data-aos="fade-left")
            p Un dispositivo POKA YOKE es la estructura de un mecanismo que ayuda a prevenir los errores antes de que suceda. Según Guerrero (2017), los dispositivos POKA YOKE son mecanismos muy obvios que hacen que el trabajador se dé cuenta y lo corrija a tiempo, evitando errores o defectos en el producto final. Para Guerrero (2017) el concepto es simple: si no se producen errores en la línea de producción la calidad será alta y el reproceso poco. Con esta técnica a se eliminan problemas asociados con los defectos, la seguridad y los errores en las operaciones. Si el operador comete un error, el POKA YOKE controla el proceso para evitar defectos o en su caso realiza un paro de línea.
            p.mb-0 El ingeniero Shigeo Shingo, quien trabajó para Toyota y fue el creador de POKA YOKE , según Guerrero (2017,) él estableció la formalización del Control de Calidad Cero Defectos o la sigla de las iniciales 
              b ZQC
              | , cuyo objetivo es crear sistemas simples para asegurar la calidad en el origen del proceso, evitando posibles causas de errores como: intercambios, olvidos, sustituciones e interpretaciones equivocadas. El POKA YOKE no es indispensable para evitar los defectos o errores en el proceso, pero sí reducen o eliminan el riesgo y la probabilidad de que éstos ocurran. 

    .cajon.color-secundario.p-4.mb-4(data-aos="fade")
      p Para lograr reducir los defectos dentro de un proceso de producción en especial las confecciones, el elemento principal es reconocer defectos o errores producidos por el trabajo; las inspecciones solo descubren los defectos, el POKA YOKE genera el ahorro del proceso de inspección.
      p.mb-0 Un ejemplo cotidiano de POKA YOKE es el de las tarjetas de memoria: tarjetas telefónicas, SD, disco duro Portátil etc. Como se muestra en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.bg-1.p-4
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Ejemplo POKA YOKE
        figure
          img(src='@/assets/curso/temas/t6/fig.png' alt='Ejemplo POKA YOKE')
          figcaption.mt-3 
            p.mb-0 Nota. Tomado de Caño, G. [@farmagemma]. (2020, mayo 28). Mensaje. [Tuit]. https://twitter.com/farmagemma/status/1265894970688524289.

    p(data-aos="fade") En las operaciones de fabricación, existen una serie de ensambles y procesos mecanizados que por su repitencia puede generar un riesgo alto de errores, los POKA YOKE ayudan a minimizar ese riesgo con medidas generalmente sencillas.
    h5.mb-5(data-aos="fade") Se puede analizar los siguientes conceptos de POKA YOKE, según la función dese le punto de vista de Guerrero (2017):

    TabsA.color-primario.mb-5(data-aos="fade-down")
      .div.border-bottom-orange.bg-2.p-4(titulo="Función de control")
        p Se diseñan mecanismos o dispositivos POKA YOKE para impedir que el error se realice. Por ejemplo: las tarjetas sim card, que se pueden poner de una sola manera, y si se ubica de manera incorrecta no funciona. Es decir, tiene un derecho para su instalación.
      .div.border-bottom-orange.bg-2.p-4(titulo="Función de advertencia")
        p En este caso el mecanismo o dispositivo POKA YOKE puede producir el error, pero el dispositivo o mecanismo reacciona advirtiendo al operario cuando este se presente, para actuar a tiempo y corregir. Por ejemplo: un indicador luminoso o un timbre que al sonar advierte sobre riesgo de error. 

    h5.mb-5(data-aos="fade") En confecciones, existen diferentes tipos de POKA YOKE que cumplen funciones de control o advertencia, a continuación, se presentan algunos ejemplos: 

    .tarjeta.fondo-slider.p-4.pt-5.mb-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center
          .col-md-5
            h5 Ficha técnica
            p Herramienta para estandarizar la información gráfica y escrita de una prenda que se va a confeccionar determinando el paso a paso para de sus operaciones, esta puede ser ficha técnicas de diseño, de patronaje, de confección y de procesos. 
          .col-md-5.text-center
            img.mb-3(src='@/assets/curso/temas/t6/slider-img1.png' alt='Ficha técnica' @click="modal1 = true")
            a.lnk.indicador__container(@click="modal1 = true") 
              h5.text-center Ampliar imagen
              .indicador--click(v-if="mostrarIndicador")
        .row.justify-content-center
          .col-md-5
            h5 Muestra física
            p Es el prototipo que resulta de confeccionar la prenda según las especificaciones de la ficha técnica. 
          .col-md-5
            img(src='@/assets/curso/temas/t6/slider-img2.png' alt='')
        .row.justify-content-center
          .col-md-5
            h5 Guías o aditamentos de la máquina
            p Complementos que ayudan a mejorar el desempeño y rendimiento del operario, evitando errores y reprocesos que afecten la calidad de la operación.
          .col-md-5
            img(src='@/assets/curso/temas/t6/slider-img3.png' alt='')
        .row.justify-content-center
          .col-md-5
            h5 Plantillas
            p Guías que sirven para la ubicación de piezas o procesos especiales, tales como estampados, bordados, piezas de la prenda como bolsillos, entre otros.
          .col-md-5
            img(src='@/assets/curso/temas/t6/slider-img4.png' alt='')
              
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.justify-content-center
        .col-md-8
          figure
            img(src='@/assets/curso/temas/t6/slider-img1-1.png', alt='Ficha técnica')

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-down")
      h5.mb-0 Se puede concluir que una de las ventajas de los POKA YOKE es reducir el riesgo de cometer errores y generar defectos, que en últimas serían un desperdicio.





</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
