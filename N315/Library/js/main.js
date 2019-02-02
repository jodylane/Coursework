/**
 * Created by Josh Lane on .
 N215 N320
 */
var date = new Date();
var todaysDate = new Date();
var year = todaysDate.getFullYear();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//month[0] = "January";
//month[1] = "February";
//month[2] = "March";
//month[3] = "April";
//month[4] = "May";
//month[5] = "June";
//month[6] = "July";
//month[7] = "August";
//month[8] = "September";
//month[9] = "October";
//month[10] = "November";
//month[11] = "December";
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//weekDay[0] = "Sunday";
//weekDay[1] = "Monday";
//weekDay[2] = "Tuesday";
//weekDay[3] = "Wednesday";
//weekDay[4] = "Thursday";
//weekDay[5] = "Friday";
//weekDay[6] = "Saturday";
var thisMonth = todaysDate.getMonth();//returns a number between 0-11 a negative number returns past months a number over 11 is a new year
var monthStart = new Date(year, thisMonth, 1);//the first day of the current month
var monthEnd = new Date(year, thisMonth + 1, 1);//the first day of the next month
var monthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));//amount of time in month start - amount of time in month end divided by time in milliseconds * time in minutes * time in hours * time in days rounded to the highest number
//
var firstDay = new Date(year, thisMonth, 1);
function setBindings() {
    $(".page").hide();
    $("#calendar").show();

        $(".header").prepend("<h1>" + todaysDate.toDateString() + "</h1>");
        var firstOfMonth = new Date(year, thisMonth, 1);
        for (var days = firstDay.getDay(); days >= 0; days--) {
            var daysApart = 0 - days;
            var lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
            var monthDate = Math.round((firstOfMonth - lastMonthDays) / (1000 * 60 * 60 * 24));

            if (monthDate == 0) {
                break
            } else if (monthDate == 1) {
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                break
            } else if (monthDate == 2) {
                daysApart = -monthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (daysApart == -2) {
                    daysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    break
                }
            } else if (monthDate == 3) {
                daysApart = -monthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")

                if (daysApart == -3) {
                    daysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (daysApart == -2) {
                        daysApart++;
                        lastOfMonth = new Date(year, thisMonth, 1 + daysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        break
                    }
                }
            } else if (monthDate == 4) {
                daysApart = -monthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (daysApart == -4) {
                    daysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (daysApart == -3) {
                        daysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        if (daysApart == -2) {
                            daysApart++;
                            lastOfMonth = new Date(year, thisMonth, 1 + daysApart);
                            $(".wednesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                            break
                        }
                    }
                }
            } else if (monthDate == 5) {
                daysApart = -monthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (daysApart == -5) {
                    daysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (daysApart == -4) {
                        daysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        if (daysApart == -3) {
                            daysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                            $(".wednesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                            if (daysApart == -2) {
                                daysApart++;
                                lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                                $(".thursday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                                break
                            }
                        }
                    }
                }
            } else if (monthDate == 6) {
                daysApart = -monthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (daysApart == -6) {
                    daysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (daysApart == -5) {
                        daysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        if (daysApart == -4) {
                            daysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                            $(".wednesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                            if (daysApart == -3) {
                                daysApart++;
                                lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                                $(".thursday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                                if (daysApart == -2) {
                                    daysApart++;
                                    lastMonthDays = new Date(year, thisMonth, 1 + daysApart);
                                    $(".friday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var i = 1; i <= monthLength; i++) {
            var today = todaysDate.getDate()
            date.setDate(i);
            var calendarDay = date.getDate();
            if (i < today) {
                if (weekDay[date.getDay()] == weekDay[0]) {
                    $(".sunday").append("<div class='size dead'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[1]) {
                    $(".monday").append("<div class='size dead'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[2]) {
                    $(".tuesday").append("<div class='size dead'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[3]) {
                    $(".wednesday").append("<div class='size dead'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[4]) {
                    $(".thursday").append("<div class='size dead'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[5]) {
                    $(".friday").append("<div class='size dead'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[6]) {
                    $(".saturday").append("<div class='size dead'>" + calendarDay + "</div>")
                }
            } else if (i >= today) {
                if (weekDay[date.getDay()] == weekDay[0]) {
                    $(".sunday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[1]) {
                    $(".monday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[2]) {
                    $(".tuesday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[3]) {
                    $(".wednesday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[4]) {
                    $(".thursday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[5]) {
                    $(".friday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                } else if (weekDay[date.getDay()] == weekDay[6]) {
                    $(".saturday").append("<div class='size click number" + calendarDay + "'>" + calendarDay + "</div>")
                }
            }
        }



    $(".next").click("click", function () {
        $(".header h1").html("");
        $(".sunday").html("");
        $(".monday").html("");
        $(".tuesday").html("");
        $(".wednesday").html("");
        $(".thursday").html("");
        $(".friday").html("");
        $(".saturday").html("");

        thisMonth += 1;
        var nextFirstOfMonth = new Date(year, thisMonth, 1);
        $(".header").prepend("<h1>" + month[nextFirstOfMonth.getMonth()] + " " + nextFirstOfMonth.getFullYear() + "</h1>");
        for(var nextMonthDay = nextFirstOfMonth.getDay(); nextMonthDay >= 0; nextMonthDay--){
            var nextDaysApart = 0 - nextMonthDay;
            var lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
            var nextMonthDate = Math.round((nextFirstOfMonth - lastMonthDays) / (1000 * 60 * 60 * 24));

            if (nextMonthDate == 0) {
                break
            } else if (nextMonthDate == 1) {
                $(".sunday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                break
            } else if (nextMonthDate == 2) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -2) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                    break
                }
            } else if (nextMonthDate == 3) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")

                if (nextDaysApart == -3) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -2) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                        break
                    }
                }
            } else if (nextMonthDate == 4) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -4) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -3) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                        if (nextDaysApart == -2) {
                            nextDaysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                            $(".wednesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                            break
                        }
                    }
                }
            } else if (nextMonthDate == 5) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -5) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -4) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                        if (nextDaysApart == -3) {
                            nextDaysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                            $(".wednesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                            if (nextDaysApart == -2) {
                                nextDaysApart++;
                                lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                                $(".thursday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                                break
                            }
                        }
                    }
                }
            } else if (nextMonthDate == 6) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -6) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -5) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                        if (nextDaysApart == -4) {
                            nextDaysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                            $(".wednesday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                            if (nextDaysApart == -3) {
                                nextDaysApart++;
                                lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                                $(".thursday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                                if (nextDaysApart == -2) {
                                    nextDaysApart++;
                                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                                    $(".friday").append("<div class='size click number" + lastMonthDays.getDate() + "'>" + lastMonthDays.getDate() + "</div>")
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
        var monthStart = nextFirstOfMonth;//the first day of the current month
        var monthEnd = new Date(year, thisMonth + 1, 1);//the first day of the next month
        var nextMonthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));
        console.log(nextMonthLength)
        for(var i = 1; i <= nextMonthLength; i++){
            nextFirstOfMonth.setDate(i);
            var nextCalendarDay = nextFirstOfMonth.getDate()
            if (weekDay[nextFirstOfMonth.getDay()] == weekDay[0]) {
                $(".sunday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[1]) {
                $(".monday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[2]) {
                $(".tuesday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[3]) {
                $(".wednesday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[4]) {
                $(".thursday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[5]) {
                $(".friday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[6]) {
                $(".saturday").append("<div class='size click number" + nextCalendarDay + "'>" + nextCalendarDay + "</div>")
            }
        }
    });
    $(".prev").click("click", function () {
        $(".header h1").html("");
        $(".sunday").html("");
        $(".monday").html("");
        $(".tuesday").html("");
        $(".wednesday").html("");
        $(".thursday").html("");
        $(".friday").html("");
        $(".saturday").html("");
        thisMonth -= 1;
        var nextFirstOfMonth = new Date(year, thisMonth, 1);
        $(".header").prepend("<h1>" + month[nextFirstOfMonth.getMonth()] + " " + nextFirstOfMonth.getFullYear() + "</h1>");
        for(var nextMonthDay = nextFirstOfMonth.getDay(); nextMonthDay >= 0; nextMonthDay--){
            var nextDaysApart = 0 - nextMonthDay;
            var lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
            var nextMonthDate = Math.round((nextFirstOfMonth - lastMonthDays) / (1000 * 60 * 60 * 24));

            if (nextMonthDate == 0) {
                break
            } else if (nextMonthDate == 1) {
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                break
            } else if (nextMonthDate == 2) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -2) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    break
                }
            } else if (nextMonthDate == 3) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")

                if (nextDaysApart == -3) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -2) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        break
                    }
                }
            } else if (nextMonthDate == 4) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -4) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -3) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        if (nextDaysApart == -2) {
                            nextDaysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                            $(".wednesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                            break
                        }
                    }
                }
            } else if (nextMonthDate == 5) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -5) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -4) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        if (nextDaysApart == -3) {
                            nextDaysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                            $(".wednesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                            if (nextDaysApart == -2) {
                                nextDaysApart++;
                                lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                                $(".thursday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                                break
                            }
                        }
                    }
                }
            } else if (nextMonthDate == 6) {
                nextDaysApart = -nextMonthDate;
                $(".sunday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                if (nextDaysApart == -6) {
                    nextDaysApart++;
                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                    $(".monday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                    if (nextDaysApart == -5) {
                        nextDaysApart++;
                        lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                        $(".tuesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                        if (nextDaysApart == -4) {
                            nextDaysApart++;
                            lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                            $(".wednesday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                            if (nextDaysApart == -3) {
                                nextDaysApart++;
                                lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                                $(".thursday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                                if (nextDaysApart == -2) {
                                    nextDaysApart++;
                                    lastMonthDays = new Date(year, thisMonth, 1 + nextDaysApart);
                                    $(".friday").append("<div class='size dead'>" + lastMonthDays.getDate() + "</div>")
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
        var monthStart = nextFirstOfMonth;//the first day of the current month
        var monthEnd = new Date(year, thisMonth + 1, 1);//the first day of the next month
        var nextMonthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));
        console.log(nextMonthLength)
        for(var i = 1; i <= nextMonthLength; i++){
            nextFirstOfMonth.setDate(i);
            var nextCalendarDay = nextFirstOfMonth.getDate()
            if (weekDay[nextFirstOfMonth.getDay()] == weekDay[0]) {
                $(".sunday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[1]) {
                $(".monday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[2]) {
                $(".tuesday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[3]) {
                $(".wednesday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[4]) {
                $(".thursday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[5]) {
                $(".friday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            } else if (weekDay[nextFirstOfMonth.getDay()] == weekDay[6]) {
                $(".saturday").append("<div class='size dead'>" + nextCalendarDay + "</div>")
            }
        }

    })
    $(".click").click("click",function(event){
        $(".page").hide();
        $("#time").show();
        for(var i = 1; i <= 10; i++){

            if(i == 1 || i == 2 || i == 3){
                $(".rooms").append("<div class='border'><p>Room#" + i + "</p></div>");
                $(".capacity").append("<div class='border'><p>4</p></div>");
                $(".timeSlots").append('<div class="scheduler am7Room' + i + '"></div>' + '<div class="scheduler am8Room' + i + '"></div>' + '<div class="scheduler am9Room' + i + '"></div>' + '<div class="scheduler am10Room' + i + '"></div>' + '<div class="scheduler am11Room' + i + '"></div>' + '<div class="scheduler pm12Room' + i + '"></div>' + '<div class="scheduler pm1Room' + i + '"></div>' + '<div class="scheduler pm2Room' + i + '"></div>' + '<div class="scheduler pm3Room' + i + '"></div>' + '<div class="scheduler pm4Room' + i + '"></div>' + '<div class="scheduler pm5Room' + i + '"></div>' + '<div class="scheduler pm6Room' + i + '"></div>' + '<div class="scheduler pm7Room' + i + '"></div>' + '<div class="scheduler pm8Room' + i + '"></div>' + '<div class="scheduler pm9Room' + i + '"></div>' + '<div class="scheduler pm10Room' + i + '"></div>' + '<div class="scheduler pm11Room' + i + '"></div>' + '<div class="scheduler am12Room' + i + '"></div>')
            }else if(i == 4 || i == 5 || i == 6 || i == 7){
                $(".rooms").append("<div class='border'><p>Room#" + i + "</p></div>");
                $(".capacity").append("<div class='border'><p>6</p></div>");
                $(".timeSlots").append('<div class="scheduler am7Room' + i + '"></div>' + '<div class="scheduler am8Room' + i + '"></div>' + '<div class="scheduler am9Room' + i + '"></div>' + '<div class="scheduler am10Room' + i + '"></div>' + '<div class="scheduler am11Room' + i + '"></div>' + '<div class="scheduler pm12Room' + i + '"></div>' + '<div class="scheduler pm1Room' + i + '"></div>' + '<div class="scheduler pm2Room' + i + '"></div>' + '<div class="scheduler pm3Room' + i + '"></div>' + '<div class="scheduler pm4Room' + i + '"></div>' + '<div class="scheduler pm5Room' + i + '"></div>' + '<div class="scheduler pm6Room' + i + '"></div>' + '<div class="scheduler pm7Room' + i + '"></div>' + '<div class="scheduler pm8Room' + i + '"></div>' + '<div class="scheduler pm9Room' + i + '"></div>' + '<div class="scheduler pm10Room' + i + '"></div>' + '<div class="scheduler pm11Room' + i + '"></div>' + '<div class="scheduler am12Room' + i + '"></div>')
            }else{
                $(".rooms").append("<div class='border'><p>Room#" + i + "</p></div>");
                $(".capacity").append("<div class='border'><p>8</p></div>");
                $(".timeSlots").append('<div class="scheduler am7Room' + i + '"></div>' + '<div class="scheduler am8Room' + i + '"></div>' + '<div class="scheduler am9Room' + i + '"></div>' + '<div class="scheduler am10Room' + i + '"></div>' + '<div class="scheduler am11Room' + i + '"></div>' + '<div class="scheduler pm12Room' + i + '"></div>' + '<div class="scheduler pm1Room' + i + '"></div>' + '<div class="scheduler pm2Room' + i + '"></div>' + '<div class="scheduler pm3Room' + i + '"></div>' + '<div class="scheduler pm4Room' + i + '"></div>' + '<div class="scheduler pm5Room' + i + '"></div>' + '<div class="scheduler pm6Room' + i + '"></div>' + '<div class="scheduler pm7Room' + i + '"></div>' + '<div class="scheduler pm8Room' + i + '"></div>' + '<div class="scheduler pm9Room' + i + '"></div>' + '<div class="scheduler pm10Room' + i + '"></div>' + '<div class="scheduler pm11Room' + i + '"></div>' + '<div class="scheduler am12Room' + i + '"></div>')
            }
        }
        $(".timeSlots div").click("click",function(event){
            var res = event.currentTarget.className.split(" ");
            var result = res[1];
            if(event.currentTarget.style.backgroundColor == "red"){
                console.log("im red");
                $(".modal2").css("display", "flex");
                $("#cancel").click("click",function(e){
                    e.preventDefault()
                    $(".modal2").css("display","none");
                    $("." + res[1]).css("background-color","white");
                    $(".helloModal2").css("display","flex");
                    $(".helloModal2").click("click",function(){
                        $(".helloModal2").css("display","none")
                    })
                })
                $(".close-modal2").click("click",function(){
                    var currentModal = this.parentElement.parentElement.className;
                    $("." + currentModal).css("display","none");
                })
            }else{
                $("." + res[1]).css("background-color","red");
                $(".modal").css("display","flex");


                $(".close-modal").click(function(e){
                    var currentModal = this.parentElement.parentElement.className;
                    $("." + res[1]).css("background-color","white");
                    $("." + currentModal).css("display", "none");


                });
                $(".helloClose-modal").click(function(e){
                    var currentModal = this.parentElement.parentElement.className;


                    $("." + currentModal).css("display", "none");


                });
                $(".helloModal").click(function(){
                    $(".helloModal").css("display", "none");
                });


                $("#confirm").click(function(e){
                    e.preventDefault();
                    $(".modal").css("display", "none");
                    $(".helloModal").css("display", "flex");

                });
            }

        })
    })

}

$(document).ready(function () {
    setBindings();
})