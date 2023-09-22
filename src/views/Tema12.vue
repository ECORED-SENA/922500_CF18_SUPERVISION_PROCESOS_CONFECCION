<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Implementación de sistema #[em Push-Pull]

    p.mb-4(data-aos="fade") Estos sistemas tienen ventajas y desventajas de acuerdo con la prenda que se esté realizando y el sistema de producción que se está aplicando; el push es un sistema de aplicación a la producción tradicional lineal; mientras que el sistema #[em pull] es un sistema aplicado al #[em Lean Manufacturing], a continuación, como se identifica cada uno y sus respetivas características.  

    .row.mb-2.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        .bg-blue2.h-100.p-4
          h3.t-red Sistema #[em Push]
          p.mb-0 Es producir sin que el cliente te pida, es decir, se realizan previsiones, sin embargo, el #[em push] tiene mayores inventarios por lo tanto un costo financiero alto, mejora el manejo de la información y realiza constantemente prendas de vestir con el fin de no quedarse sin stock para atender los pedidos.
      .col-lg-5.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t12/img.png' alt='')
    
    .row.mb-5.justify-content-center
      .col-lg-5.order-lg-1.order-2.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t12/img2.png' alt='')
      .col-lg-7.order-lg-2.order-1.mb-4(data-aos="fade-left")
        .bg-1.p-4
          h3.t-red Sistema #[em Pull]
          p Es cuando la materia prima se reemplaza en el proceso al mismo ritmo que se confecciona; es decir, la materia prima no se empuja por el contrario se jala y se indica cuándo se necesita más materia prima entre módulos y procesos separados; este proceso permite simplificar las ordenes de aprovisionamiento a los proveedores, reduciendo el inventario y consiguiendo que cada operario produzca las necesidades reales de ese momento, facilita el flujo continuo estimulando la efectividad de métodos y la reducción de inventarios facilitando la localización de procesos con acumulación de producción y defectos de calidad. 
          p.mb-0 El #[em Pull] System reduce el stock, reduce el exceso de producción incompleta, además, permite que los pedidos del cliente se realicen en un periodo de tiempo más corto, optimizando la cadena productiva y reduciendo el #[em lead time].

    
    .row.fondo-gris.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          h5.mb-4(data-aos="fade") Las etapas según Sánchez (2010, p.74), en las que se divide la implantación del #[em pull] son las siguientes:

          .col-lg-10
            PasosA.color-acento-contenido.mb-5(tipo="n" data-aos="fade-down")
              .row.align-items-center.justify-content-center.justify-content-md-start
                .col-md-7.mb-4.mb-md-0.order-2.order-md-1
                  p Representación del value #[em stream mapping]; es decir, la situación de la planta y las características a organizar del proceso.
                .col-lg-2.col-md-3.col-7.order-1.order-md-2.mb-3.mb-md-0
                  img.px-lg-3(src='@/assets/curso/temas/t12/ico1.svg', alt='')
              .row.align-items-center.justify-content-center.justify-content-md-end
                .col-lg-2.col-md-3.mb-3.mb-md-0.col-7
                  img.px-lg-3(src='@/assets/curso/temas/t12/ico2.svg', alt='')
                .col-md-7.text-left
                  p Entrega de materia prima e insumos para los módulos de producción, responde a preguntar en que cantidad y de qué manera se van a transportar a la planta.
              .row.align-items-center.justify-content-center.justify-content-md-start
                .col-md-7.mb-4.mb-md-0.order-2.order-md-1
                  p Retirada de la producción confeccionada y de qué manera se retira o se lleva al CEDI.
                .col-lg-2.col-md-3.col-7.order-1.order-md-2.mb-3.mb-md-0
                  img.px-lg-3(src='@/assets/curso/temas/t12/ico3.svg', alt='')


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
            .col-lg-6.mb-4(data-aos="fade-right")
              .tabla-a.t12.color-acento-contenido.mb-5 
                table
                  caption.mt-3 
                    p.mb-0 Nota. Tomado de Pérez J, 
                      em et al 
                      | (2011). 
                  thead
                    tr
                      th CRITERIOS DE #[em PUSH] Y #[em PULL]
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
            .col-lg-6.d-none.d-lg-block.mb-4(data-aos="fade-left")
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
