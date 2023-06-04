import express from "express";
const router = express.Router();


let fakeDb = [

{
    "task": "watching Tv",
    "hr": 33,
    "type": "entry",
    "_id": "ase3"
},


{
    "task": "wg Tv",
    "hr": 33,
    "type": "entry",
    "_id": "ase3"
},


{
    "task": "listen Tv",
    "hr": 33,
    "type": "entry",
    "_id": "ase3"
},

];


// read data from database and return to the client

router.get("/", (req, res) =>{
    res.json({
        message: "To do get method",
        data: fakeDb,
    });
});


// receieve data from client and create new record into the database
router.post("/", (req, res) =>{
    console.log("got hit", req.body);
    fakeDb.push(req.body);
    res.json({
        message: "New task has been added",
    });
});

//update record into the database based on the information recieved


router.put("/", (req, res) =>{
    res.json({
        message: "To do PUT method"
    });
});


// deleted one or many records from the database on the information recieved 

router.delete("/", (req, res) =>{
    const { _id } = req.body;

    fakeDb = fakeDb.filter((item)=> item._id !== _id);

    res.json({

        message: "The item has been deleted",
    });
});



export default router

