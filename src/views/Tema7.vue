<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 #[em JUST IN TIME] (Justo a tiempo)


    p(data-aos="fade") Con apoyo en Guerrero (2017), se define que es una filosofía Industrial de eliminación de todo lo que implique desperdicio en el proceso de producción, desde las compras hasta la distribución, y al logro de un sistema de producción ágil y suficientemente flexible que dé cabida a las fluctuaciones en los pedidos de los clientes.
    p.mb-4(data-aos="fade") Se puede observar la siguiente figura, que representa el concepto de JIT, basándose en el principio de enfoques simples que conducen hacia una gestión eficaz, cubriendo dos zonas: el flujo de material y el punto de control. 

    .row.justify-content-center.mb-3
      .col-lg-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Ejemplo JIT
        figure
          img(src='@/assets/curso/temas/t7/fig.svg' alt='Imagen que presenta un ejemplo JIT.')
        figcaption.mt-3
          p.mb-0 Nota. Tomada y adaptada de PROALNET (2016)

    
    .row.fondo-t7.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") Esta filosofía está basada en tres conceptos base:
            
          .row.justify-content-center.mb-5
            .col-lg-3.col-md-6.mb-3.text-center(data-aos="fade-down")
              .h-100.bg-blue.tarjeta
                .bg-color-secundario.p-4.py-3.border-radius-top
                  h4.mb-0 #[em Shojinka]  
                .bg-blue.p-4.border-radius-bottom
                  h5 Flexibilidad en la producción
                  p.mb-0 A partir de la variación de las demandas, posibilita adecuar funciones y número de trabajadores requeridos.
            .col-lg-3.col-md-6.mb-3.text-center(data-aos="fade-down")
              .h-100.bg-blue.tarjeta
                .bg-color-secundario.p-4.py-3.border-radius-top
                  h4.mb-0 #[em Soifuku]  
                .bg-blue.p-4.border-radius-bottom
                  h5 Polivalencia del personal e innovación de ideas
                  p.mb-0 Versatilidad  de participación para generar mejoras constantes en el proceso de producción.
            .col-lg-3.col-md-6.mb-3.text-center(data-aos="fade-down")
              .h-100.bg-blue.tarjeta
                .bg-color-secundario.p-4.py-3.border-radius-top
                  h4.mb-0 #[em Jidoka]
                .bg-blue.p-4.border-radius-bottom
                  h5 Automatización  de defectos
                  p.mb-0 Dotación de mecanismos de autocontrol de calidad en los procesos productivos, para impedir en los flujos de producción entradas defectuosas.
          
          
          h3.t-red(data-aos="fade") Objetivos de JIT
          p.mb-4(data-aos="fade") El sistema Justo a tiempo se funda en cuatro objetivos esenciales. A continuación se contextualiza cada objetivo para visualizar su aplicación en la producción de una organización:

          .row.mb-5(data-aos="fade-down")
            SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
              .row.h-100
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t7/ico1.svg' alt='')
                  .tarjeta.bg-3.p-4.text-center
                    h4 Atacar los problemas fundamentales
                    p.mb-0 En el manejo y distribución de mercancías se generan una serie de problemas, por eso este objetivo está basado en atacar esta problemática, así como también todas las barreras existentes para flexibilizar y cambiar hacia un ambiente de calidad.
              .row.h-100
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t7/ico2.svg' alt='')
                  .tarjeta.bg-4.p-4.text-center
                    h4 Eliminar despilfarros
                    p.mb-0 Objetivo basado en la eliminación de los costos productos del manejo y mantenimiento, de despilfarro o desperdicio (muda) originados dentro de las operaciones. 
              .row.h-100
                .tarjeta-avatar.h-100
                  img(src='@/assets/curso/temas/t7/ico3.svg' alt='')
                  .tarjeta.bg-3.p-4.text-center
                    h4 Buscar la simplicidad de los procesos y productos
                    p.mb-0 Está basada en la generación de procesos simples que conlleven a minimizar las complejidades y posibiliten una gestión más eficaz.
              .row.h-100
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t7/ico4.svg' alt='')
                  .tarjeta.bg-4.p-4.text-center
                    h4 Diseñar sistemas para identificar problemas
                    p.mb-0 Objetivo basado en la identificación de problemas y la implementación de sistemas que generen alertas cuando exista alguno; encaminado al control total de la calidad.

          h3.t-red(data-aos="fade") Implementación del sistema JIT
          p.mb-4(data-aos="fade") La implementación de JIT requiere un compromiso esencial de la alta gerencia a largo plazo, y comprende las siguientes fases: 

          TabsA.color-primario.mb-5(data-aos="fade-down")
            .div.border-bottom-orange.bg-2.p-4(titulo="Organización")
              p Se hace necesario iniciar el proceso fundando un comité amplio donde exista representación de todos los procesos de producción como son: compras, diseño, producción, control de calidad, mantenimiento y operaciones.
            .div.border-bottom-orange.bg-2.p-4(titulo="Educación")
              p A partir de la organización se inicia el conocimiento, confianza, comprensión y fe, que se solidifica a través del proceso continuo, intenso y coherente de socialización y capacitación que inicia en la alta gerencia, pero permea a todos los integrantes de la organización, buscando que todos y cada uno comprenda, aprecie la filosofía, sus objetivos y los beneficios de implementar JIT, también debe abarcar conceptos básicos referentes a áreas tales como la importancia del cliente, el tiempo guía, el costo del inventario, y la productividad.
            .div.border-bottom-orange.bg-2.p-4(titulo="Valoración")
              p Debido a multiplicidad y etapas de desarrollo de los ambientes y procesos de las organizaciones, se hace necesario que cada uno realice un análisis partiendo del estado actual y defina de objetivos JIT y las prioridades de las actividades de mejoramiento propuestos.
            .div.border-bottom-orange.bg-2.p-4(titulo="El plan")
              p El compromiso de la alta gerencia será el primer insumo del plan, seguido del proceso educativo permanente dirigido a toda la fuerza de trabajo. Debe existir una diversidad de programas de capacitación que se articulen a los diferentes grupos y sus prioridades.
            .div.border-bottom-orange.bg-2.p-4(titulo="Seguimiento y control")
              p Este proceso será transversal a toda la implementación y capacitación y buscando que sus reglas se relacionan normal y cotidianamente con procesos de manufactura, logrando así una producción a la medida exacta de la demanda, una eliminación de desperdicios y un mejoramiento constante.


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
