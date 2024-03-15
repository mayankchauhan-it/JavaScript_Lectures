function updateClock() {
    let now = new Date(); // Create a new Date object to get the current time
    let hours = now.getHours().toString().padStart(2, '0'); // Extract hours and format to ensure it's always two digits
    let minutes = now.getMinutes().toString().padStart(2, '0'); // Extract minutes and format similarly
    let seconds = now.getSeconds().toString().padStart(2, '0'); // Extract seconds and format similarly
    // let timeString = `${hours}:${minutes}:${seconds}`; // Combine hours, minutes, and seconds into a single string
    // document.getElementById('clock').textContent = timeString; // Update the text content of the clock element with the current time


    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, '0');


    update('hours', hours)
    update('minutes', minutes)
    update('seconds', seconds)
    update('ampm', ampm)
}


function element(id) {
    let element = document.getElementById(id)
    return element
}


function update(element_id, data) {

    let g_element = element(element_id)

    g_element.textContent = data
}



setInterval(updateClock, 1000); // Executes myFunction every 1000 milliseconds (1 second)
