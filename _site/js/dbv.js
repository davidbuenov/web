
/** Utilidad que carga en la página Academic cada entrada en Academic Position 
 * recibe id del div donde se cargará,titulo y descripción de la entrada
 * @param {*} id
 * @param {*} title
 * @param {*} description
 */ 
function loadAcademicPosition(id,title,description) {
	const academicPositionHTML = `
		<div class="fbox-icon">
			<i class="fa-solid fa-check"></i>
		</div>
		<div class="fbox-content">
			<h3>`+title+`</h3>
			<p class="op-08 mt-0">`+description+`</p>
		</div>
										`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = academicPositionHTML;
}
/**
 * Utilidad que carga en la página Academic cada entrada en Academic Position
 * recibe id del div donde se cargará,titulo y descripción de la entrada
 * @param {*} id
 * @param {*} title
 * @param {*} description
 */
function loadCourse(id,title,description) {
	const courseHTML = `
			<div class="fbox-icon">
				<i class="fa-solid fa-check"></i>
			</div>
			<div class="fbox-content">
				<h3>`+title+`</h3>
				<p class="mt-0">`+description+`</p>
			</div>
		`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = courseHTML;
}
/**
 * Utilidad que carga la información de una conferencia 
	Recibiendo los parámetros:
	@param {*} id
	@param {*} title
	@param {*} subTitle
	@param {*} description
	@param {*} date
	@param {*} image
	@param {*} link
	@param {*} linkVideo
 */
function loadConference(id,title,subTitle,description,date,image,link,linkVideo) {
	const conferenceHTML = `
	
		<div class="card border-0  imagescale h-shadow-sm shadow-ts">
			<div class="row g-0 align-items-center">
				<div class="col-md-8 p-4">
					<div class="card-body">
						<h3 class="card-title">`+title+`</h3>
						<h4 class="card-title">`+subTitle+`</h4>
						<p class="card-text mb-2">
							`+description+`
						</p>
						<p class="card-text"><small class="text-muted">`+date+`</small>
						</p>`+
						((link != "") ? `<a href="`+link+`" class="btn btn-primary">Ver</a>` : ``)+` `+
						((linkVideo != "") ? `<a href="`+linkVideo+`" class="btn btn-primary">Vídeo</a>` : ``)+
					`</div>
				</div>
				<div class="col-md-4 d-flex align-self-stretch overflow-hidden">
					<img src="`+image+`" class="rounded-end" alt="...">
				</div>
			</div>
		</div>
	
	`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = conferenceHTML;
}
/** Función que carga la información de una conferencia aplicando fondo oscuro con la
 * imagen a la izquierda y el texto a la derecha. Recibe los siguientes parámetros:
* @param {*} id id del div donde se cargará la información
* @param {*} title título de la conferencia
* @param {*} subTitle subtítulo de la conferencia
* @param {*} description descripción de la conferencia
* @param {*} date fecha de la conferencia
* @param {*} image imagen de la conferencia
* @param {*} link enlace de la conferencia
* @param {*} linkVideo enlace del video de la conferencia
*/
function loadConferenceD(id,title,subTitle,description,date,image,link,linkVideo) {
	const conferenceHTML = `
		<div class="card border-0 bg-dark dark imagescale h-shadow-sm shadow-ts">
			<div class="row g-0 align-items-center">
				<div class="col-md-4 d-flex align-self-stretch overflow-hidden">
					<img src="`+image+`" class="rounded-start" alt="...">
				</div>
				<div class="col-md-8 p-4">
					<div class="card-body">
						<h3 class="card-title">`+title+`</h3>
						<h4 class="card-title">`+subTitle+`</h4>
						<p class="card-text mb-2">`+description+`</p>
						<p class="card-text"><small class="text-muted">`+date+`</small></p>`+
						((link != "") ? `<a href="`+link+`" class="btn btn-primary">Ver</a>` : ``)+` `+
						((linkVideo != "") ? `<a href="`+linkVideo+`" class="btn btn-primary">Vídeo</a>` : ``)+
					`</div>
				</div>
			</div>
		</div>
	`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = conferenceHTML;
}










/**
 * Utilidad para cargar los pies y cabeceras en todas las páginas
 */						
