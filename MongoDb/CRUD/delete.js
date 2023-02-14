/*
deleteOne(filter,options)
deleteMany(filter,options)

-->Below is our sample data
 {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true,
    _id:"txl-1gr-2",
     "marker":toDelete"

  }

  {
    "id":"txtl-1hr-1",
   "departureAirport":"TXL",
    "arrivalAirport":"LHR",
    "marker":toDelete"
  }
  
  ->db.flightData.deleteOne({departureAirport:"MUC"})


  ->db.flightData.deleteMany({marker:"toDelete"})
  ->delete all the field where marker:"toDelete"



*/