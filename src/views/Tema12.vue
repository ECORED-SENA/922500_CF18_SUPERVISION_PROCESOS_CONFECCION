<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Implementación de sistema Push-Pull	

    p.mb-4(data-aos="fade") Estos sistemas tienen ventajas y desventajas de acuerdo con la prenda que se esté realizando y el sistema de producción que se está aplicando; el push es un sistema de aplicación a la producción tradicional lineal; mientras que el sistema pull es un sistema aplicado al Lean Manufacturing, a continuación, como se identifica cada uno y sus respetivas características.  

    .row.mb-2
      .col-md-7.mb-4(data-aos="fade-right")
        .bg-blue2.h-100.p-4
          h3.t-red Sistema Push
          p.mb-0 Es producir sin que el cliente te pida, es decir, se realizan previsiones, sin embargo, el push tiene mayores inventarios por lo tanto un costo financiero alto, mejora el manejo de la información y realiza constantemente prendas de vestir con el fin de no quedarse sin stock para atender los pedidos.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t12/img.png' alt='')
    
    .row.mb-5
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t12/img2.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        .bg-1.p-4
          h3.t-red Sistema Pull
          p Es cuando la materia prima se reemplaza en el proceso al mismo ritmo que se confecciona; es decir, la materia prima no se empuja por el contrario se jala y se indica cuándo se necesita más materia prima entre módulos y procesos separados; este proceso permite simplificar las ordenes de aprovisionamiento a los proveedores, reduciendo el inventario y consiguiendo que cada operario produzca las necesidades reales de ese momento, facilita el flujo continuo estimulando la efectividad de métodos y la reducción de inventarios facilitando la localización de procesos con acumulación de producción y defectos de calidad. 
          p.mb-0 El Pull System reduce el stock, reduce el exceso de producción incompleta, además, permite que los pedidos del cliente se realicen en un periodo de tiempo más corto, optimizando la cadena productiva y reduciendo el lead time.

    
    .row.fondo-gris.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          h5.mb-4(data-aos="fade") Las etapas según Sánchez (2010, p.74), en las que se divide la implantación del pull son las siguientes:

          .col-md-10
            PasosA.color-acento-contenido.mb-5(tipo="n" data-aos="fade-down")
              .row.align-items-center
                .col-md-7.mb-4.mb-md-0
                  p Representación del value stream mapping; es decir, la situación de la planta y las características a organizar del proceso.
                .col-md-2
                  img.px-md-3(src='@/assets/curso/temas/t12/ico1.svg', alt='')
              .row.align-items-center.justify-content-end
                .col-md-2.mb-4.mb-md-0
                  img.px-md-3(src='@/assets/curso/temas/t12/ico2.svg', alt='')
                .col-md-7
                  p Entrega de materia prima e insumos para los módulos de producción, responde a preguntar en que cantidad y de qué manera se van a transportar a la planta.
              .row.align-items-center
                .col-md-7.mb-4.mb-md-0
                  p Retirada de la producción confeccionada y de qué manera se retira o se lleva al cedi
                .col-md-2
                  img.px-md-3(src='@/assets/curso/temas/t12/ico3.svg', alt='')


          h5.mb-5(data-aos="fade") En la siguiente tabla, se encontrarán algunos criterios más recurrentes para identificar en un sistema de producción, la aplicación de 
            em push 
            | o 
            em pull.

          .row
            .col-12   
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Tabla 5.] Criterios sistema de producción la aplicación de 
                  em push 
                  | y 
                  em pull
            .col-md-6.mb-4(data-aos="fade-right")
              .tabla-a.t12.color-acento-contenido.mb-5 
                table
                  caption.mt-3 
                    p.mb-0 Nota. Tomado de Pérez J, 
                      em et al 
                      | (2011). 
                  thead
                    tr
                      th CRITERIOS DE PUSH Y PULL
                  tbody    
                    tr
                      td 
                        p.mb-0 
                          b 1. 
                          | Características de los clientes.
                    tr      
                      td 
                        p.mb-0 
                          b 2. 
                          | Clasificación de los ciclos de producción.
                    tr 
                      td 
                        p.mb-0 
                          b 3. 
                          | Confiabilidad de proveedores.
                    tr 
                      td 
                        p.mb-0 
                          b 4. 
                          | Espacio de almacenamiento.
                    tr 
                      td 
                        p.mb-0 
                          b 5. 
                          | Flujo de información.
                    tr 
                      td 
                        p.mb-0 
                          b 6. 
                          | Liberación de las órdenes de producción.
                    tr 
                      td 
                        p.mb-0 
                          b 7. 
                          | Lotes de producción.
                    tr 
                      td 
                        p.mb-0 
                          b 8. 
                          | Nivel de trabajo en curso.
                    tr 
                      td 
                        p.mb-0 
                          b 9. 
                          | Niveles de inventario.
                    tr 
                      td 
                        p.mb-0 
                          b 10. 
                          | Órdenes de fabricación.
                    tr 
                      td 
                        p.mb-0 
                          b 11. 
                          | Planificación de la demanda.
                    tr 
                      td 
                        p.mb-0 
                          b 12. 
                          | Tipo de productos.
                    tr 
                      td 
                        p.mb-0 
                          b 13. 
                          | Utilización de las maquinarias.
                    tr 
                      td 
                        p.mb-0 
                          b 14. 
                          | Variabilidad de la demanda.
            .col-md-6.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t12/img3.png' alt='')
    


      

</template>

<script>
export default {
  name: 'Tema12',
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
