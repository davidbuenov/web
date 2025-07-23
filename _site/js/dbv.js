
/** Utilidad que carga en la página Academic cada entrada en Academic Position 
 * recibe id del div donde se cargará,titulo y descripción de la entrada
 * @param {*} id
 * @param {*} title
 * @param {*} description
 */
function loadAcademicPosition(id, title, description) {
	const academicPositionHTML = `
		<div class="fbox-icon">
			<i class="fa-solid fa-check"></i>
		</div>
		<div class="fbox-content">
			<h3>`+ title + `</h3>
			<p class="op-08 mt-0">`+ description + `</p>
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
function loadCourse(id, title, description) {
	const courseHTML = `
			<div class="fbox-icon">
				<i class="fa-solid fa-check"></i>
			</div>
			<div class="fbox-content">
				<h3>`+ title + `</h3>
				<p class="mt-0">`+ description + `</p>
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
function loadConference(id, title, subTitle, description, date, image, link, linkVideo) {
	const conferenceHTML = `
	
		<div class="card border-0  imagescale h-shadow-sm shadow-ts">
			<div class="row g-0 align-items-center">
				<div class="col-md-8 p-4">
					<div class="card-body">
						<h3 class="card-title">`+ title + `</h3>
						<h4 class="card-title">`+ subTitle + `</h4>
						<p class="card-text mb-2">
							`+ description + `
						</p>
						<p class="card-text"><small class="text-muted">`+ date + `</small>
						</p>`+
		((link != "") ? `<a href="` + link + `" class="btn btn-primary">Ver</a>` : ``) + ` ` +
		((linkVideo != "") ? `<a href="` + linkVideo + `" class="btn btn-primary">Vídeo</a>` : ``) +
		`</div>
				</div>
				<div class="col-md-4 d-flex align-self-stretch overflow-hidden">
					<img src="`+ image + `" class="rounded-end" alt="...">
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
function loadConferenceD(id, title, subTitle, description, date, image, link, linkVideo) {
	const conferenceHTML = `
		<div class="card border-0 bg-dark dark imagescale h-shadow-sm shadow-ts">
			<div class="row g-0 align-items-center">
				<div class="col-md-4 d-flex align-self-stretch overflow-hidden">
					<img src="`+ image + `" class="rounded-start" alt="...">
				</div>
				<div class="col-md-8 p-4">
					<div class="card-body">
						<h3 class="card-title">`+ title + `</h3>
						<h4 class="card-title">`+ subTitle + `</h4>
						<p class="card-text mb-2">`+ description + `</p>
						<p class="card-text"><small class="text-muted">`+ date + `</small></p>` +
		((link != "") ? `<a href="` + link + `" class="btn btn-primary">Ver</a>` : ``) + ` ` +
		((linkVideo != "") ? `<a href="` + linkVideo + `" class="btn btn-primary">Vídeo</a>` : ``) +
		`</div>
				</div>
			</div>
		</div>
	`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = conferenceHTML;
}


/**
 * Utilidad para cargar entradas en la tabla de prensa usadas en publicaciones.html
 * 
 * @param {*} id 
 * @param {*} url 
 * @param {*} date 
 * @param {*} title 
 */
function loadPress(id, url, date, title) {
	const pressHTML = `
		
			<td>
				<code>`+ date + `</code>
			</td>
			<td><a href="`+ url + `">` + title + `</a></td>
		
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
function loadProjectSummary(id, url, image, imageFull, title, description) {
	const projectSummaryHTML = `
	                        <div class="grid-inner">
                                <div class="portfolio-image">
                                    <a href="`+ url + `">
                                        <img src="`+ image + `" alt="` + title + `">
                                    </a>
                                    <div class="bg-overlay">
                                        <div class="bg-overlay-content dark" data-hover-animate="fadeIn">
                                            <a href="`+ imageFull + `"
                                                class="overlay-trigger-icon bg-light text-dark"
                                                data-hover-animate="fadeInDownSmall"
                                                data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"
                                                data-lightbox="image" title="Image"><i class="uil uil-plus"></i></a>
                                            <a href="`+ url + `"
                                                class="overlay-trigger-icon bg-light text-dark"
                                                data-hover-animate="fadeInDownSmall"
                                                data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"><i
                                                    class="uil uil-ellipsis-h"></i></a>
                                        </div>
                                        <div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                                    </div>
                                </div>
                                <div class="portfolio-desc">
                                    <h3><a href="`+ url + `">` + title + `</a></h3>
                                    <span>`+ description + `</span>
                                </div>
                            </div>`
	// Inserta el HTML en la página con el id proporcionado
	document.getElementById(id).innerHTML = projectSummaryHTML;
}

// Funcion similar a proyectSummary pero para cargar proyectos en index.html
function loadProjectSummaryIndex(id, url, image, imageFull, title, description) {
	const projectSummaryHTML = `
		<div class="portfolio-item">
			<div class="portfolio-image">
				<a href="`+ url + `">
					<img src="`+ image + `" alt="` + title + `">
				</a>
				<div class="bg-overlay">
					<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
						<a href="`+ imageFull + `" class="overlay-trigger-icon bg-light text-dark"
							data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall"
							data-hover-speed="350" data-lightbox="image"><i class="uil uil-plus"></i></a>
						<a href="`+ url + `" class="overlay-trigger-icon bg-light text-dark"
							data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall"
							data-hover-speed="350"><i class="uil uil-ellipsis-h"></i></a>
					</div>
					<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
				</div>
			</div>
			<div class="portfolio-desc">
				<h3><a href="`+ url + `">` + title + `</a></h3>
				<span>`+ description + `</span>
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
function loadVideo(id, videoUrl, videoUrlList, posterUrl, title, description) {
	const videoHTML = `
							<div class="portfolio-item">
								<div class="portfolio-image">
									<a href="`+ videoUrlList + `">
										<img src="`+ posterUrl + `" alt="` + title + `">
									</a>
									<div class="bg-overlay">
										<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
											<a href="`+ videoUrl + `" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350" data-lightbox="iframe"><i class="uil uil-play"></i></a>
											<a href="`+ videoUrlList + `" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"><i class="uil uil-ellipsis-h"></i></a>
										</div>
										<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
									</div>
								</div>
								<div class="portfolio-desc">
									<h3><a href="`+ videoUrl + `">` + description + `</a></h3>
									
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

/**
 * Inicializa y gestiona toda la lógica del Chatbot de Victoria
 */
function initializeVictoriaChatbot() {
	console.log("Inicializando Victoria Chatbot...");
	// Busca los elementos del chat en la página. Si no están, no hace nada.
	const chatButton = document.getElementById('victoria-chat-button');
	const chatWindow = document.getElementById('victoria-chat-window');
	const chatInput = document.getElementById('chat-input');
	const chatSend = document.getElementById('chat-send');
	const messagesContainer = document.getElementById('chat-messages');
	const fullscreenButton = document.getElementById('chat-fullscreen-toggle');

	if (!chatButton) {
		console.warn("Botón de chat no encontrado. Asegúrate de que el HTML incluye el botón con id 'victoria-chat-button'.");
		return;
	}
	console.log("Botón de chat encontrado. Preparando ventana de chat...");
	let currentSessionId = null;
	// --- ¡AQUÍ ESTÁ LA MEMORIA! ---
	// Un array que guardará el historial de la conversación actual.
	let chatHistory = [];

	// Función para generar un ID de sesión único

	// 1. FUNCIÓN PARA OBTENER O CREAR EL SESSION ID
	function getSessionId() {
		// Intentamos obtener el ID del sessionStorage
		let sessionId = sessionStorage.getItem('victoriaChatSessionId');

		// Si no existe, lo creamos y lo guardamos
		if (!sessionId) {
			// Un ID único combinando la fecha actual y un número aleatorio
			sessionId = 'session_' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
			sessionStorage.setItem('victoriaChatSessionId', sessionId);
			console.log('Nueva sesión de chat iniciada:', sessionId);
		}

		return sessionId;
	}

	// Función para añadir un mensaje a la ventana de chat
	function addMessage(text, sender) {
		const messageDiv = document.createElement('div');
		messageDiv.innerHTML = text;
		messageDiv.classList.add('message-bubble'); // Clase base para todos los mensajes
		if (sender === 'user') {
			messageDiv.classList.add('user-message');
		} else {
			messageDiv.classList.add('bot-message');
		}
		messagesContainer.appendChild(messageDiv);
		messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
	}

	// --- LA FUNCIÓN sendMessageToVictoria ---
	// Esta es la función que llama a Firebase.
	async function sendMessageToVictoria(prompt) {
		if (!prompt || prompt.trim() === "") return;

		addMessage(prompt, 'user');
		chatInput.value = '';
		chatInput.disabled = true;
		chatSend.disabled = true;

		// La URL de tu función que ya tienes
		const functionUrl = 'https://api-ff5653t6ka-uc.a.run.app/askVictoria';
		//const functionUrl = 'http://127.0.0.1:5001/davidbuenov-d136c/us-central1/api/askVictoria';
		// Preparamos los datos que vamos a enviar en el formato correcto
		const requestBody = {

			message: prompt,
			history: chatHistory,
			sessionId: getSessionId() // Obtenemos o creamos el session ID

		};

		try {
			// Hacemos la llamada directa a tu URL con fetch
			const response = await fetch(functionUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestBody)
			});

			if (!response.ok) {
				throw new Error(`Error del servidor: ${response.statusText}`);
			}

			const result = await response.json();
			console.log("Respuesta de Victoria:", result);
			// El resultado de una función de Firebase está dentro de result.result
			const botResponse = result.reply || "He tenido un problema para responder.";

			addMessage(botResponse, 'bot');

			// Aquí actualizaríamos el historial
			chatHistory.push({ role: 'user', parts: [{ text: prompt }] });
			chatHistory.push({ role: 'model', parts: [{ text: botResponse }] });

		} catch (error) {
			console.error("Error al llamar a la función de Victoria:", error);
			addMessage("Lo siento, he tenido un problema técnico. Por favor, inténtalo de nuevo más tarde.", 'bot');
		} finally {
			chatInput.disabled = false;
			chatSend.disabled = false;
			chatInput.focus();
		}
	}

	// Eventos para abrir/cerrar el chat y enviar mensajes
	chatButton.addEventListener('click', () => {
		chatWindow.classList.toggle('is-hidden');
	});

	chatSend.addEventListener('click', () => {
		sendMessageToVictoria(chatInput.value.trim());
	});

	chatInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			sendMessageToVictoria(chatInput.value.trim());
		}
	});
	fullscreenButton.addEventListener('click', () => {
		chatWindow.classList.toggle('fullscreen');

		// Cambiamos el 'title' para accesibilidad
		if (chatWindow.classList.contains('fullscreen')) {
			fullscreenButton.setAttribute('title', 'Restaurar ventana');
		} else {
			fullscreenButton.setAttribute('title', 'Maximizar');
		}
	});
}

/**
 * =================================================================
 * PUNTO DE ENTRADA PRINCIPAL DE LA APLICACIÓN
 * Este código espera a que todo el HTML de la página esté cargado
 * y listo antes de ejecutar nuestras funciones.
 * =================================================================
 */
/**
 * =================================================================
 * PUNTO DE ENTRADA PRINCIPAL DE LA APLICACIÓN
 * Usamos window.onload para asegurarnos de que TODOS los scripts,
 * incluido el functions.bundle.js de la plantilla, se hayan cargado.
 * =================================================================
 */
window.onload = function () {


	// 2. Prepara nuestra lógica para el formulario de contacto.
	handleContactForm();

	// 3. Prepara nuestra lógica para el chatbot.
	initializeVictoriaChatbot();


};