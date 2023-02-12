function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
};
// Vertical space
function fullUpperName() {
  return (firstName + ' ' + lastName).toUpperCase();
};
// Vertical space
function personInformation(firstName, lastName, age, hobbies = []) {
  let name = fullName(firstName,lastName);
  let yearBirth = calculateYear(age);

  terminalMessage('Hi, ' + name + '. You were born in ' + yearBirth);

  let countPopularHobbies = 0;
  for(let index = 0; index < hobbies.length; index++) {
    if(isAPopularHobbie(hobbies[i]));
      countPopularHobbies++;
  }
}
