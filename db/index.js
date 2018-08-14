const mongoose = require('mongoose');
const activityDetails = require('./mockData');
const mlab = require('./mlabConfig');

mongoose.connect(mlab.url, (err) => {
  if (err) {
    console.log('YOUR DB IS NOT CONNECTED');
  } else {
    console.log('YOUR DB IS CONNECTED!!');
  }
}, { useNewUrlParser: true });

const activitySchema = mongoose.Schema({
  id: String,
  availableSpots: Number,
  bookedCount: Number,
  maxGuests: Number,
  minuteLength: Number,
  date: String,
  start: String,
  end: String,
  activityName: String,
  activityInfo: String,
});

const ActivityTimeSlots = mongoose.model('ActivityTimeSlots', activitySchema);
ActivityTimeSlots.collection.drop();

activityDetails.forEach((activity) => {
  const activityInfo = new ActivityTimeSlots({
    id: activity.id,
    availableSpots: activity.available_spots,
    bookedCount: activity.booked_count,
    maxGuests: activity.max_guests,
    minuteLength: activity.minute_length,
    date: activity.date,
    start: activity.start,
    end: activity.end,
    activityName: activity.activity_name,
    activityInfo: activity.activity_info,
  });

  activityInfo.save();
  // .then((data) => {
  //   // console.log('INSERTED DB', data)
  // }).catch((err) => {
  //   // console.log('FAILED INSERT', err)
  // });
});

module.exports = {
  ActivityTimeSlots,
};