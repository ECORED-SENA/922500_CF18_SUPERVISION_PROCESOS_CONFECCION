<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 KANBAN

    
    
    
    p(data-aos="fade") Matías (2013), argumenta que las tarjetas se adjuntan como identificación de contenedores o envases de los correspondientes materiales o productos, de forma que cada contenedor estará identificado con su tarjeta y la cantidad que refleja la misma es la que debe tener el envase o contenedor.
    h5.mb-4(data-aos="fade") Kanban apunta a la consecución de diferentes objetivos como son: 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-10 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold a
            | Contribuir al proceso de producción disminuyendo la sobreproducción como también la sobre transportación de materiales.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold b
            | Tener un control de inventarios a partir de la información visual que se proporciona el departamento de producción.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold c
            | Reducir el inventario de producto en proceso y terminado.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold d
            | Contribuir con la reducción de espacios de almacenamiento y el coste que esto genera.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold e
            | Produce oportunidades de mejora, en tanto que visibiliza problemas o situaciones que a simple visto no se ven.

    p.mb-4(data-aos="fade") En la siguiente figura  se puede observar el esquema del sistema Kanban.
    
    .row.fondo-curuba.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-10(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Esquema de Kanban
            figure
              img(src='@/assets/curso/temas/t8/fig.svg' alt='La figura presenta un un esquema Kanban y cada uno de sus procesos.')
            figcaption.mt-3 Nota. Tomado y adaptado de Hernández y Vizán (2013). 
    
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Para realizar una ampliación conceptual se sugiere leer el Capítulo 3 – Módulo III del libro Lean Manufacturing, la evidencia de una necesidad, el cual se encuentra en el material complementario


</template>

<script>
export default {
  name: 'Tema8',
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