function loadHeaderFooter() {
	const topBarHTML = `
	  <div class="container-fluid px-5">
  
			  <div class="row justify-content-between">
				 
  
				  <div class="col-12 col-md-auto">
  
					  <!-- Top Social
					  ============================================= -->
					  <ul id="top-social">
						  <li><a href="https://twitter.com/davidbuenov" class="h-bg-x-twitter"><span class="ts-icon"><i class="fa-brands fa-x-twitter"></i></span><span class="ts-text">Twitter</span></a></li>
						  </li>
						  <li><a href="https://linkedin.com/in/davidbueno" class="h-bg-linkedin"><span
									  class="ts-icon"><i class="fa-brands fa-linkedin"></i></span><span
									  class="ts-text">Linkedin</span></a></li>
						  <li><a href="https://github.com/davidbuenov" class="h-bg-github"><span class="ts-icon"><i
										  class="fa-brands fa-github"></i></span><span
									  class="ts-text">Github</span></a></li>
						  <li><a href="https://instagram.com/davidbuenov" class="h-bg-instagram"><span
									  class="ts-icon"><i class="fa-brands fa-instagram"></i></span><span
									  class="ts-text">Instagram</span></a></li>
						  <li><a href="https://youtube.com/davidbuenov" class="h-bg-youtube"><span class="ts-icon"><i
										  class="fa-brands fa-youtube"></i></span><span class="ts-text">Youtube</span></a>
						  </li>
						  <li><a href="mailto:davidbuenov@gmail.com" class="si-email3"><span class="ts-icon"><i
										  class="icon-email3"></i></span><span
									  class="ts-text">davidbuenov@gmail.com</span></a></li>
					  </ul><!-- #top-social end -->
  
				  </div>
			  </div>
  
			  </div>
			  <!-- Datos Esctructurados 
	  ============================================= -->
  
	  <script type="application/ld+json">
		  {
			  "@context": "https://schema.org",
			  "@type": "BreadcrumbList",
			  "itemListElement": [{
				"@type": "ListItem",
				"position": 1,
				"name": "Inicio",
				"item": "https://davidbuenov.com/"
			  },{
				"@type": "ListItem",
				"position": 2,
				"name": "Formacion",
				"item": "https://davidbuenov.com/formacion.html"
			  },{
				"@type": "ListItem",
				"position": 3,
				"name": "Proyectos",
				"item": "https://davidbuenov.com/proyectos.html"
			  },
			  {
				  "@type": "ListItem",
				  "position": 4,
				  "name": "Experiencia",
				  "item": "https://davidbuenov.com/experiencia.html"
				},
				{
				  "@type": "ListItem",
				  "position": 5,
				  "name": "Aficiones",
				  "item": "https://davidbuenov.com/aficiones.html"
				},
				{
				  "@type": "ListItem",
				  "position": 6,
				  "name": "Premios",
				  "item": "https://davidbuenov.com/premios.html"
				},
				{
				  "@type": "ListItem",
				  "position": 7,
				  "name": "Publicaciones",
				  "item": "https://davidbuenov.com/publicaciones.html"
				},
				{
				  "@type": "ListItem",
				  "position": 8,
				  "name": "Contacto",
				  "item": "https://davidbuenov.com/contacto.html"
				}]
			}
	  </script>
	  `
	  // Genera el HTML del header y footer dinámicamente
	  const headerHTML = ` 		<div id="header-wrap">
			  <div class="container">
				  <div class="header-row">
  
					  <!-- Logo
					  ============================================= -->
					  <div id="logo">
						  <a href="/">
						  <!--
							  <img class="logo-default" srcset="/images/dbv/logos/logo.jpg, /images/dbv/logos/logo@2x.jpg 2x" src="/images/dbv/logos/logo@2x.jpg" alt="David Logo">
							  <img class="logo-dark" srcset="/images/dbv/logos/logo-dark.jpg, /images/dbv/logos/logo-dark@2x.jpg 2x" src="/images/dbv/logos/logo-dark@2x.jpg" alt="David Logo">
						   -->
						  <img class="logo-default" src="/images/dbv/logos/logo-dbv.png" alt="Logo David Bueno Vallejo">
        				  <img class="logo-dark" src="/images/dbv/logos/logo-dbv-dark.png" alt="Logo David Bueno Vallejo"> 
						 </a>
					  </div><!-- #logo end -->
  
					  
  
					  <div class="primary-menu-trigger">
						  <button class="cnvs-hamburger" type="button" title="Abrir Menu Movil">
							  <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
						  </button>
					  </div>
  
					  <!-- Primary Navigation
					  ============================================= -->
					  <nav class="primary-menu">
						  <ul class="menu-container">
							  <li class="menu-item">
								  <a class="menu-link" href="/">
									  <div>Inicio</div>
								  </a>
							  </li>
							    <li class="menu-item">
								  <a class="menu-link" href="/servicios.html">
									  <div>Servicios</div>
								  </a>
							  </li>
							    <li class="menu-item">
								  <a class="menu-link" href="/proyectos.html"><div>Proyectos</div></a>
								 
							  </li>
							  <li class="menu-item">
								  <a class="menu-link" href="/formacion.html">
									  <div>Conferencias y Divulgación</div>
								  </a>
								  <ul class="sub-menu-container">
									  <li class="menu-item">
										  <a class="menu-link" href="/formacion.html#content"><div>Conferencias</div></a>
									  </li>
									  <li class="menu-item">
										  <a class="menu-link" href="/formacion.html#courses"><div>Formación</div></a>
									  </li>
									  <li class="menu-item">
										  <a class="menu-link" href="/formacion.html#divulgacion"><div>Divulgación</div></a>
									  </li>
									  <li class="menu-item">
										  <a class="menu-link" href="/formacion.html#galeria"><div>Galería de Imágenes</div></a>
									  </li>
								  </ul>
							  </li>
							  <li class="menu-item">
                            	<a class="menu-link" href="#"><div>Sobre Mí</div></a>
                            		<ul class="sub-menu-container">
							  			<li class="menu-item">
								  			<a class="menu-link" href="/redes.html">
									  			<div>Redes</div>
											</a>
							  			</li>
							  			<li class="menu-item">
								  			<a class="menu-link" href="/experiencia.html">
									  			<div>Experiencia</div>
								  			</a>
							  			</li>
										<li class="menu-item">
											<a class="menu-link" href="/aficiones.html">
												<div>Aficiones</div>
											</a>
										</li>
										<li class="menu-item">
											<a class="menu-link" href="/premios.html">
												<div>Premios</div>
											</a>
										</li>
										<li class="menu-item">
											<a class="menu-link" href="/publicaciones.html">
												<div>Publicaciones</div>
											</a>
										</li>
									</ul>
							  </li>
							  <li class="menu-item">
								  <a class="menu-link" href="/contacto.html">
									  <div>Contacto</div>
								  </a>
							  </li>
			  </ul>    
					  </nav><!-- #primary-menu end -->
  
					  <form class="top-search-form" action="search.html" method="get">
						  <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off">
					  </form>
  
				  </div>
			  </div>
		  </div>
		  <div class="header-wrap-clone"></div>
  
		  
	  `;
	  const footerHTML = `
	   <div class="container">
  
  
  
  
				  <!-- Copyrights
				  ============================================= -->
				  <div id="copyrights">
					  <div class="container">
			  
						  <div class="row col-mb-30">
			  
							  <div class="col-md-6 text-center text-md-start">
								  &copy; 2025 David Bueno Vallejo<br>
			  
							  </div>
			  
							  <div class="col-md-6 text-center text-md-end">
								  <div class="d-flex justify-content-center justify-content-md-end">
			  
									  <a href="https://twitter.com/davidbuenov" class="social-icon text-white h-bg-x-twitter">
										  <i class="fa-brands fa-x-twitter"></i>
										  <i class="fa-brands fa-x-twitter"></i>
									  </a>
									  <a href="https://linkedin.com/in/davidbueno"
										  class="social-icon text-white h-bg-linkedin">
										  <i class="fa-brands fa-linkedin"></i>
										  <i class="fa-brands fa-linkedin"></i>
									  </a>
									  <a href="https://instagram.com/in/davidbuenov"
										  class="social-icon text-white h-bg-instagram">
										  <i class="fa-brands fa-instagram"></i>
										  <i class="fa-brands fa-instagram"></i>
									  </a>
									  <a href="https://youtube.com/davidbuenov" class="social-icon  text-white h-bg-youtube">
										  <i class="fa-brands fa-youtube"></i>
										  <i class="fa-brands fa-youtube"></i>
									  </a>
								  </div>
			  
								  <div class="clear"></div>
			  
								  <i class="bi-envelope"></i> davidbuenov@gmail.com
							  </div>
			  
						  </div>
			  
					  </div>
				  </div><!-- #copyrights end -->
			  </div>
  
	  `;
	   // Inserta el HTML en la página
	   document.getElementById('top-bar').innerHTML = topBarHTML;
	   document.getElementById('header').innerHTML = headerHTML;
	   document.getElementById('footer').innerHTML = footerHTML;
	   //Agrega codigo del formulario de contacto.
	   handleContactForm(); // si no está el elemento template-contactform no hace nada

  }
