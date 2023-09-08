function showEventDetails(eventId) {
    // Get the event details based on the event id
    const eventTitle = document.querySelector(`.event:nth-child(${eventId}) h2`).textContent;
    const eventDate = document.querySelector(`.event:nth-child(${eventId}) .event-date`).textContent;
    const eventLocation = document.querySelector(`.event:nth-child(${eventId}) .event-location`).textContent;
    const eventDescription = document.querySelector(`.event:nth-child(${eventId}) .event-description`).textContent;
    
    // Display the event details in an alert
    alert("Reminder set for the event!");
  }
  