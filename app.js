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
const GalleryRoute = require('./Gallery/Gallery.route')
const MissionRoute = require('./Mission/Mission.route')
const NewsRoute = require('./News/News.route')
app.use(
  heroRoute,
  admissionRoute,
  calendarRoute,
  contactsRoute,
  EventsRoute,
  aboutRoute,
  GalleryRoute,
  MissionRoute,
  NewsRoute
)
app.listen(8080, () => console.log('listen to port 8080'))
