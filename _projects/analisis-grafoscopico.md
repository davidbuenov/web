---
layout: project
title: "Análisis Grafoscópico con IA"
image_full: /images/dbv/proyectos/grafoscopico-full.webp
image_thumb: /images/dbv/proyectos/grafoscopico.webp
excerpt: "Colaboración con la Policía Científica Nacional para el desarrollo de una herramienta de IA que agiliza la identificación de escritura manuscrita."
creators: "Miguel Ángel Vázquez, Araceli Ruiz Vallecillo, David Bueno Vallejo"
client_name: "Policía Científica Nacional, Universidad de Málaga"
# No ponemos client_url porque son dos entidades
year: 2025
date: 2025-06-24
tech: "R, Python, IA, Handwriter, Modelos Bayesianos"
videos:
  - id: "video-grafoscopico"
page_scripts: |
  <script>
    document.addEventListener('DOMContentLoaded', function() {
        loadVideo('video-grafoscopico',
        'https://www.youtube.com/watch?v=yAQF4Kgx65A', 
        'https://www.youtube.com/watch?v=yAQF4Kgx65A', 
        '/images/dbv/proyectos/grafoscopico.webp', 
        'Presentación del Proyecto de Análisis Grafoscópico',
        'Presentación en el Encuentro de Investigadores de Ciencias Policiales');
    });
  </script>
---

<div class="fancy-title title-bottom-border">
    <h2>El Reto: Agilizar la Identificación Forense de Escritura</h2>
</div>
<p>El análisis grafoscópico es una disciplina forense crucial, pero tradicionalmente es un proceso manual, exhaustivo y laborioso. Para los expertos de la Policía Científica Nacional, enfrentarse a casos con un gran número de posibles autores consume un tiempo y unos recursos considerables. El reto era claro: ¿cómo podíamos usar la tecnología para crear una herramienta que agilizara este proceso, aportando objetividad y eficiencia?</p>

<div class="fancy-title title-bottom-border">
    <h2>La Solución: IA y un Modelo Estadístico a Medida</h2>
</div>
<p>En una colaboración directa con la Policía Científica Nacional y la Universidad de Málaga, desarrollamos una solución integral que automatiza y cuantifica el análisis de escritura:</p>
<ul>
    <li><strong>Base Tecnológica Robusta:</strong> Adaptamos y optimizamos la librería de código abierto <code>handwriter</code>, un paquete de R especializado, para las características específicas de la escritura en población española.</li>
    <li><strong>Modelo Probabilístico:</strong> El sistema descompone la escritura en "grafos" y, mediante un modelo estadístico bayesiano, calcula la probabilidad de que un documento cuestionado pertenezca a un autor de un conjunto cerrado de sospechosos.</li>
    <li><strong>Automatización del Flujo de Trabajo:</strong> Desarrollamos una serie de scripts auxiliares en Python y R para automatizar el preprocesamiento masivo de imágenes, como la división de documentos y la eliminación de cabeceras.</li>
</ul>

<div class="fancy-title title-bottom-border">
    <h2>El Impacto: Una Herramienta de Apoyo Crítica para los Expertos</h2>
</div>
<p>Este proyecto trasciende lo académico para convertirse en una herramienta con un impacto directo en el trabajo policial:</p>
<li><strong>✅ Optimización de Recursos:</strong> Permite a los peritos calígrafos focalizar sus esfuerzos en los autores con la mayor probabilidad, acelerando drásticamente la resolución de casos.</li>
<li><strong>🤝 Colaboración Institucional:</strong> Un caso de éxito de transferencia de conocimiento entre la Universidad y la Policía Nacional, validado por expertos del más alto nivel.</li>
<li><strong>🔬 Rigor Científico:</strong> Proporciona una evaluación probabilística objetiva que complementa y respalda el análisis del experto humano.</li>
<li><strong>📖 Creación de una Guía de Buenas Prácticas</strong> que asegura la reproducibilidad y sienta las bases para futuras líneas de investigación.</li>
</ul>