/**
 * Utilidad para cargar entradas en la tabla de prensa usadas en publicaciones.html
 * 
 * @param {*} id 
 * @param {*} url 
 * @param {*} date 
 * @param {*} title 
 */
function loadPress(id,url,date,title) {
	const pressHTML = `
		
			<td>
				<code>`+date+`</code>
			</td>
			<td><a href="`+url+`">`+title+`</a></td>
		
	`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = pressHTML;
}





/**
 * Utilidad para cargar los proyectos en la página de proyectos
 * @param {*} id etiquta donde se insertará el HTML
 * @param {*} url url del proyecto
 * @param {*} image imagen del proyecto en miniatura
 * @param {*} imageFull imagen del proyecto en tamaño completo
 * @param {*} title título del proyecto
 * @param {*} description descripción del proyecto
 */
function loadProjectSummary(id,url,image,imageFull,title,description) {
	  const projectSummaryHTML = `
	                        <div class="grid-inner">
                                <div class="portfolio-image">
                                    <a href="`+url+`">
                                        <img src="`+image+`" alt="`+title+`">
                                    </a>
                                    <div class="bg-overlay">
                                        <div class="bg-overlay-content dark" data-hover-animate="fadeIn">
                                            <a href="`+imageFull+`"
                                                class="overlay-trigger-icon bg-light text-dark"
                                                data-hover-animate="fadeInDownSmall"
                                                data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"
                                                data-lightbox="image" title="Image"><i class="uil uil-plus"></i></a>
                                            <a href="`+url+`"
                                                class="overlay-trigger-icon bg-light text-dark"
                                                data-hover-animate="fadeInDownSmall"
                                                data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"><i
                                                    class="uil uil-ellipsis-h"></i></a>
                                        </div>
                                        <div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                                    </div>
                                </div>
                                <div class="portfolio-desc">
                                    <h3><a href="`+url+`">`+title+`</a></h3>
                                    <span>`+description+`</span>
                                </div>
                            </div>`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = projectSummaryHTML;
}

