function idCard() {
    //First Name
    let firstName =
    document.getElementById("firstName").value;
    console.log(firstName);
    document.getElementById("cardName").innerHTML = firstName;
    //Last Name
    let lastName =
    document.getElementById("lastName").value;
    console.log(lastName);
    document.getElementById("cardLastName").innerHTML = lastName;
    //Address
    let userAddress =
    document.getElementById("userAddress").value;
    console.log(userAddress);
    document.getElementById("cardAddress").innerHTML = userAddress;
    //Phone Number
    let phoneNumber =
    document.getElementById("phoneNumber").value;
    console.log(phoneNumber);
    document.getElementById("cardNumber").innerHTML = phoneNumber;
     //Age
    let userAge =
    document.getElementById("userAge").value;
    console.log(userAge);
    document.getElementById("cardAge").innerHTML = userAge;

}
