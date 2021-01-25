// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jonhourcade.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(customers) {

    return (_.filter(customers, function(customer) {
        return customer.gender === "male";
    })).length;

};

var femaleCount = function(customers) {

    return _.reduce(customers, function(count, customer) {

        if (customer.gender === "female") return ++count;
        return count;

    }, 0);

}

var oldestCustomer = function(customers) {

    return(_.reduce(customers, function(oldestCustomer, customer) {

        if (customer.age > oldestCustomer.age) return customer;
        return oldestCustomer;

    })).name;

}

var youngestCustomer = function(customers) {

    return (_.reduce(customers, function(youngestCustomer, customer) {

        if (customer.age < youngestCustomer.age) return customer;
        return youngestCustomer;

    })).name;

}

var averageBalance = function(customers) {

    return (_.reduce(customers, function(total, customer) {
        return total + parseFloat(customer.balance.slice(1).replace(",", ""));
    }, 0.0)) / customers.length;

}

var firstLetterCount = function(customers, letter) {

    return (_.filter(customers, function(customer) {
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    })).length;

}

var friendFirstLetterCount = function(customers, customer, letter) {

    let names = _.reduce(customers, function(names, customer) {
        return names.concat(customer.name);
    }, []);
    
    let index = _.indexOf(names, customer);

    return _.reduce(customers[index].friends, function(count, customer) {

        if (customer.name[0].toLowerCase() === letter.toLowerCase()) return ++count;
        return count;

    }, 0);

}

var friendsCount = function(customers, name) {

    return _.reduce(customers, function(customersNames, customer) {

        let friendsNames = _.reduce(customer.friends, function(friendsNames, friend) {
            return friendsNames.concat(friend.name);
        }, []);

        if (_.contains(friendsNames, name)) return customersNames.concat(customer.name);
        return customersNames;

    }, []);

}

var topThreeTags = function(customers) {

    // use reduce to create tag tally object
    let tagTally = _.reduce(customers, function(tagTally, customer) {

        _.each(customer.tags, function(tag) {

            if (tagTally[tag]) ++tagTally[tag];
            else tagTally[tag] = 1;

        });

        return tagTally;

    }, {});

    // convert tag tally object to tag tally array
    let tagTallyArray = Object.entries(tagTally);
    
    // sort tag tally array
    tagTallyArray.sort(function(tag1, tag2) {
        return tag2[1] - tag1[1];
    });

    // use reduce to create array containing first element of each tag
    return _.reduce(tagTallyArray, function(newArr, tag, index) {

        if (index < 3) newArr = newArr.concat(tag[0]);
        return newArr;

    }, []);

}

var genderCount = function(customers) {

    return _.reduce(customers, function(genderTally, customer) {

        if (genderTally[customer.gender]) ++genderTally[customer.gender];
        else genderTally[customer.gender] = 1;

        return genderTally;

    }, {});

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
