document.addEventListener("DOMContentLoaded", () => {
    const bookNow = document.querySelectorAll(".btn-primary");
    const bookingSection = document.getElementById("booking-section");
    bookingSection.style.display = "none";
    bookNow.forEach((button) => {
    button.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        const carTitle = card.querySelector(".card-title").innerText;
        const carEngine = card.querySelector(".card-text:nth-child(2)").innerText;
        const carSeats = card.querySelector(".card-text:nth-child(3)").innerText;
        const carPriceText = card.querySelector(".card-text:nth-child(4)").innerText;
        const carPricePerDay = parseInt(carPriceText.match(/\d+/)[0]);
  
        const carDetails = document.getElementById("car-details");
        carDetails.innerHTML = `
          <p><strong>Car Name:</strong> ${carTitle}</p>
          <p><strong>${carEngine}</strong></p>
          <p><strong>${carSeats}</strong></p>
          <p><strong>Price Per Day:</strong> ₹${carPricePerDay}</p>
          <form id="date">
            <label for="startDate">Start date:</label>
            <input type="date" id="startDate" required>
            <br><br>
            <label for="endDate">End date:</label>
            <input type="date" id="endDate" required>
            <br><br>
            <button type="submit" class="btn btn-success">Confirm Booking</button>
          </form>
          <p id="rent-display" style="margin-top: 20px;"></p>
        `;

        document.getElementById("view-section").style.display = "none";
        bookingSection.style.display = "block";
  
        const bookingForm = document.getElementById("date");
        bookingForm.addEventListener("submit", (event) => {
          event.preventDefault(); 
  
          const startDateInput = document.getElementById("startDate");
          const endDateInput = document.getElementById("endDate");
  
          const startDate = new Date(startDateInput.value);
          const endDate = new Date(endDateInput.value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
  
          if (startDate < today) {
            alert("Start date cannot be in the past.");
          } else if (endDate <= startDate) {
            alert("End date must be after the start date.");
          } else {
            const timeDifference = endDate - startDate; 
            const rentalDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
  
            const totalRent = carPricePerDay * rentalDays;
  
            const rentDisplay = document.getElementById("rent-display");
            
            rentDisplay.innerHTML = `
                <h2>Your Booking has been confirmed!</h2>
                <p><strong>Car Name:</strong> ${carTitle}</p>
                <strong>Total Rent:</strong> ₹${totalRent} for ${rentalDays} day(s).
                <br>
                <strong>Car Pickup Date:</strong> ${startDate}
                <br>
                <strong>Car Return Date:</strong> ${endDate}     `;
          }
        });
      });
    });
  });
    function goBack() {
    document.getElementById("booking-section").style.display = "none";
    document.getElementById("view-section").style.display = "block";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const viewSection = document.getElementById("view-section");
    const adminSection = document.getElementById("admin-section");
    const addCarForm = document.getElementById("add-car-form");
    const carForm = document.getElementById("car-form");
    const navBar = document.querySelector(".nav-bar");  
      adminSection.style.display = "none";
    addCarForm.style.display = "none";
      document.getElementById("admin-btn").addEventListener("click", () => {
      viewSection.style.display = "none";
      adminSection.style.display = "block"; 
      navBar.style.display = "none"; 
      populateAdminCars(); 
    });
      window.goBackToView = () => {
      adminSection.style.display = "none"; 
      viewSection.style.display = "block"; 
      navBar.style.display = "flex"; 
    };
      function populateAdminCars() {
      const adminCarsContainer = document.getElementById("admin-cars");
      adminCarsContainer.innerHTML = viewSection.innerHTML; 
    }
      document.getElementById("add-car-btn").addEventListener("click", () => {
      addCarForm.style.display = "block";
    });
      carForm.addEventListener("submit", (event) => {
      event.preventDefault();
        const carImageInput = carForm.querySelector("input[type='file']");
      const carName = document.getElementById("car-name").value;
      const carEngine = document.getElementById("car-engine").value;
      const carSeats = document.getElementById("car-seats").value;
      const carMileage = document.getElementById("car-mileage").value;
      const carPrice = document.getElementById("car-price").value;
  
      let carImage = "Assets/Images/default-car.jpg"; 
      if (carImageInput.files && carImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          carImage = e.target.result;
          addNewCar(carName, carEngine, carSeats, carMileage, carPrice, carImage);
        };
        reader.readAsDataURL(carImageInput.files[0]);
      } else {
        addNewCar(carName, carEngine, carSeats, carMileage, carPrice, carImage);
      }
        carForm.reset();
      addCarForm.style.display = "none";
    });
      function addNewCar(name, engine, seats, mileage, price, image) {
        const newCarCard = `
        <div class="col-12 col-md-4" style="width:37%; padding:40px;">
          <div class="card" style="width: 100%;"> <!-- Ensures card fits within the column -->
            <img src="${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Engine: ${engine}</p>
              <p class="card-text">Seats: ${seats}</p>
              <p class="card-text">Mileage: ${mileage}</p>
              <p class="card-text"><small class="text-muted">Price: ₹${price}/day</small></p>
              <button class="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      `;
      
      const allCardGroups = document.querySelectorAll(".card-group");
      const lastCardGroup = allCardGroups[allCardGroups.length - 1];
  
      if (lastCardGroup && lastCardGroup.children.length < 3) {
        lastCardGroup.insertAdjacentHTML("beforeend", newCarCard);
      } else {
        const newCardGroup = document.createElement("div");
        newCardGroup.classList.add("card-group", "row");
        newCardGroup.innerHTML = newCarCard;
          viewSection.appendChild(newCardGroup);
      }
  
      const adminCardGroup = document.querySelector("#admin-cars");
      adminCardGroup.insertAdjacentHTML("beforeend", newCarCard);
  
      alert(`${name} has been added successfully!`);
    }
  });
  