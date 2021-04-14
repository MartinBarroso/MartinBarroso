@pei
Feature: Validacion Ingresar a Prensa
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

    Scenario: Validacion Ingresar a Prensa
        Then se accede a Prensa
