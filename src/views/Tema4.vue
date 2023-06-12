<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Filosofía TPM
    
    
    .row.fondo-rosa.align-items-center.py-5.mb-5 
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-8.mb-4.mb-md-0(data-aos="fade-right")
            p Es una herramienta para mejorar la productividad ampliamente difundida en Japón y muchos países desarrollados, cuyos propósitos están encaminados básicamente a lograr unos espacios de trabajo agradables, productivos y seguros, donde cada integrante contribuya desde un trabajo en equipo con su potencialidades y busca minimizar fallos o deterioros desde la cotidianidad eliminando así toda posibilidad de pérdidas y potenciando la capacidad instalada. En Colombia, algunas empresas, confiadas en los beneficios que se pueden obtener, están implementando este sistema basado en el esquema japonés, pero con adaptaciones al medio.
          .col-md-4.mb-4.mb-md-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/t4/img.png' alt='')


    h3.t-red(data-aos="fade") Objetivos del TPM
    p.mb-4(data-aos="fade") Basados en los postulados de Cuatrecasas & Torrell, (2010), se puede definir que los objetivos del TPM se implementan desde tres aspectos: 
    
    .row.fondo-t4.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row
            .col-md-3.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/t4/img2.png' alt='')
            .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.bg-white.box-shadow.p-4 
                h4.t-red Objetivos estratégicos
                p.mb-0 Basado en la gestión del conocimiento, reducción de costos y calidad en la capacidad de respuesta, se desarrolla ventajas competitivas frente al mercado, potenciando la eficiencia del proceso de producción.
            .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.bg-white.box-shadow.p-4 
                h4.t-red Objetivos operativos
                p.mb-0 Basados en la eliminación de fallas y perdidas, maximizando la capacidad instalada de los equipos y aumentando la calidad del producto, se busca incrementar la fiabilidad de los equipos.
            .col-md-3.mb-4.mb-md-0(data-aos="fade-left")
              .h-100.bg-white.box-shadow.p-4 
                h4.t-red Objetivos organizativos
                p.mb-0 Generando un ambiente de trabajo agradable, productivo y creativo, se fortalece el trabajo en equipo y autónomo de grupos generando ideas de mejora.


    h3.t-red(data-aos="fade") Pilares de TPM
    p.mb-4(data-aos="fade") La cultura de TPM se implementa en todos los procesos de la organización y sus pilares están conformados por procesos, el TPM funda su sistema de mejora continua en 8 pilares, cuya implementación garantiza la obtención de mejora en los procesos productivos de la organización, como se observa a continuación.

    .row.mb-2
      .col-md-7.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Mantenimiento autónomo")
            .col-md-11
              p En el mercado están hechas de diferentes fibras como son Pilar basado en el trabajo colaborativo para conservar y mejorar las condiciones del equipo, involucrando acciones de respeto hacia las condiciones de operación y conservación de las áreas de trabajo, generando una cultura  de áreas de trabajos libres de desorden, suciedad y libres de contaminación. Se busca integrar las acciones de operador, con el operario de mantenimiento contribuyendo articuladamente a la eficacia del equipo. 
          .row(titulo="Mantenimiento planificado o progresivo")
            .col-md-11
              p Uno de los elementos más significativos en la búsqueda de beneficios en una organización, está asociado al mantenimiento preventivo, planificado o programado; su propósito es eliminar las dificultades de máquinas o equipos  a partir de acciones de mejora, preventivas y predictivas, contribuyendo a eliminar las causas de deterioro acelerado y avanzando a la meta de “cero averías” en la planta de confección.
          .row(titulo="Prevención de mantenimiento")
            .col-md-11
              p Este pilar está fundado en la teoría de la fiabilidad, a partir de actividades de mejora que se realizan  a los equipos, buscando reducir los costos de mantenimiento durante su explotación. Está basado en implementar lo aprendido en las máquinas, equipos y procesos nuevos a partir del análisis de  datos sobre frecuencias de averías y reparaciones.
          .row(titulo="Polivalencia y desarrollo de habilidades")
            .col-md-11
              p Los procesos de educación, formación y adestramiento, son claves e imprescindibles para los cambios continuos que se generan a nivel empresarial. Este pilar se basa en propósito de aumentar las capacidades y desarrollar habilidades en los empleados a partir dichas estrategias formativas.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img3.png' alt='')

    .row.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img4.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Mantenimiento de calidad ")
            .col-md-11
              p Basada en garantizar la calidad del producto o servicio de la organización, enmarcada en la reducción de la variabilidad a partir del control de las condiciones de los equipos y los procesos que están directamente relacionados e impactan  la calidad.
          .row(titulo="Actividades de departamentos administrativos y de apoyo")
            .col-md-11
              p Pilar basado en que las mejoras permeen la gerencia de los diferentes departamentos administrativos y a los diferente líderes de soporte, con el objetivo de que generen elementos para brindar recomendaciones y colaboren con el personal de mantenimiento para mitigar gastos, eliminar desperdicios y mejorar la calidad; partiendo del equilibrio entre las actividades primarias de la cadena de valor y las actividades de soporte.
          .row(titulo="Mejoras enfocadas")
            .col-md-11
              p Pilar basado en maximizar la efectividad global de la planta,  del proceso y del equipo, a través del proceso sistemático de eliminación de grandes pérdidas y despilfarros de las plantas de confección. Este pilar propone generar mejoras sin inversiones económicas, sino a partir del cambio de percepción de los integrantes de la organización, que le permita reconocer abiertamente las dificultades, crear equipos de trabajo, promover habilidades de compartir, comunicarse, apoyarse, genera liderazgos visibles y fomentar la autodisciplina.
          .row(titulo="Gestión de seguridad y entorno")
            .col-md-11
              p Basado en el análisis que realiza la empresa para la correcta operatividad de la planta y la gestión integral de seguridad, para prevención de riesgos y el bienestar de sus trabajadores. Transita en la ruta de “cero accidentes”.
    
    h3.t-red.mb-4(data-aos="fade") Indicadores de control del TPM
    
    .row.mb-3
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img5.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        p Por medio de ellos se pueden conocer los resultados que está obteniendo la empresa con la implementación de este programa. Los índices deben reflejar con precisión el esfuerzo que se realiza en TPM, se deben medir frecuentemente el proceso del desarrollo del programa e ir implementando nuevas estrategias en función de los resultados para potenciar los objetivos esperados.
        .cajon.color-secundario.p-4.mb-5
          h5.mb-0 Los objetivos TPM deben integrarse con los objetivos generales de la empresa, y deben ser conocidos, entendidos y permanentemente presentados a todo el personal de la compañía, para unir esfuerzos y alcanzar dichas metas. En la siguiente tabla se puede observar esta integración.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2.] Integración TPM con objetivos empresariales
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.colum-10 SIGLA
                th.colum-21 INDICADOR
                th EN FUNCIÓN DE
            tbody    
              tr
                td.text-center P
                td.text-center Productividad
                td Eficiencia con que se ejecuta la labor (Eff-OEE).
              tr
                td.text-center Q
                td.text-center Calidad
                td Nivel de calidad del producto o labor ejecutada (NC – SPR).
              tr
                td.text-center C
                td.text-center Costos
                td Costo necesario para realizar un producto o suministrar un servicio (H-H).
              tr
                td.text-center D
                td.text-center Entrega 
                td Tiempos de entrega de a los clientes externos e internos (LOR – días/pedido).
              tr
                td.text-center M
                td.text-center Motivación 
                td Cantidad de mejoramientos que se implementan. 
              tr
                td.text-center S
                td.text-center Seguridad 
                td Cantidad de accidentes y cuasi accidentes que se presentan en la organización.
              tr
                td 
                td 
                td 
              tr
                td.text-center MTTO
                td.text-center Mantenimiento
                td Paros de maquinaria y tiempo perdido de producción (Hrs/mes).
              tr
                td.text-center 5S
                td.text-center 5S
                td Criterio de evaluación de 5S.


    .bg-blue4.p-4.mb-5
      h3.t-red(data-aos="fade") Programas de mantenimiento
      p.mb-4(data-aos="fade") Para TPM la actividad de mantenimiento es clave para generar confiabilidad en los equipos de producción y poder alcanzar las metas generales de productividad. Se deben incluir todos los tipos de mantenimiento: preventivo, correctivo, programado, predictivo y las demás técnicas modernas, según la maquinaria que se tenga a cargo. Conozcamos dos de ellos.
      .row.justify-content-center
        .col-md-4.text-center.mb-4(data-aos="fade-down")
          .bg-color-primario.p-4.py-3.border-radius-top
            h4.mb-0 Mantenimiento autónomo
          .bg-1.p-4.border-radius-bottom
            p.mb-0 Es uno de los pilares básicos de TPM con el cual se designa el mantenimiento realizado directamente por el departamento de producción o en un plano más general por el propio usuario de cualquier tipo de equipo (incluso de oficina).
        .col-md-4.text-center.mb-4(data-aos="fade-down")
          .bg-color-primario.p-4.py-3.border-radius-top
            h4.mb-0 Control visual 
          .bg-1.p-4.border-radius-bottom
            p.mb-0 Son medios visuales que indican las condiciones óptimas de operación e información relevante puestos directamente sobre el equipo, para facilitar la tarea eficaz de limpieza y chequeo, permitiendo que cualquiera realice dicho proceso.


    h3.t-red(data-aos="fade") Implementación del TPM
    p.mb-4(data-aos="fade") La implementación del TPM está fundamentada en un ciclo de 4 procesos: planear, introducir, implementar y consolidar; según Malviya, (2015), son 12 los pasos que se deben generar en el proceso de implementación de esta filosofía, a continuación se resumen en la siguiente tabla.

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.] Implantación TPM
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption.mt-3 
              p.mb-0 Nota. Basada en Suzuki (1995).
            thead
              tr
                th.colum-21 FASE
                th PASO
                th PUNTO CLAVE
            tbody    
              tr
                td.text-center.fw-bold(rowspan="5") Preparación
                td 1. El anuncio de la alta dirección sobre la implementación del programa.
                td Generalmente se realiza un evento tipo conferencia sobre la cultura TPM.
              tr
                td 2. Procesos de capacitación y campañas para introducir TPM. 
                td Se implementan una serie de curso, seminarios, campañas y reuniones según niveles y procesos de la planta.
              tr
                td 3. Generar un trabajo en red para promover TPM.
                td Definición de grupos/comités para promover TPM; definiendo claramente un comité central y un staff de apoyo.
              tr
                td 4. Diseño y definición de metas y políticas básicas.
                td Después del análisis y diagnóstico actual, se establecen metas y se definen resultados.
              tr
                td 5. Formulación del plan maestro para desarrollo TPM.
                td Planear los detalles, acciones, metas y resultados del plan.
              tr
                td.text-center.fw-bold Introducción
                td 6. Socialización de iniciación TPM.
                td Realizar evento de socialización con invitación a toda la organización proveedores y cooperadores de la empresa.
              tr
                td.text-center.fw-bold(rowspan="5") Implementación
                td 7. Mejorar la efectividad de cada pieza del equipo.
                td Definir un modelo de equipo y formar otros equipos de proyecto.
              tr
                td 8. Definir e implementar el programa de mantenimiento autónomo.
                td Basado en la filosofía del mantenimiento autónomo, establecer los procedimientos de la formación y la certificación.
              tr
                td 9. Definir e implementar el programa de mantenimiento planeado.
                td Definir líneas de implementación basadas en el mantenimiento predictivo, planificado y programado, donde se incluya toda la gestión de repuestos y herramientas.
              tr
                td 10. Implementar procesos de entrenamiento para mejorar las capacidades y la operación de mantenimiento.
                td Implementar jornadas de entrenamiento a líderes y campañas de comunicación para socializar con todos los miembros del grupo.
              tr
                td 11. Ejecutar programa gestión integral de seguridad equipos fases iniciales.
                td Diseñar e implementar procesos de prevención de riesgos y cultura del entorno libre de accidentes y polución para el bienestar de sus trabajadores.
              tr
                td.text-center.fw-bold Consolidación 
                td 12. Potenciación de niveles TPM por implementación perfecta. (certificación calidad TPM).
                td Validación de implementación de calidad para definir el premio PM, fijar objetivos más elevados.



</template>

<script>
export default {
  name: 'Tema4',
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
