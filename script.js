// inputs the structure the current date is shown (day, month, day, year) using momment.js 
var date = moment().format('dddd, MMMM Do, YYYY')
$("#currentDay").text(date)

var currentHour = moment().hours()
var timeBlock = $('.time-block')

// different blck colors for for the past and future tasks that were added based on you rcurrent date 
setColor()

function setColor() {
    timeBlock.each(function() {
        var id = $(this).attr('id')

        if(currentHour > id) {
            $(this).addClass('past')
        } else if ( currentHour == id) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

// save button, which is saved to loacal storgae so it will still appear even after browser is refreshed 
$('.saveBtn').on('click', function(event) {
    event.preventDefault()
    var btn = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(btn, task)
    getTasks()
})
// for loop tasks for all blacks of time avaiable 
getTasks()
function getTasks() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $('#' + i).text(currentTask)
    }
}