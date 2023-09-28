<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Desperdicios (MUDAS)

    .row.align-items-center.mb-5
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t11/img.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        p Las mudas son aquellas características de desviación que atrasan la producción y es debido a que ninguno de los siete desperdicios añade valor al producto que se esté confeccionando; si no se atacan desde la planeación y programación de la producción conllevan a incrementar su costo en el desarrollo de cualquier prenda.
        h5 A continuación, se muestran los siete tipos en que se clasifican los desperdicios según Pérez Rave (2011, p. 396):

    TabsA.color-primario.mb-5(data-aos="fade-down")
      .row.border-bottom-orange.bg-2.p-4(titulo="Sobreproducción")
        .col-md-9
          h5 Sobreproducción
          p Es el desperdicio más importante y depende en su mayoría de la programación de la producción, en donde se tiene en cuenta la toma de decisiones en planeación y programación. La sobreproducción es programar más producción de la que el cliente realmente necesita.
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab1.png', alt='')
      .row.border-bottom-orange.bg-2.p-4(titulo="Inventarios")
        .col-md-9
          h5 Inventarios
          p Es muy costoso mantener inventario en proceso o en producto terminado, este inventario se refiere a materia prima como telas o insumos sin fabricar o prendas terminadas sin entregar al cliente, sea porque él no lo programo o simplemente se fabricó antes de tiempo, genera sensación de poca capacidad en la empresa.
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab2.png', alt='')
      .row.border-bottom-orange.bg-2.p-4(titulo="Transporte")
        .col-md-9
          h5 Transporte
          p El cliente no está dispuesto a pagar, por la mala movilización que algunas empresas puedan realizar dentro de sus procesos sea en la fabricación del producto o en la distribución de este en los Cedi (centros de distribución); sin embargo, existen herramientas como son los diagramas de hilos que ayudan a mejorar el desplazamiento de herramientas, materia prima, prendas en proceso o terminadas, al igual que colaboradores. 
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab3.png', alt='')
      .row.border-bottom-orange.bg-2.p-4(titulo="Movimientos innecesarios")
        .col-md-9
          h5 Movimientos innecesarios
          p Son cada uno de los movimientos innecesarios que el colaborador hace en el desarrollo de las operaciones y que le pueden perjudicar su salud física, también el desorden en el puesto de trabajo ocasiona movimientos poco efectivos porque para encontrar lo que se requiere para el desarrollo de las operaciones se toma más del tiempo de lo normal.
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab4.png', alt='')
      .row.border-bottom-orange.bg-2.p-4(titulo="Tiempos de espera")
        .col-md-9
          h5 Tiempos de espera
          p Esto genera esperas innecesarias en el desarrollo de las prendas de vestir y puede ser por producto en procesamiento o en producto terminado, que se queda inactivo mucho tiempo; para corregirlo se deben verificar la programación y la nivelación de cargas, es importante identificar si hay ausencia de 5S, para saber cómo proceder.
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab5.png', alt='')
      .row.border-bottom-orange.bg-2.p-4(titulo="Procesos innecesarios")
        .col-md-9
          h5 Procesos innecesarios
          p Son actividades que existen cuando no se hace un estudio detallado de cómo realizar cada una de las operaciones que componen una prenda de vestir, para esto se debe identificar cuáles son las operaciones que se están haciendo demás y así mejorar el diseño de procesos que antes eran robustos e ineficientes.
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab6.png', alt='')
      .row.border-bottom-orange.bg-2.p-4(titulo="Defectos")
        .col-md-9
          h5 Defectos
          p Son entregas con defectos en su confección que no cumplen con las normas técnicas de calidad del cliente y por lo tanto ocasionan pérdidas para la empresa productora y un nivel de insatisfacción para ambos.
        .col-md-3
          img(src='@/assets/curso/temas/t11/tab7.png', alt='')



    .row.fondo-gris2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          h3.t-red(data-aos="fade") Aplicación de las mudas en las empresas de confección
          p.mb-4(data-aos="fade") Para su aplicación dentro de las empresas manufactureras, se deben tener en cuenta los pasos que aparecen en la siguiente figura, además de utilizar formulario de identificación de mudas. 

          .col-md-10(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Procedimiento para capacitar e identificar, las mudas en una empresa.
            figure
              img(src='@/assets/curso/temas/t11/fig.svg' alt='La imagen presenta un diagrama de flujo, donde se explica el procedimiento para capacitar e identificar las mudas en una empresa.')
            .row.justify-content-center
              .col-md-10
                figcaption.mt-3.bg-gray 
                  p.mb-0 Nota. Tomado de Pérez J, et al (2011). 
      

</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
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
