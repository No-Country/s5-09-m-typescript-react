# s5-09-m-typescript-react

Proyecto: MindFulness


Página web de Yoga y Mindfulness

Equipo de trabajo:

Back-End: Yamila Gisele Paez / Back-End: Maximiliano Miño / Back-End: Ezequiel Astrada / Front-End: Federico Di Cillo / Front-End: Anderson Cifuentes  / Front-End: Francisco Garcia Mendez / Front-End: Emanuel Palacio / Front-End: Joaquin Ramos / QA Tester : Romina Bello / Design Ui/Ux: Diana Zambrano

La propuesta trata sobre un sitio web de yoga. En el mismo, el usuario podrá obtener información sobre esa actividad, registrarse y acceder a una cuenta personal dentro del sitio. En su perfil podrá seleccionar hojas de ruta de acuerdo a sus intereses: ejercicios, meditaciones, alimentación, así como también podrá acceder a un check list para registrar sus avances diariamente y hacer un seguimiento de su progreso.

Requerimientos:

La página web contiene las siguientes secciones:

1. Inicio 
2. Mis prácticas
3. Contacto
4. Nosotros
5. Iniciar sesión
6. Términos Legales

...

1. Inicio (Home page)

   1.1 Se muestra un menú principal en la parte superior de la página que contiene: Logo - Inicio - Mis prácticas - Contacto - Nosotros - Iniciar sesión
   
   1.2 Hero : "Lleva tu control, registra y evalúa tu progreso.  ¿Necesitas ayuda con tu práctica diaria de atención plena? Aquí te ayudaremos a cumplir con tus metas diarias. Comienza poco a poco agregando nuevas tareas. Has un seguimiento de tu progreso y observa tu evolución."
Seguido de esto se visualiza un botón "Comienza ahora". En la parte derecha se muestra “Registra tus 16 hábitos”.

    1.3 Slider :  título "¿Cómo usar nuestra web?" que contiene una galería de 5 imágenes con el paso a paso para registrarse y disfrutar de la cuenta. Tales imágenes son:

Inicia sesión: registra tu cuenta y podrás acceder a los beneficios que tenemos para ti.
Personaliza tu cuenta: Al registrarte podrás elegir las actividades que prefieras, así como también ir ampliando gradualmente tus prácticas. 
Entra a tu panel:en tu perfil podrás visualizar un panel con información de tu preferencia
Lleva el control: En tu sección de Prácticas Espirituales podrás registrar las que has logrado cumplir en el día.
Analiza tus resultados: recibe un reporte semanal en tu correo y evalúa tu progreso.

Para pasar a la siguiente imagen o retroceder a la anterior se utilizarán flechas adelante - atrás. 

    1.4 Sección con título "Mis Prácticas". Incluye:

 Título: ¿Qué son los 16 hábitos y cómo funcionan? 

 Los 16 hábitos son un sistema de prácticas, que promueven la consolidación de hábitos saludables. El objetivo principal es mejorar el cuerpo físico, fomentar el desarrollo mental
y lograr la elevación espiritual. Gracias a todo esto podemos equilibrar el cuerpo, la mente y el espíritu, entendiendo la salud como un todo y mejorando nuestra calidad de vida. 

  Se mostrará una vista previa de 3 tarjetas referentes a "Uso del agua", "Alimentación", "Lectura". Cada una tendrá un link en "ver más" que redirige al sector de la página donde hay información de la tarjeta seleccionada. 

  A continuación hay un botón de "Conoce más" que redirige a la página de "Mis prácticas" donde se profundiza más sobre cada uno de los puntos. 


   1.5  Testimonios: se muestran 2 testimonios de alumnos practicantes de la Filosofía: 

   Juan, 35 años. "Practicar el mindfulness a diario me ha ayudado a controlar mi ansiedad y a tomar las situaciones estresantes con mayor tranquilidad." 

   Karen, 43 años. "Poder hacer un seguimiento diario de los hábitos que realizo me ha ayudado a mejorar mi vida de una manera maravillosa." 


  1.6  Boletín informativo

  Se observa junto a una imagen el siguiente texto: "Suscríbete a nuestro boletín informativo y mantente al tanto de las últimas novedades del yoga y mindfulness." 

   1.7 Menú del footer

Se muestra el logo, Contacto, Mis Prácticas, Términos Legales: Política de privacidad, Política de cookies, Aviso legal. 

...
2. Mis prácticas

(ver cómo va a verlo el usuario sin estar logueado y luego de loguearse... va a ver algo diferente? aquí va a estar el link del formulario con los 16 hábitos?)

...
3. Contacto

Se muestra el título: "Contáctanos" seguido de: Si tienes alguna duda o sugerencia, puedes dejarla en el siguiente formulario. En breve te responderemos.

El formulario de contacto incluye los siguientes campos a completar: 

Nombre completo
Correo
Comentario

Todos los campos son obligatorios. 

A continuación se muestra un botón "Enviar". Cuando el usuario completa correctamente el formulario, aparece un mensaje de confirmación "Su mensaje ha sido enviado.Lo contactaremos a la brevedad. Muchas gracias."


4. Nosotros (Definir texto) 

...
5. Iniciar sesión

Cuando el usuario hace clic en Iniciar sesión, se le muestra la página con la siguiente información:

Bienvenido: inicia sesión y disfruta de todo lo que tenemos para ti.

En la parte derecha de la pantalla se observa el formulario de Inicia sesión.  El mismo contiene: 

Correo
Contraseña

Ambos campos son obligatorios.

También se muestran los logos de Facebook y Google para iniciar sesión con alguna de esas cuentas. 

Cuando el usuario completa correctamente todos los campos y hace click en "Iniciar sesión" entonces se le muestra su pantalla de usuario. 
Si el usuario elige iniciar sesión con su cuenta de Facebook o Google, se lo deriva a una pantalla para que rellene sus datos de loguin en esas cuentas. 
En el formulario se observa una casilla de verificación con el siguiente mensaje: "Acuerdate de mi" para que se guarde la contraseña en los próximos inicios de sesión. 

También se observa el texto: "Olvidé mi contraseña", donde al hacer click ahí se lo deriva a que ingrese su correo electrónico y un botón que indica: "Recuperar contraseña". 

También se muestra un mensaje: "¿Aún no tienes cuenta? Regístrate". Cuando el usuario hace click en Regístrate se lo deriva a la pantalla de Registro. La misma contiene:

Bienvenido: Crea tu cuenta y disfruta de todo lo que tenemos para ti.

Los campos para completar son: nombre completo, correo, contraseña. Todos los campos son obligatorios.

Si el usuario no completa alguno de los campos, aparecerá un mensaje diciendo: "Todos los campos son obligatorios."
Si el usuario ingresa una contraseña que no cumple con la condición le aparece el mensaje: #La contraseña debe tener 8 caracteres con al menos una mayúscula y un número.#
Si el usuario ingresa un mail que ya ha sido registrado, le aparecerá el mensaje: "El mail ingresado ya ha sido registrado".

Cuando el usuario entra a su panel se le muestra:

En panel de navegación izquierdo: Se observa foto del usuario (opcional) seguido de Nombre y apellido con el que se ha registrado.

El menú consta de: Perfil, Notificaciones, Favoritos, Progreso, Mi calendario, Panel.













