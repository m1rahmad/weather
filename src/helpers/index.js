const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturady',
]
const months = [
    'Januruary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]


export function getTime(dt) {   
    const time = new Date(dt * 1000)
    let h = time.getHours()
    let m = time.getMinutes()
    if (h < 10) h = `0${h}`
    if (m < 10) m = `0${m}`
    return `${h}:${m}`
}

export function getDay(dt){
    return weekday[new Date(dt * 1000).getDay()]
}
export function getDate(dt){
    return `${new Date(dt * 1000).getDate() } ${months[new Date(dt * 1000).getMonth()]}`  
}