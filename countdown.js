
// ============================================================
// Init
// ============================================================

var targetDate = '2018-11-14 16:00:00',
    countdown  = setInterval(countdown, 1000);

window.fitText(document.getElementById('countdown'));
window.fitText(document.getElementById('title'));



// ============================================================
// Functions
// ============================================================


// Inspiration: permalightnyc.com/experiments/countdown
function countdown() {

  var mtxt, dtxt, htext, mntext, stext, 
      now   = moment(), 
      then  = moment(targetDate), 
      ms    = then.diff(now, 'milliseconds', true);

  // months
  ms        = then.diff(now, 'milliseconds', true);
  months    = Math.floor(moment.duration(ms).asMonths());
  then      = then.subtract('months', months).subtract('days');
  mtext     = months===1 ? 'month' : 'months';

  // days
  ms        = then.diff(now, 'milliseconds', true);
  days      = Math.floor(moment.duration(ms).asDays());
  then      = then.subtract('days', days);
  dtext     = days===1 ? 'day' : 'days';

  // hours
  ms        = then.diff(now, 'milliseconds', true);
  hours     = Math.floor(moment.duration(ms).asHours());
  then      = then.subtract('hours', hours);
  htext     = hours===1 ? 'hour' : 'hours';

  // minutes
  ms        = then.diff(now, 'milliseconds', true);
  minutes   = Math.floor(moment.duration(ms).asMinutes());
  then      = then.subtract('minutes', minutes);
  mntext    = minutes===1 ? 'minute' : 'minutes';

  // seconds
  ms        = then.diff(now, 'milliseconds', true);
  seconds   = Math.floor(moment.duration(ms).asSeconds());
  stext     = seconds===1 ? 'second' : 'seconds';

  // html
  diff      = '<span class="num">' + months + '</span> ' + mtext + '<br> \
               <span class="num">' + days + '</span> ' + dtext + '<br> \
               <span class="num">' + hours + '</span> ' + htext + '<br> \
               <span class="num">' + minutes + '</span> ' + mntext + '<br> \
               <span class="num">' + seconds + '</span> ' + stext;

  document.getElementById('countdown').innerHTML = diff;

} // function countdown()
