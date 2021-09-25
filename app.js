const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()
app.use(express.json())

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Content Management API',
      description: 'Content Management API',
      contact: {
        name: 'Faraamcode'
      },
      servers: ['http://localhost:8080']
    }
  },
  apis: ['*/*.Route.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const database = require('./Db/Connection')

const heroRoute = require('./Hero/Hero.route')
const calendarRoute = require('./Calendar/Calendar.route')
const aboutRoute = require('./About/About.route')
const admissionRoute = require('./Admission/Admission.route')
const contactsRoute = require('./Contacts/Contact.route')
const EventsRoute = require('./Events/Event.route')
const GalleryRoute = require('./Gallery/Gallery.route')
const MissionRoute = require('./Mission/Mission.route')
const NewsRoute = require('./News/News.route')
const StudentPerspectiveRoute = require('./StudentsPerspectives/Student.route')
const UserRoute = require('./User/User.Route')
app.use(
  heroRoute,
  admissionRoute,
  calendarRoute,
  contactsRoute,
  EventsRoute,
  aboutRoute,
  GalleryRoute,
  MissionRoute,
  NewsRoute,
  StudentPerspectiveRoute,
  UserRoute
)

app.listen(8080, () => console.log('listen to port 8080'))
