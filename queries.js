db.challenge.find()

db.bios.find( { "awards" : { $exists: true } } );

db.bios.find( { "awards" : { $exists: false } } );

db.bios.find( { contribs: { $in:  [ "OOP", "UNIX" ] } } );

db.bios.find( {awards : { $elemMatch: {award : "Turing Award"} } } );

db.bios.find( { "_id" : { $gt: 3, $lt: 7 } } );

db.bios.find( { awards : { $elemMatch: { year : { $lt:2000 } } } } );

db.bios.find( { birth : { $exists: true },  death : { $exists : false } } );
