const contact = () => {
    const content = document.querySelector(".content");
    content.innerHTML = '';

    const main = document.createElement("div");
    main.classList.add('main');
    content.appendChild(main);

    const top = document.createElement('div');
    top.classList.add('top');
    main.appendChild(top);

    const reserve = document.createElement('button');
    reserve.textContent = "Make A Reservation";
    reserve.classList.add('reserve');
    top.appendChild(reserve);

    const numbers = document.createElement("div");
    numbers.textContent = "Contact Us at:";
    numbers.classList.add('numbers');
    top.appendChild(numbers);
    const owner = document.createElement("div");
    owner.textContent = "Owner: 98xxxxxxxx";
    owner.classList.add('owner');
    numbers.appendChild(owner);
    const manager = document.createElement("div");
    manager.textContent = "Manager: 93xxxxxxxx";
    manager.classList.add('manager');
    numbers.appendChild(manager);

    const form = document.createElement("form");
    form.classList.add('form');

    form.innerHTML = `<div class="start"><strong>Please enter your details</strong></div>

    <div class="form-row">
    <label for="formname">Name</label>
    <input type="text" id="formname" name="formname" required>
    </div>
    
    <div class="form-row">
    <label for="formseats">Seats</label>
    <input type="number" id="formseats" name="formseats" required>
    </div>
    
    <div class="form-row">
    <label for="formnumber">Mobile Number</label>
    <input type="number" id="formnumber" name="formnumber" placeholder="99xxxxxxxx" pattern="\d{10}" title="Please enter exactly 10 digits" required>
    </div>

    
    <button class="submit button" onclick="bookButton">Book</button>`;

    const cancel = document.createElement("button");
    cancel.classList.add('cancel');
    cancel.classList.add('button');
    cancel.textContent = "Cancel";
    cancel.addEventListener('click',cancelButton);
    

    reserve.addEventListener('click',()=>{
        top.removeChild(reserve);
        top.removeChild(numbers);
        top.appendChild(form);
        top.appendChild(cancel);
    });

    function bookButton(){
        top.removeChild(form);
        top.removeChild(cancel);
        top.appendChild(reserve);
        top.appendChild(numbers);
    }

    function cancelButton(){
        top.removeChild(form);
        top.removeChild(cancel);
        top.appendChild(reserve);
        top.appendChild(numbers);
    }

    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerHTML = "Cancellations:<br>1) Pasta-Roni is entitled to cancel or change the date of an event. Should this happen, Pasta-Roni will attempt to provide a suitable solution. If an event is cancelled or postponed, Pasta-Roni  will do its utmost to inform you as soon as possible. However, Pasta-Roni cannot guarantee it is possible to inform you timely of any change or cancellation of an event or be held responsible for refunds, compensations or for any resulting costs you may incur, for example for travel, accommodation and/or any other related goods or service.<br>2) Before confirming your reservation, always check carefully that you have reserved the correct (number of) persons. Wrongfully ordered (numbers of) persons are not refundable.<br>3) All purchases are final. The dinner cruise tickets bought here cannot be returned for any refunds whatsoever; group bookings paid for on the website likewise cannot be cancelled by the purchaser and refunds claimed for any reason whatsoever."
    main.appendChild(footer);
}


export {contact};