---
layout: post
title: "Mejorando a Victoria en la Web"
date: 2025-07-15 10:00:00 +0200
author: "David Bueno Vallejo"
image: "/images/dbv/blog/arquitecturaweb.gif" # O la ruta a tu GIF si lo subes
excerpt: "Después de la primera versión del chatbot ha tenido una evolución, para independizarse de widgets externos para tener un conocimiento completo de las secciones de la web, proyectos y conferencias."
---

Con la primera version del chatbot Victoria ya podía hablar y contar algunos datos de la web pero utilizaba un widget externo y mi idea era tener control total del contenido del widget, por ejemplo para poder incluir enlaces. En principio la idea era sencilla, solo enlaces de las secciones de la web, pero posteriormente pensé que sería interesante que Victoria conociera información sobre los proyectos y conferencias, pero sin tener que dárselos en el prompt, si no que de forma automática, cada vez que se generase la web se creara todo el conocimiento de forma dinámica que podía ser de utilidad para el chatbot. Como alternativas al prompt estaba usar un RAG, llamadas a funciones, MCP o el nuevo MCP-B para la web. Estuve estudiando este último pero estaba más orientado a ofrecer tu página al exterior que para un índice interno. MCP esta parcialmente desarrollado en Gemini y en teoría las llamadas a funciones si están bien... aunque he perdido mucho tiempo con Gemini 1.5 Flash, finalmente con Gemini 2.0 Flash todo ha funcionado bien. A continuación muestro el uso de las funciones y ejemplos de uso actuales.

### Las llamadas a funciones
En [Documentación de Llamadas a Funciones de Gemini](https://ai.google.dev/gemini-api/docs/function-calling?example=meeting) puede verse el concepto y la forma de utilizarlo. Al igual que con MCP tenemos que darle la indicación de los tipos de llamadas y los parámetros que soporta nuestra aplicación. En la versión inicial de Victoria tiene disponibles dos funciones, una para obtener información de un proyecto concreto y otra para las conferencias y se declaran así:
```javascript
const tools = [{
    functionDeclarations: [
      {
        name: "getProyectos",
        description: "Busca y devuelve los detalles de uno o más proyectos de la lista de proyectos disponibles. Úsalo si te preguntan por un proyecto específico o una lista.",
        parameters: { type: "OBJECT", properties: { nombre_proyecto: { type: "STRING", description: "El nombre o palabra clave de un proyecto (ej: 'Marbella Football Center', 'Patente')." } } }
      },
      {
        name: "getConferencias",
        description: "Obtiene una lista de las conferencias de David.",
        parameters: { type: "OBJECT", properties: { filtro: { type: "STRING", description: "Filtra por 'proximas' para ver eventos futuros o 'pasadas' para ver eventos anteriores." } } }
      },
    ],
}];
```
Para que esto pueda recoger información de utilidad cada vez que se genera la web con Jekyll genera un nuevo archivo json que extrae de la página todos los proyectos y conferencias para que esté siempre actualizado. Por ejemplo el formato de un proyecto sería:
```json
{
"title": "Análisis Grafoscópico con IA",
"url": "/proyectos/analisis-grafoscopico/",
"excerpt": "Colaboración con la Policía Científica Nacional para el desarrollo de una herramienta de IA que agiliza la identificación de escritura manuscrita.",
"creators": "Miguel Ángel Vázquez, Araceli Ruiz Vallecillo, David Bueno Vallejo",
"year": 2025,
"tech": "R, Python, IA, Handwriter, Modelos Bayesianos",
"content": "El Reto: Agilizar la Identificación Forense de Escritura El análisis grafoscópico es una disciplina forense crucial,.."
}
```
Y el de una conferencia:
```json
{
"title": "Semana de la Administración Abierta",
"subtitle": "Aspectos éticos y tecnológicos del uso de la IA en servicios públicos",
"description": "Debate en el que profesionales y expertos del ámbito público y privado y de la Universidad debatimos sobre los aspectos éticos...",
"date": "2022-06-30 10:00:00 +0200",
"url": "https://transparencia.gob.es/transparencia/transparencia_Home/index/Gobierno-abierto/sensibilizacion-formacion/SemanaAA/EventosSAA2022.html",
"video_url": "https://www.youtube.com/watch?v=6hzKpI6v6Tw"
}
```

Una vez integrados la IA es capaz de detectar que ese contenido está en una función y es capaz de integrarlo en la conversación devolviendo los enlaces a las páginas de detalle de la web o a los videos si estos existen. 

#### Ejemplos de Victoria en Acción

Para los ejemplos anteriores tenemos:

| Respondiendo proyecto|Respondiend conferencia |
|---|---|
|![Victoria respondiendo sobre el proyecto de Análisis Grafoscópico](/images/dbv/blog/victoria_grafoscopia.webp)|![Victoria respondiendo sobre conferencias](/images/dbv/blog/victoria_conf_aspectos_eticos.webp)|

Un pequeño video con las funcionalidades actuales que permiten que victoria de información de conferencias y proyectos, pero también hable de Málaga y de los enlaces para las distintas partes de la web.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/spT0r29hS8c" title="Victoria - Funcionalidades del Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Resumen

Aunque solo sea una web personal me está sirviendo para probar cosas muy interesantes como la integración de una IA de última generación dentro de una página web, con la llamadas a funciones y el uso del maravilloso Jekyll que le da vida y que ha supuesto un rediseño completo. Si estás interesado en ver cómo me ha cambiado la web no dudes en comentarlo aquí o en linkedin.


