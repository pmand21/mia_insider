// server/models/Event.js
import mongoose from 'mongoose';

const ticketOptionSchema = new mongoose.Schema({
  label: String,
  price: Number
});

const eventSchema = new mongoose.Schema({
  club: String,
  title: String,
  date: String,
  startTime: String,
  url: String,
  ticketOptions: [ticketOptionSchema]
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
