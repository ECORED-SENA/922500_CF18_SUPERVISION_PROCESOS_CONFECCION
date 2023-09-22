<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 (SMED) Cambio Rápido De Modelo

    p(data-aos="fade") SMED significa “Cambio de modelo en minutos de un sólo dígito”. Son herramientas de optimización de procesos productivos a partir de la implementación de herramientas y técnicas dirigidas a minimizar los tiempos de cambio de formato de las maquinas, pero igualmente se ha implementado con algunas modificaciones para las diferentes operaciones que se realizan en el proceso. La técnica de reducción de tiempos se da basada en el camino de modelo en menos de 10 minutos; implementándola desde la última hasta la primera pieza buena en un tiempo inferior a 10 minutos.
    h5.mb-4(data-aos="fade") Los objetivos de SMED, están basados en la reducción de tamaño de lotes, espacio, coste unitario por piezas, #[em lead time] e inventario, pero se pueden definir en estos cuatro elementos:
    
    .row.mb-5(data-aos="fade-down")
      SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
        .row.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/ico1.svg' alt='')
            .tarjeta.bg-1.p-4.text-center
              h4 FLEXIBILIDAD
              p.mb-0 Basada en la fabricación de mayor número de referencias, por la disminución de tiempo de cambio y por la facilidad de producción de series cortas, se posibilita un mejor ajuste a la demanda.
        .row.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/ico2.svg' alt='')
            .tarjeta.bg-5.p-4.text-center
              h4 CALIDAD
              p.mb-0 Al producir series pequeñas, se evidencia más fácilmente algún defecto, disminuyendo así el coste de no calidad.
        .row.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/ico3.svg' alt='')
            .tarjeta.bg-1.p-4.text-center
              h4 PRODUCTIVIDAD
              p.mb-0 Se genera una producción mayor con menos recurso, eliminando tiempo de cambio y reduciendo el coste de mano de obra.
        .row.h-100
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t5/ico4.svg' alt='')
            .tarjeta.bg-5.p-4.text-center
              h4 CAPACIDAD
              p.mb-0 Aumento la disponibilidad de la maquina por la disminución de tiempo de cambio, generando así mayor capacidad de producción.


    h3.t-red(data-aos="fade") Condiciones para implementar SMED
    p.mb-4(data-aos="fade") Para la implementación de este sistema, se hace necesaria una serie de condiciones para lograr disminuir los tiempos de preparación, como son las siguientes:

    .fondo-bloque.p-4.mb-5(data-aos="fade-down")
      .row 
        .col-md-2.px-lg-4.mb-3
          img.px-lg-4.m-auto(src='@/assets/curso/temas/t5/ico5.svg' alt='' style="max-width: 155px;")
        .col-md-10
          ul.lista-ul--color.color-azul.mb-0
            li.mb-0 
              i.fas.fa-circle
              | Analizar y concientizar a la organización la importancia de disminuir los tiempos de preparación.
            li.mb-0 
              i.fas.fa-circle
              | Generar procesos de capacitación y entrenamiento a los empleados sobre los efectos de reducir costos mediante reducción de tiempos de preparación y sus resultados en los procesos de incrementar la productividad.
            li.mb-0 
              i.fas.fa-circle
              | Cambiar los paradigmas en relación con la disminución de tiempos de preparación.
            li.mb-0 
              i.fas.fa-circle
              | Crear una cultura nueva de reducción de tiempos de preparación, así como tiempos del proceso global productivo, desde la implementación de técnicas y medios para el análisis y mejora de los procedimientos contextualizados y creados a partir de la experiencia de las plantas, equipos y operarios.


    h3.t-red(data-aos="fade") Implementación de la metodología SMED
    p.mb-4(data-aos="fade") La implementación de la metodología consta de 4 etapas: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Etapas metodología SMED
        img(src='@/assets/curso/temas/t5/fig.svg' alt='Imagen que presenta las 4 etapas de la implementación: proceso de cambio actual, análisis, introducción de mejoras y nuevo cambio.')

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4(data-aos="fade")
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2.text-white 1
          h5 Etapa preliminar  
          p Se sugiere realizar una serie de actividades previas para analizar y conocer  los movimientos inútiles de los operarios y sobre esto poder generar las mejoras, y una de ellas es grabar y generar un archivo de video para logar este objetivo donde se permita:
          ul.lista-ul--color.color-azul.mb-0
            li.mb-0 
              i.fas.fa-circle
              | Grabar y registrar el tiempo de cambio que posibilite información sobre la medida y variabilidad.
            li.mb-0 
              i.fas.fa-circle
              | Generar un documento escrito sobre posibles acusas de variabilidad.
            li.mb-0 
              i.fas.fa-circle
              | Entrevistar a los operarios y generar mediciones de las actuales condicione con cronómetros.
            li.mb-0 
              i.fas.fa-circle
              | Analizar el video con los trabajadores y generar un archivo fotográfico.
      .col-lg-10.mb-4(data-aos="fade")
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2.text-white 2
          h5.mb-0 Análisis 
          h5 Separación de las tareas internas y externas
          p Las tareas internas son aquellas que se realizan durante un paro de máquinas y las externas son aquellas que se ejecutan durante la operación normal de las máquinas. 
          p.mb-0 En esta fase se hace necesario tener claridad de dichas tareas, así que se sugiere realizar un listado secuencial de esas actividades, analizar cuáles son internas o externas y detectar las dificultades básicas en la rutina de trabajo. Esta lista de comprobación es un insumo importante de diagnóstico para asegurar que no hay errores en las condiciones de operación.
      .col-lg-10.mb-4(data-aos="fade")
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2.text-white 3
          h5.mb-0 Introducción de mejoras
          h5 Conversión de tareas internas a externas
          p Después de realizar una minuciosa revisión de las actividades internas, se genera el proceso de conversión pertinente, donde aquellas acciones de preparación  se realicen fuera de la máquina en funcionamiento y así lograr el cambio,  para que cuando ésta se pare, se haga el cambio necesario, de modo de que se pueda comenzar a funcionar rápidamente, generando así la eliminación del desperdicio.
          p.mb-0 Generalmente las operaciones de ajuste, entendidas como las no conformidades que en el proceso de ensayo. Error - prueba se da hasta que el producto llegue a las especificaciones, representan del 50 a 70 % del tiempo de preparación interna, por eso se debe trabajar en la eliminación de ajustes, definiendo un espacio estándar para acomodar los diferentes herramientas, troqueles, matrices, punzones, utillajes, etc.
      .col-lg-10(data-aos="fade")
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2.text-white 4
          h5.mb-0 Nuevo cambio 
          h5 Perfeccionar las tareas internas y externas 
          p.mb-0 La optimización de las operaciones internas y externas requiere es un proceso constante, creativo y riguroso, el diseño de dispositivos, elementos de sujeción, y de incluir acciones novedosas para logara perfeccionar los aspectos asociados a la preparación y lograr la mejora estandarizando acciones.


    .row.mb-5
      .col-md-4.mb-4.pe-md-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img.png' alt='')
      .col-md-8.mb-4.ps-md-0(data-aos="fade-left")
        .bg-blue5.p-4.p-md-5.h-100.align-items-center
          p La implementación de estas etapas contribuye a transformar el paradigma basado en el supuesto de que los cambios útiles/preparaciones son demasiado difícil y necesitan mucho tiempo. Lo importante es que cada empresa de conozca con claridad todas las actividades de “Set-up” interno y externo.
          p.mb-0 Para realizar una ampliación conceptual se sugiere leer el Capítulo 3 – Módulo IV del libro 
            b #[em Lean Manufacturing], la evidencia de una necesidad, 
            | el cual se encuentra en el material complementario.



</template>

<script>
export default {
  name: 'Tema5',
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
