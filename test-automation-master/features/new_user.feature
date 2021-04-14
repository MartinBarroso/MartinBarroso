@pei @run
Feature: Validacion Crear Creado
    Como usuario administrador de la liga de futbol
    Validacion Dashboard como administrador

    Background: Inicio
        Given se ingresa al sistema como administrador
        When se completa con mail "test-admin@baufest.com"
        And el valor del campo mail es igual a "test-admin@baufest.com"
        And se completa con la contraseña "baufest123"
        Then el usuario intenta ingresar a la aplicación
        When se muestra el dashboard
        Then se muestra el mensaje "Iniciaste sesión correctamente."
        And se accede a Prensa
        And se intenta crear un nuevo usuario

    Scenario: Validacion Crear Creado 
        When se ingresa a formulario de carga de nuevo usuario
        And se completa campo de nombre con un Nombre aleatorio
        And se completa campo de apellido con un Apellido aleatorio
        And se completa campo de DNI con un DNI aleatorio
        And se completa campo de Email con un correo aleatorio
        And se presiona boton de Crear
