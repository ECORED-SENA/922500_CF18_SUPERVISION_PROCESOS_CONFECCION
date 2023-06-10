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








    .row.fondo-gris2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          h3.t-red(data-aos="fade") Aplicación de las mudas en las empresas de confección
          p.mb-4(data-aos="fade") Para su aplicación dentro de las empresas manufactureras, se deben tener en cuenta los pasos que aparecen en la siguiente figura, además de utilizar formulario de identificación de mudas. 



          .col-md-10(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] Procedimiento para capacitar e identificar, las mudas en una empresa.
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
