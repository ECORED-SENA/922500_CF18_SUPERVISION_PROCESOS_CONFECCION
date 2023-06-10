<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 JIDOKA

    .row.mb-2
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t9/img.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        p Es un término japonés, implementado en la metodología de Lean Manufacturing, que significa automatización con un toque humano o autonomación. Este concepto define el sistema de control autónomo y se basa en un control de calidad a lo largo de la línea de producción, con el propósito de evidenciar productos defectuosos en la línea y parar la producción si se hace necesario, y retirar manual o automáticamente dichos productos y así cortar la causa del problema de raíz; es decir está basado en la producción de piezas con “cero defectos” y la fabricación de productos con el 100 % de alta calidad.
        h5 Esta estrategia genera un proceso de inspección de calidad, donde empleados de la línea y los inspectores de calidad se fusionan sin distinción; logrando que cada operario garantice la calidad de su trabajo, controlando con mayor interés el proceso que el producto, erradicando defectos en la producción.

    .cajon.color-secundario.p-4.mb-5(data-aos="fade-down")
      p.mb-0 Según Matías (2013), una máquina autonomizada es aquella que está conectada a un mecanismo de detención automático para prevenir la fabricación de productos defectuoso, de esta forma se incorpora a las máquinas la inteligencia humana. La autonomación determina el sentido del uso de la máquina. Cuando opera normalmente no es necesario ningún operario; sólo cuando la operación se detiene por una situación anormal, esta requiere atención del operario, y como resultado, un solo operario podrá atender varias máquinas reduciendo el número de operarios en contacto con la maquina e incrementando el rendimiento de la producción.

    p.mb-4(data-aos="fade") La siguiente tabla, muestra los pasos progresivos y técnicas concretas que se pueden ir aplicando para alcanzar una autonomación completa en las máquinas.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4.] Las 10 etapas de la automatización (Jidoka)
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption.mt-3 
              p.mb-0 Nota. Tomado de Hernández y Vizán (2013). 
            thead
              tr
                th.colum-10 FASE
                th DESCRIPCIÓN
                th.colum-21 Carga Hombre/máquina
            tbody    
              tr
                td.text-center 1
                td 
                  p.mb-0.fw-bold Autonomación del proceso
                  p.mb-0 Transferir esfuerzo de operario en esfuerzo de la máquina. Ejemplo: Atornillado automático.
                td.text-center(rowspan="3") Operaciones simultáneas operario/ maquina.
              tr
                td.text-center 2
                td 
                  p.mb-0.fw-bold Autonomación de sujetar
                  p.mb-0 Sustitución de apriete manual por sistemas accionados mecánicamente. El operario solo carga el útil.
              tr
                td.text-center 3
                td 
                  p.mb-0.fw-bold Autonomación de alimentación
                  p.mb-0 Alimentación automática. El operario solo interviene para parar la alimentación en caso de errores.
              tr
                td.text-center 4
                td 
                  p.mb-0.fw-bold Autonomación de paradas
                  p.mb-0 El sistema de alimentación para correctamente la máquina al final del proceso. El operario puede abandonar el proceso o máquina.
                td.text-center(rowspan="4") Tareas de operario.
              tr
                td.text-center 5
                td 
                  p.mb-0.fw-bold Autonomación de retornos 
                  p.mb-0 Finalizado y parado el proceso correctamente, el sistema retorna a situación de inicio sin ayuda del operario. 
              tr
                td.text-center 6
                td 
                  p.mb-0.fw-bold Autonomación de retirada de piezas
                  p.mb-0 Finalizado el proceso y retorno, la pieza es retirada automáticamente de forma que la siguiente pieza puede ser cargada sin necesidad de manipular la anterior.
              tr
                td.text-center 7
                td 
                  p.mb-0.fw-bold Mecanismos anti-error (Poka-Yoke)
                  p.mb-0 Para prevenir transferencia de piezas defectuosas al proceso siguiente se instalan dispositivos para detectar errores, parar la producción y alertar al operario.
              tr
                td.text-center 8
                td 
                  p.mb-0.fw-bold Autonomación de carga 
                  p.mb-0 La pieza es cargada sin necesidad de operario. El proceso debe tener capacidad de detectar problemas y parar la operación. 
                td.text-center(rowspan="3") Tareas máquina.
              tr
                td.text-center 9
                td 
                  p.mb-0.fw-bold Autonomación de inicio 
                  p.mb-0 Completados los pasos anteriores la máquina debe empezar a procesar piezas de forma autónoma. Se deben prever problemas de seguridad y calidad. 
              tr
                td.text-center 10
                td 
                  p.mb-0.fw-bold Autonomación de transferencia
                  p.mb-0 Se enlazan operaciones mediante sistemas de transferencia que eviten la intervención del operario.



</template>

<script>
export default {
  name: 'Tema9',
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
