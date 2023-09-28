<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 KANBAN

    
    .cajon.color-primario.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-8
          p De acuerdo con J. Carlos y H. Matías (2013), la definición de Kanban hace referencia a un sistema de control y programación sincronizada para producción basado en tarjetas (en japonés, Kanban), aunque pueden representarse por otro tipo de señales, afirmando que utiliza una idea sencilla basada en un sistema de tirar de la producción (#[em pull]) mediante un flujo sincronizado, continuo y en lotes pequeños, mediante la utilización de tarjetas (p. 75 ).
          p.mb-0
            b Esta estrategia de manufactura en la actualidad se ha posicionado como una herramienta vital la producción de la cantidad justa en un momento adecuado, asegurando un proceso de alta calidad; 
            | está basada en técnica de visualización de tarjetas, donde se especifican su punto de producción máximo y su punto inmediato de reposición, ayudando a tener un mejor control de inventarios. La tarjeta Kanban debe contener información de que se va a producir, la forma, la cantidad, denominación y el código de la pieza a fabricar, y la manera de transportar lo producido, el almacenamiento; por lo tanto sirven como una orden de trabajo.
        .col-lg-4.col-10
          img(src='@/assets/curso/temas/t8/img.png' alt='')
    
    
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
    
    .cajon.color-secundario.p-4.mb-5(data-aos="fade-down")
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
