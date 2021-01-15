//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    // Should take an object and return its values in an array
    
    let array = [];
    
    for (let key in object) array.push(object[key]);
    
    return array;
 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    // Should take an object and return all its keys in a string each separated with a space
    
    let array = [];
    
    for (let key in object) array.push(key);
    
    return array.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    // Should take an object and return all its string values in a string each separated with a space
    
    let array = [];
    
    for (let key in object) {
        
        let value = object[key];
        if (typeof value === "string") array.push(value);
        
    }
    
    return array.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    // Should take one argument and return 'array' if its an array and 'object' if its an object

    if (collection === null) return;
    else if (collection instanceof Date) return;
    else if (Array.isArray(collection)) return "array";
    else if (typeof collection === "object") return "object";
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    // Should take a string of one word, and return the word with its first letter capitalized
    return string[0].toUpperCase() + string.substring(1, string.length);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    // Should take a string of words and return a string with all the words capitalized
    
    let newStr = "";
    
    for (let word of string.split(" ")) {
        newStr = newStr + word[0].toUpperCase() + word.substring(1,word.length) + " ";
    }
    
    return newStr.substring(0,newStr.length - 1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    // Should take an object with a name property and return 'Welcome <Name>!'
     
    let {name} = object;
    
    let theName = name[0].toUpperCase() + name.substring(1,name.length);
    
    return `Welcome ${theName}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    // Should take an object with a name an a species and return '<Name> is a <Species>'
    
    let {name, species} = object;
    
    let nameStr = name[0].toUpperCase() + name.substring(1,name.length);
    let speciesStr = species[0].toUpperCase() + species.substring(1,species.length);
    
    return `${nameStr} is a ${speciesStr}`;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    // Should take an object, if this object has a noises array return them as a string separated by a space
    if (object.noises) {
        
        if (Array.isArray(object.noises) && object.noises.length !== 0) {
            
            return object.noises.join(" ");
            
        }
        
    }
    
    return "there are no noises"

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    // Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false
    for (let theWord of string.split(" ")) {
        
        if (theWord === word) {
            return true;
        }
        
    }
    
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    // Should take a name and an object and add the name to the object's friends array then return the object
    
    if (object.friends) { // check if object has friends property
    
        object.friends.push(name);
        return object;
        
    }

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    // Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    
    if (!object.friends) return false;
    
    for (let string of object.friends) {
        if (name === string) {
            return true;
        }
    }
    
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
        
//     let friends = [];
//     let people = [];

// 	for (let person of array) {
	    
// 	    people.push(person.name)

// 		if (person.name === name) {
// 			friends = person.friends;
// 		}

// 	}

// 	let nonFriendsArr = [];

// 	for (let person of people) {

// 		if (!(friends.includes(person) || person === name)) {
// 			nonFriendsArr.push(person);
// 		}

// 	}

// 	return nonFriendsArr;

    let nonFriends = [];

    for (let i = 0; i < array.length; ++i) {
        
        if (!array[i].friends.includes(name) && array[i].name !== name) {
            nonFriends.push(array[i].name);
        }
        
    }
    
    return nonFriends;

}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    // Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
    // If <key> does not exist on <object> create it.
    
    // return {...object, [key]: value};
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
    // let newObj = {...object};
    
    // for (let key of array) {
        
    //     if (newObj[key]) delete newObj[key];
        
    // }
    
    // return newObj;
    
     for (let prop of array) {
        if (object.hasOwnProperty(prop)) delete object[prop];
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    // Should take an array and return an array with all the duplicates removed
    
    let newArr = [];
    
    for (let i = 0; i < array.length; ++i) {
        
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
        
    }
    
    return newArr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}