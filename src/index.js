require('dotenv').config()
const express = require('express')
const postUsers = require('./routes/index')
const getUsers = require('./routes/users')
const postCarreras = require('./routes/carreras')
const postMatrias = require('./routes/materias')

const app = express()
app.use(express.json())

app.use('/', postUsers)
app.use('/', getUsers)
app.use('/', postCarreras)
app.use('/', postMatrias)

app.listen(process.env.PORT,function(){
    console.log(`Running in the port ${process.env.PORT} gaby`)
  })

/*  
                                Trabajo final

Documento de Requisitos del Producto (PRD) – Academia de Cursos Online

El propósito de este PRD es describir los requisitos y características del proyecto de la Academia de 
Cursos Online para el grupo de estudiantes de backend.

La Academia de Cursos Online es una plataforma educativa que ofrece una variedad de cursos en línea. La 
plataforma permitirá el registro de usuarios, con diferentes roles, y la asignación de profesores a las 
materias. Además, se proporcionará información sobre carreras, sus materias y la capacidad para que los 
profesores generen exámenes para sus materias.

Requisitos Funcionales

1 – Registro de Usuarios

La plataforma debe permitir que los usuarios se registren con diferentes roles:

    Administrador
    Evaluador
    Profesor
    Alumno

2 – Perfiles de Usuario

Cada rol de usuario tendrá distintos privilegios y acceso a diferentes funcionalidades 
de la plataforma.

Administrador

    Podrá gestionar cursos, carreras, materias y usuarios.
    Podrá asignar un supervisor a una carrera

Supervisor

    Podrá generar las materias para una carrera
    Podrán genera los examanes para cada materia
    Podrá asignar profesores a cada una de las materias
    Podrá añadir material genérico para la materia
        Links
        Documentos
        Videos
    Opcional: Generar un cronograma de las materias

Profesor

    Podrá ver las asignadas y un listado de alumnos.
w    Podrá lanzar exámenes a los alumnos generados por el supervisor.
    Opcional: Podrá tomar presentismo de cada clase
    Opcional: Tendrá la capacidad de cargar material extra a las materias que imparte.

Alumno

    Podrá inscribirse en las carreras.
    Podrá ver todas las materias de la carrera
    Podrá acceder a los exámenes asignados a sus materias.
    Recibirá un diploma cuando obtenga el 100% de las materiales aprobadas

3 – Carreras y Materias

La plataforma debe permitir la gestión de carreras, sus respectivas materias y métodos de evaluación.
Carreras

    Cada carrera tendrá un título y una descripción.
    Cada carrera tendrá una cantidad de materias asociadas y el orden que debe seguir un alumno
    Opcional: Armar cronogramas de bimestre, trimestre o cutrimestre
    Opcional: armar correlatividades

Materias

    Cada materia deberá contar con un título y su descripción.
    Cada materia deberá contar con los examenes

Creación de Exámenes

    Los exámenes deben estar asociados a una materia específica.
    Cada examen contendrá preguntas y opciones de respuesta.
    Tipos de preguntas:
        Los exámenes pueden incluir preguntas de opción múltiple, verdadero/falso y preguntas abiertas.
        Para las preguntas de opción múltiple y verdadero/falso, el profesor debe proporcionar las 
        opciones de respuesta válidas.
    Configuración del Examen
        Los profesores podrán establecer la duración del examen, en minutos, para que los alumnos 
        lo completen.
        Podrán asignar un puntaje a cada pregunta, que se utilizará para calcular la calificación 
        final del examen
    Acceso a los Exámenes
        El profesor decide cuando envia los examenes a sus alumnos
    Calificación Automatizada
        Se debe implementar un sistema de calificación automatizada para que los examenes sean 
        calificados automáticamente

4 – Requisitos Técnicos
Base de Datos

    La plataforma utilizará una base de datos relacional para almacenar la información de usuarios, 
    cursos, carreras, materias, exámenes y calificaciones.
    La plataforma puede utilizar una base de datos NoSQL para almacenamiento de request recibidos

Sistema de Logs (Sentry)

    Se implementará el sistema de logs Sentry para monitorear y registrar eventos importantes dentro de 
    la plataforma.

Capa de Caché con Redis

    Se implementará Redis como una capa de caché para almacenar y responder a requests frecuentes, 
    mejorando así los tiempos de respuesta.

Consideraciones de Seguridad

    La plataforma deberá implementar medidas de seguridad para proteger la información de los usuarios 
    y prevenir accesos no autorizados.
*/
