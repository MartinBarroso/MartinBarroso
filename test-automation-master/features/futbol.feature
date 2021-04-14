@pei
Feature: Login a la aplicación como administrador
    Como usuario administrador de la liga de futbol
    Ingreso a la aplicación

    @login_success
    Scenario Outline: Scenario Outline name: Login como administrador -> "<mail>"
        Given se ingresa al sistema como administrador
        When se completa con mail "<mail>"
        And el valor del campo mail es igual a "<mail>"
        And se completa con la contraseña "<pass>"
        Then el usuario intenta ingresar a la aplicación
        And el usuario ingresa a la aplicación
        And el usuario intenta cerrar la aplicación
        And el usuario cierra sesion de la aplicación

        Examples:
            | mail                   | pass       |
            | test-admin@baufest.com | baufest123 |

    @login_fail
    Scenario Outline: Scenario Outline name: Login como administrador -> "<mail>"
        Given se ingresa al sistema como administrador
        When se completa con mail "<mail>"
        And el valor del campo mail es igual a "<mail>"
        And se completa con la contraseña "<pass>"
        Then el usuario intenta ingresar a la aplicación
        But el usuario no ingresa a la aplicación

        Examples:
            | mail                   | pass           |
            | fail-admin@baufest.com | contraseñaFail |
