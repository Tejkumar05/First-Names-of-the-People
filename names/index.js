const eachPerson = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (eachPerson) => {
  return getFirstNames(eachPerson);
};

module.exports = getPeopleInCity;
