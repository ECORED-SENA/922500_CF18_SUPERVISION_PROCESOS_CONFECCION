<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 HEIJUNKA

    .row.mb-2
      .col-md-7.mb-4(data-aos="fade-right")
        p Según Sánchez (2010), “es una técnica que adapta la producción a la demanda fluctuante del cliente”. (p.67) es decir, la idea es producir referencias pequeñas de muchos diseños diferentes, sin defectos en su producción en periodos de tiempo muy cortos y con cambios rápidos entre una referencia y otra, así se evita producir prendas de vestir en lotes grandes uno después del otro, sirve para planificar y nivelar las demandas durante un día o turno de trabajo. 
        .cajon.color-secundario.p-4
          p.mb-0 Es relevante entender que esta técnica mejora el cumplimiento al cliente con una producción equilibrada, llamada también nivelada; es decir, el cliente recibe las referencias producidas a medida que él lo pide y esto permite que los empleados de la empresa puedan lograr una estabilidad laboral y grupal en el desarrollo de sus procesos. Las características de producir en lotes pequeños facilitan envíos constantes al cliente y reduce totalmente el nivel de inventario de la empresa y esto permite que la flexibilidad de la plata se adapte a cualquier variación que pueda experimentar los pedidos del cliente.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t10/img1.png' alt='')


    .row.fondo-t10.align-items-center.pt-5.mb-5 
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.t-red(data-aos="fade") Sistema de producción nivelada en HEIJUNKA
            p.mb-4(data-aos="fade") Es la parte del pedido por el cliente mensual de las diferentes prendas o referencias, con la producción es posible determinar a través de fórmulas de producción las unidades a producir día a día y los tiempos de pasar de una referencia a otra, con este sistema como los lotes son más pequeños, se puede asegurar una mayor cantidad de unidades para cada referencia, con esto se aumenta la cantidad de prendas para entregarle a cada cliente; además que si en un momento determinado del día, hay un daño en una máquina y se para la producción se habrán realizado más unidades para la entrega del cliente de diferentes referencias y si se confeccionan prendas en cantidades más grandes no se habrá fabricado sino de una sola referencia y por lo tanto los clientes estarán insatisfechos.
            .bloque-texto-a.color-secundario.p-4
              .row.m-0.align-items-center.justify-content-between
                .col-lg-4.mb-4.mb-lg-0
                  img(src='@/assets/curso/temas/t10/img2.png' alt='')
                .col-lg-8
                  .bloque-texto-a__texto.p-4
                    p Este sistema de producción permite trabajar en lotes de 10 unidades y de manera más continua se entrega producción para los clientes de tal forma que permite tenerlos satisfechos con las entregas; cuando hay casos de emergencia en donde el cliente pide un cambio modelo repentinamente, si se trabaja en lo tes grandes es difícil entregarle al cliente, pues se pierde más tiempo para darle una oportuna respuesta en cambio sí se trabaja con lotes pequeños de aproximadamente 10 unidades , se dispone de mejor flexibilidad para realizar cambios de una referencia. Aplicar adecuadamente Heijunka es importante para la implantación de sistema pull en una empresa de confección; siempre y cuando las referencias de la empresa sean compatibles entre ellas con respecto a diseño y maquinaria. 
                    p.mb-0 Para aplicar Heijunka en empresas de confección, se necesitan islas de producción, mejora de proceso, reducir la sobreproducción y la combinación de procesos.


    .cajon.color-primario.p-4(data-aos="fade-down") 
      p.mb-0 Para realizar una ampliación conceptual se sugiere leer el Capítulo 3 – Módulo II del  
        em libro Lean Manufacturing, la evidencia de una necesidad
        | , el cual se encuentra en el material complementario.






</template>

<script>
export default {
  name: 'Tema10',
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
