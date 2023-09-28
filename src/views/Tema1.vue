<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Pensamiento #[em Lean Manufacturing]
    
    
    .row.fondo-t1.align-items-center.pb-5 
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.mb-2
            .col-lg-8.mb-4(data-aos="fade-right")
              p Esta filosofía está basada en el concepto de “desperdicio” o “mudas”, como fundamento principal entendida como aquellas acciones o actividades inútiles, ociosas, o superfluas que no son significativas para el buen desarrollo de la productividad en la empresa, es decir, se concluye que la reducción de residuos es un mecanismo efectivo para incrementar la rentabilidad.
              .cajon.color-secundario.p-4.mb-5
                p.mb-0 Aplicar un sistema Lean para eliminar los residuos requiere inicialmente la identificación de situaciones que generan o no valor al proceso, y luego identificar los tres tipos específicos de residuos a saber, conocidos como las 3Mu (Muda, Mura y Muri), para lograr cambios organizacionales en los procesos de diseño, desarrollo y manufactura a partir de las prácticas de trabajo.
              h5 Según Hubbard (2010), se puede definir estos desperdicios así:  
            .col-lg-4.d-none.d-lg-block.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t1/img.png' alt='')

          .row.justify-content-center.mb-5
            .col-lg-3.col-md-6.text-center.mb-3.mb-lg-0(data-aos="fade-down")
              .h-100.bg-1.tarjeta
                .bg-color-primario.p-4.py-3.border-radius-top
                  h4.mb-0 Muda
                .bg-1.p-4.border-radius-bottom
                  p.mb-0 Son todos los recursos improductivos resultantes del desaprovechamiento del talento y potencial humano, deficiencia en control de calidad, inadecuado mantenimiento de máquinas y equipo, fallas en el transporte de materias primas o en movilización del producto.
            .col-lg-3.col-md-6.text-center.mb-3.mb-lg-0(data-aos="fade-down")
              .h-100.bg-1.tarjeta
                .bg-color-primario.p-4.py-3.border-radius-top
                  h4.mb-0 Mura 
                .bg-1.p-4.border-radius-bottom
                  p.mb-0 Tiene que ver con inconsistencia en el desempeño de las actividades, cuyo abordaje requiere una visión sistémica de la organización y sus procesos, para identificar fallos, defectos, no conformidades e incumplimientos.
            .col-lg-3.col-md-6.text-center.mb-3.mb-lg-0(data-aos="fade-down")
              .h-100.bg-1.tarjeta
                .bg-color-primario.p-4.py-3.border-radius-top
                  h4.mb-0 Miri
                .bg-1.p-4.border-radius-bottom
                  p.mb-0 Excesos, sobrecargas capaces de generar altos niveles de estrés y/o esfuerzos no razonables; estos desperdicios se relacionan directamente con cuellos de botella y tiempos muertos, pudiendo en buena medida evitarse mediante el mapeo, mejora y estandarización de los procesos.

          .fondo-bloque.p-4.mb-5(data-aos="fade-down")
            .row 
              .col-md-2.px-lg-4.mb-3.mb-md-0
                img.px-lg-4.pe-4.pe-md-0.m-auto(src='@/assets/curso/temas/t1/ico1.svg' alt='' style="max-width: 155px;")
              .col-md-10
                p Implementar acciones de reducción de residuos basadas en la metodología Lean genera algunos beneficios:
                ul.lista-ul--color.color-azul
                  li.mb-1 
                    i.fas.fa-circle
                    | Facilita la cultura de mejoramiento continuo donde la reiteración de eventos se traduce en competitividad.
                  li.mb-1
                    i.fas.fa-circle
                    | Asegura menores costes.
                  li 
                    i.fas.fa-circle
                    | Genera mayor competitividad y procesos más flexibles y eficaces de productividad.

          .col-lg-5.col-10.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/img2.png' alt='')
          .col-lg-7.mb-4(data-aos="fade-left")
            p El reto en la implementación es generar una cultura organizacional que suscite la generación de ideas y eliminación continua de desperdicios encarnada en cada uno de los integrantes de la organización.
            p La implementación de herramientas de un sistema esbelto como #[em Value Stream Mapping] (VSM), mapeo de los lugares de trabajo, el Mantenimiento Productivo Total (TPM), planes y programas que conservan el buen estado de máquinas, guías, accesorios espacios físicos, las Cinco S (5S), limpieza de los espacios de trabajo, Sistema KANBAN, estandarización del trabajo, creando procesos y procedimientos simplificados, flujo continuo de manufactura, disminuyendo las unidades a un mínimo inclusive, a una reducción de #[em Setup], disminuir arreglos y reprocesos, sistema de prueba y error, para simplificar los pasos en el flujo de la producción, hacen que este medio de ensamblar prendas de vestir sea uno de los más llamativos en el entorno textil confección.

          .col-md-10
            .bloque-texto-a.color-secundario.p-4
              .row.m-0.align-items-center.justify-content-between
                .col-lg-4.mb-4.mb-lg-0
                  img(src='@/assets/curso/temas/t1/img3.png' alt='')
                .col-lg-8
                  .bloque-texto-a__texto.p-4
                    p Es un avance vertiginoso de soporte para la industria textil confección en la búsqueda del progreso de este sector productivo, por lo tanto, el reto es implementar y concientizar al recurso humano de entrar a un proceso de cambio permanente y mejora continua.
                    p Para realizar una ampliación conceptual, se sugiere leer el Capítulo 1 del libro 
                      em.fw-bold Lean Manufacturing, 
                      b la evidencia de una necesidad, 
                      | el cual se encuentra en el material complementario.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
