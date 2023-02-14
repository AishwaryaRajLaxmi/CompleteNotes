/*
 * Read:-finding the data and showing to user
     ->find(filter,options)
       ->findOne(filer,options)

       ->db.flightData.find({intercontineral:true});


       -->it will show the value where distance is greater than 10000 ($gt denotes greaterthan)

        example:
           db.flightData.find({distance:{$gt:10000}})

       -->it will return only first mathing element whre distance is greater than 10000

       example:
          db.flightData.findOne({distance:{$gt:10000}})

----------------------------------------------------------------------------------------------
                  <<Projection>>
db.flightData.find({},{name:1,_id:0,age:0}).pretty()

 it will only return names of each data


 --------------------------------------------------------------------------------------------               <<Working with Embedded Documents>>

 flights> db.flightData.updateMany({},{$set:{status:{desc:"on-time",lastupdated:"1 hour ago"}}})

   nested information 




 


 */
