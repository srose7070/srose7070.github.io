var birthday = new Date("April 27, 2006")
function convertMS(milliseconds) {
    var year, day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    year = Math.floor(day / 365);
    hour = hour % 24
    day = day % 365
    return {
        year: year,
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    }
}