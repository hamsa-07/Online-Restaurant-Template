// script.js

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var partySize = document.getElementById('party-size').value;
  
    // Perform validation if needed
  
    // Create reservation object
    var reservation = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time,
      partySize: partySize
    };
  
    // For demonstration, display reservation details in console
    console.log('Reservation details:', reservation);
  
    // Clear form fields
    document.getElementById('reservation-form').reset();
  });
  