var faker = require('faker/locale/id_ID')

function generateEmployees () {
  var employees = []
  for (var id = 1; id <= 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var username = faker.internet.userName()
    var jobtitle = faker.random.number(50)
    var email = faker.internet.email()
    var addres = faker.address.streetAddress()

    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "username": username,
      "address": addres,
      "email": email,
      "job_title": jobtitle
    })
  }
  return employees
}

function generateJobTitles () {
    var job_title = []
    for (var id = 1; id <= 50; id++) {
      var jobname = faker.name.jobTitle()
      var notes = faker.random.words()
      var type = faker.name.jobType()
      var area = faker.name.jobArea()
  
      job_title.push({
        "id": id,
        "name": jobname,
        "description": notes,
        "type": type,
        "area": area
      })
    }
    return job_title
  }

module.exports = function(){
  return {
    "employees": generateEmployees(),
    "job_titles": generateJobTitles()
  }  
}