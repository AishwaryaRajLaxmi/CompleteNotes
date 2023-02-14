/*
Update:-updation of data 

->updateOne(filter,data,options)
->updateMany(filter,data,options)
->replaceOne(filter,data,options)

 {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true,
    _id:"txl-1gr-2"
  }

  ->updating one data where distance is mathced
  db.flightData.updateOne({distance:12000},{$set:{marker:'delete'}})

  example:-
 {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true,
    _id:"txl-1gr-2"
    "marker":"delete"
  }

  ->updating all the data of marker present in the collection({}->empty brasis defines all of them)
  ->db.flightData.updateMany({},{$set:{marker:"toDelete"}})

   example:
 {
    "departureAirport": "MUC",
    "arrivalAirport": "SFO",
    "aircraft": "Airbus A380",
    "distance": 12000,
    "intercontinental": true,
    _id:"txl-1gr-2",
    "marker":"toDelete"
  }
  {
    "id":"txtl-1hr-1",
   "departureAirport":"TXL",
    "arrivalAirport":"LHR",
    "marker":toDelete"
  }

  ->db.flightData.update();
  ->it works like updateMany but it can work without set and $ sign

    example:-db.flightData.update({_id:"txl-1gr-2"},{delayed:false})

  ->db.flightData.replaceOne({id:"id"},{replaceble data})


  **Something Different**
  ->db.flightData.find().toArray():-collect all data and return in array format

  db.flightData.find().forEach((data)=>{
    printjson(data);
  })

*/