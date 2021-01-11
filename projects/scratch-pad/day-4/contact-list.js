// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContact(id, nameFirst, nameLast) {
    
    return {
        id, // shorthand, same as id: id
        nameFirst, // same
        nameLast // same
    };

} 


function makeContactList() {

    return {
        
        contacts: [],
        
        // this is a method
        // shorthand, same as length: function() {return this.contacts.length;},
        length() {
            return this.contacts.length; // this refers to the contacts instance
            // variable of the makeContactList function
        },
        
        addContact(contact) {
            this.contacts.push(contact);
        },
        
        findContact(fullName) {

            let names = fullName.toLowerCase().split(' '); // create array with two elements,
            // element zero contains first name, element one contains last name
            
            let nameFirst = names[0];
            let nameLast = names[1];
            
            // step through contacts instance variable
            for (let contact of this.contacts) { // use for each/for of loop
            // index not used in code block
                
                let theNameFirst = contact.nameFirst.toLowerCase(); // theNameFirst is the first name
                // of the contact passed into the method, bad name
                let theNameLast = contact.nameLast.toLowerCase(); // theNameLast is the last name
                // of the contact passed into the method, bad name
                
                if (nameFirst === theNameFirst && nameLast === theNameLast) { // is the first name
                // of the contact passed into the method the same as the first name of the contact
                // that the loop on, same for last name
                    return contact; // if so return contact
                }
                
            }
            
            return undefined; // unnecessary, functions return undefined if nothing is returned
            
        },
        
        removeContact({id, firstName, lastName}) {
            
            // user for loop, need index
            for (let i = 0; i < this.length(); ++i) {
                
                // set contact equal to contacts sub i
                let contact = this.contacts[i];
                
                // if id, first, and last are equal to those of contact
                if (id === contact.id && firstName === contact.firstName && lastName === contact.lastName) {
                    this.contacts.splice(i, 1); // splice mutates contacts array
                    // i is the index to start at, 1 is the number of elements to remove
                    // there is return value but we don't need it
                }
                
            }
            
        },
        
        printAllContactNames() {
            
            let string = "";
            
            // use for of/for each cause we don't need index
            for (let contact of this.contacts) {
                
                string += contact.nameFirst;
                string += ' ';
                string += contact.nameLast;
                string += '\n'; // add new line for every contact
                
            }
            
            return string.substring(0, string.length - 1); // remove last new line with substring
            // 0 is starting index
            // string.length - 1 is ending index
            // ending index is non-inclusive
            // use string.length to include last character
            // use string.length - 1 to extract last character
            // probably a more elegant solution
            
        }
        
    };
    
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
