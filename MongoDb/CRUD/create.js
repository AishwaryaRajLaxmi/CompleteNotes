/*
Create:-for inserting data into collections

->insertOne(data,options)
->insertMany(data,options)

-->Below is our sample data
 {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true,
    _id:"txl-1gr-2"
  }

  > db.flightData.insertOne(
  {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true
  });


  >db.flightData.insertMany([{
    {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true,
    _id:"txl-1gr-2"
  },
  {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true
  }]);






*/

