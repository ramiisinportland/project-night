// Business Logic 

function AddressBook() {
  // Any attribute that assigned in here wc can get an access for uaing AddressBook.prototype
  this.contacts = {} // {}=>This is contact opject for the contact
  this.currentId = 0; // 0 to intalize the contact for the addressBook
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  // contact.id its coming from the paramater (contact) 
  this.contacts[contact.id] = contact;
  //To store the contact using its id
}

AddressBook.prototype.assignId = function() {
  this.assignId += 1; // this. will give an access into the opject
  return this.currentId; // to return the current id for each and every contact
}

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}


// Business Logic for Contacts ---------

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

//User Interface Logic ---------

let addressBook = new AddressBook ();

let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});