// Funcion similar a proyectSummary pero para cargar proyectos en index.html
function loadProjectSummaryIndex(id,url,image,imageFull,title,description) {
	const projectSummaryHTML = `
		<div class="portfolio-item">
			<div class="portfolio-image">
				<a href="`+url+`">
					<img src="`+image+`" alt="`+title+`">
				</a>
				<div class="bg-overlay">
					<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
						<a href="`+imageFull+`" class="overlay-trigger-icon bg-light text-dark"
							data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall"
							data-hover-speed="350" data-lightbox="image"><i class="uil uil-plus"></i></a>
						<a href="`+url+`" class="overlay-trigger-icon bg-light text-dark"
							data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall"
							data-hover-speed="350"><i class="uil uil-ellipsis-h"></i></a>
					</div>
					<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
				</div>
			</div>
			<div class="portfolio-desc">
				<h3><a href="`+url+`">`+title+`</a></h3>
				<span>`+description+`</span>
			</div>
		</div>`;
	document.getElementById(id).innerHTML = projectSummaryHTML;
}

/**
 * Utilidad para cargar videos pequeños por ejemplo en las páginas
 * de proyectos individuales
 * @param {*} id etiquta donde se insertará el HTML
 * @param {*} videoUrl url del video
 * @param {*} videoUrlList Es el mismo video pero en una lista de videos para reproducir en youtube
 * @param {*} posterUrl url del poster del video
 * @param {*} title título del video
 * @param {*} description descripción del video
 * 
 */
function loadVideo(id,videoUrl,videoUrlList,posterUrl,title,description) {
	const videoHTML = `
							<div class="portfolio-item">
								<div class="portfolio-image">
									<a href="`+videoUrlList+`">
										<img src="`+posterUrl+`" alt="`+title+`">
									</a>
									<div class="bg-overlay">
										<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
											<a href="`+videoUrl+`" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350" data-lightbox="iframe"><i class="uil uil-play"></i></a>
											<a href="`+videoUrlList+`" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"><i class="uil uil-ellipsis-h"></i></a>
										</div>
										<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
									</div>
								</div>
								<div class="portfolio-desc">
									<h3><a href="`+videoUrl+`">`+description+`</a></h3>
									
								</div>
							</div>
						
	`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = videoHTML;
}
/**
 * Gestiona el envío del formulario de contacto mediante AJAX para evitar recargar la página
 * y muestra un mensaje de éxito. (Versión con estructura IF)
 */
function handleContactForm() {
    // 1. Busca el formulario en la página actual.
    const form = document.getElementById("template-contactform");

    // 2. Comprueba si el formulario existe en la página.
    if (form) {
        // 3. Si existe, toda la lógica de gestión del formulario se ejecuta aquí dentro.
        
        async function handleSubmit(event) {
            // Prevenimos el comportamiento por defecto del formulario
            event.preventDefault();
            
            const status = document.getElementById("contact-form-success");
            const data = new FormData(event.target);

            // Usamos fetch para enviar los datos a Formspree en segundo plano
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Mostramos nuestro mensaje de éxito y ocultamos el formulario
                    status.style.display = 'block';
                    form.style.display = 'none';
                } else {
                    // Si Formspree da un error, lo mostramos para depurar
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! Hubo un problema al enviar tu formulario.");
                        }
                    })
                }
            }).catch(error => {
                // Si hay un error de red
                alert("Oops! Hubo un problema al enviar tu formulario.");
            });
        }

        // Añadimos el 'escuchador' de eventos que activará nuestra función
        form.addEventListener("submit", handleSubmit);
    
    } 
    // Si el formulario no existe (estamos en otra página), la condición 'if' no se cumple
    // y la función simplemente termina sin hacer nada y sin errores.
}
		
