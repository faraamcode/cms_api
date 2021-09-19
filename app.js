const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const database = require('./Db/Connection')
const heroRoute = require('./Hero/Hero.route')
const calendarRoute = require('./Calendar/Calendar.route')
const aboutRoute = require('./About/About.route')
const admissionRoute = require('./Admission/Admission.route')
const contactsRoute = require('./Contacts/Contact.route')
const EventsRoute = require('./Events/Event.route')
const GallerysRoute = require('./Gallery/Gallery.route')
app.use(
  heroRoute,
  admissionRoute,
  calendarRoute,
  contactsRoute,
  EventsRoute,
  aboutRoute,
  GallerysRoute
)
app.listen(8080, () => console.log('listen to port 8080'))
