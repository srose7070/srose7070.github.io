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
var d = convertMS(new Date - birthday)
var age = "I am " + d.year + " years, " + d.day + " days, " + "and " + d.hour + " hours old."
function swapcolor() {
    var color = getRandomColor();
    document.getElementById('text').style.color = color;
    document.getElementById('heading').style.color = color;
    document.getElementById('paragraph').style.color = color;
    document.getElementById('link').style.color = color;
    document.getElementById('under heading').style.color = color;
}
function getRandomColor() {
    var letters = '123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}
