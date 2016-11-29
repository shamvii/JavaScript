var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
//ADDRESS BOOK
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
};
function search(lastName){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[0].lastName){
            printPerson(contacts[0]);
        }
        else if(contacts[1].lastName){
            printPerson(contacts[1]);
        }
    }
}
search("Jones");
function add(first, last, telephone, email) {
    contacts[contacts.length] = {
        firstName: first,
        lastName: last,
        phoneNumber: telephone,
        email: email
    };
};
add("Dave", "Morgan", "dmorgan@gmail.com", "(605)-656-7686");
list();
