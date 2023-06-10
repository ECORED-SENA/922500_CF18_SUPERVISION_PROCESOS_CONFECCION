<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 JUST IN TIME (Justo a tiempo)


    p(data-aos="fade") Con apoyo en Guerrero (2017), se define que es una filosofía Industrial de eliminación de todo lo que implique desperdicio en el proceso de producción, desde las compras hasta la distribución, y al logro de un sistema de producción ágil y suficientemente flexible que dé cabida a las fluctuaciones en los pedidos de los clientes”.     
    p.mb-4(data-aos="fade") Se puede observar la siguiente figura, que representa el concepto de JIT, basándose en el principio de enfoques simples que conducen hacia una gestión eficaz, cubriendo dos zonas: el flujo de material y el punto de control. 

    .row.justify-content-center.mb-5
      .col-md-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Ejemplo JIT
        figure
          img(src='@/assets/curso/temas/t7/fig.svg' alt='Ejemplo JIT')
        figcaption.mt-3
          p.mb-0 Nota. Tomada y adaptada de PROALNET (2016)

    p.mb-4(data-aos="fade") Esta filosofía está basada en tres conceptos base:



</template>

<script>
export default {
  name: 'Tema7',
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
