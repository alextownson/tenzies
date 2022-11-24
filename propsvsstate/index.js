function greeting(name) {
    const hours = new Date().getHours()
    console.log(hours)
    let timeOfDay 
    if (hours >= 4 && hours < 12) {
        timeOfDay = 'morning'
    } else if ( hours >= 12 && hours < 17 ) {
        timeOfDay = 'afternoon'
    } else if ( hours >= 17 && hours < 20) {
        timeOfDay = 'evening'
    }else {
        timeOfDay = 'night'
    }

    console.log('Good ' + timeOfDay + ', ' + name + '!')
}

greeting('Bob');