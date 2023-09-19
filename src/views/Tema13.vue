<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 #[em Lean Six Sigma]

    .row.fondo-rosa.align-items-center.py-5.mb-5 
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-7.mb-4(data-aos="fade-right")
            p De acuerdo con Snee (2010), es un enfoque de mejora que ha tenido gran acogida gracias a su capacidad para dar solución efectiva a muchos de los problemas que enfrentan las organizaciones hoy (p.9). Por esta razón, grandes empresas a nivel mundial han implementado este enfoque como una estrategia de negocios para mejorar la calidad de los productos y servicios, mejorar la eficiencia de los procesos, aumentar la satisfacción del cliente y aumentar la rentabilidad según Kumar (2006).
            p #[em Six Sigma] es una metodología compuesta por cinco fases de acuerdo con Antony et al (2005, p.860) son: “Definir, Medir, Analizar, Mejorar y Controlar, comúnmente llamada DMAIC, por sus siglas en inglés (
                em Define, Measure, Analize, Improve, Control
                | ), y tiene como objetivo aumentar la capacidad de los procesos, de tal forma que estos generen solo 3,4 defectos por millón de oportunidades (DPMO), con lo que los errores o fallas se hacen prácticamente imperceptibles para el cliente”. 
          .col-lg-5.col-10.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t13/img.png' alt='')

    
    h3.t-red(data-aos="fade") Ejecución de #[em Six sigma] 
    p.mb-4(data-aos="fade") Las empresas de confección ejecutan y hacen seguimiento a los proyectos previamente seleccionados, por las otras herramientas que se implementan en Lean Manufacturing y se utiliza la metodología DMAIC de Six Sigma, es decir, Definir, Medir, Analizar, Mejorar y Controlar, en la siguiente figura se presenta el proceso genérico para la ejecución de un proyecto LSS (Lean Six sigma) (ver figura).
    
    .bg-1.p-4.mb-5
      .row.justify-content-center   
        .col-lg-10(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 6.] Proceso genérico de la ejecución de un proyecto LSS
          figure
            img(src='@/assets/curso/temas/t13/fig6.svg' alt='Se presenta el proceso genérico de una ejecución de un proyecto LSS, desde el inicio hasta el fin, pasando por las etapas definir, medir, analizar, mejorar y controlar.')
          figcaption.mt-3 Nota. Tomado de Felizzola, et al (2014). 

    .row.justify-content-center
      .col-lg-10
        .bg-blue.p-4     
          .row 
            .col-md-2
              img(src='@/assets/curso/temas/t13/ico.svg' alt='')
            .col-md-10
              p 
                b El Lean Six Sigma 
                | plantea que al ejecutar los procesos correctamente para el desarrollo de los proyectos puede identificar los requisitos del cliente, a esta etapa se le puede llamar (
                b definir
                | ), determinar los procesos que influyen en las características críticas de calidad (
                b medir
                | ), identificar las causas que provocan los defectos (
                b analizar
                | ), definir los problemas y diseñar un proyecto para corregirlos (
                b mejorar
                | ), por último, verificar los resultados y repetir el ciclo de la mejora continua (
                b controlar
                | ). 
              p.mb-0 La metodología propone una base clara para averiguar lo que está causando los defectos dentro de una planta de confección y establece los cambios necesarios para que funcionen mejor los proyectos LSS alineados con la estrategia de la empresa; esto con el fin de planear y programar la producción, enfocados en la mejora de la productividad y del compromiso de los colaboradores y su participación en proyectos LSS; y a su vez hacerlos beneficiarios de los resultados obtenidos.




</template>

<script>
export default {
  name: 'Tema13',
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
