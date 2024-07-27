const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const mydata =  require('./models/myuser.js')
const multer = require('multer')
const a = require('dotenv/config.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const contactdata =  require('./models/contactmodal.js')
const sheduledata = require('./models/shedulemodal.js')
const addeventdata=require('./models/addeventmodel.js');
const floordata = require('./models/floorplanmodel.js');
const ticketsdata =  require('./models/usertickets.js')
const speakerdata = require('./models/speakermodel.js');
const feedbackdata = require('./models/feedbackmodel.js')
const subscribedata = require('./models/subscribemodel.js');
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors())
app.post('/checkemail', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await mydata.findOne({ email });
        if (user) {
            res.status(200).json({ exists: true });
        } else {
            res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//user insert
app.post('/',async(req,res)=>
{

const {name,email,pass,type } = req.body;

const user = await mydata.findOne({email});
if(user){
   res.json('user already created');
}


const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass , salt);
const newUser = new mydata ({
    name,
    email,
    pass : hashedPassword,
    type
})
newUser.save();
console.log(newUser)
})

//ticketfetch
app.get('/ticketdetails',(req,res)=>
{
    ticketsdata.find().then(ticketrecord =>res.json(ticketrecord)).
    catch(err=>res.json(err));
})

//User Fetch
app.get('/userdetails',(req,res)=>
{
    mydata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})
//userdelete

//userupdate
app.get('/getdataupdate/:id',(req, res)=>
{
    const id = req.params.id;
    mydata.findById({_id : id}).then(userrecord =>res.json(userrecord));
})

app.put('/updatedrecord/:id',(req,res)=>
{
    const id = req.params.id;
    mydata.findByIdAndUpdate({_id : id},{name : req.body.name,
        email : req.body.email, 
        pass : req.body.pass,

    type : req.body.type}).then(userupdatedrecord =>res.json(userupdatedrecord))
})




// Schedule Update
app.get('/getscheduleupdate/:id',(req, res)=>
{
    const id = req.params.id;
    sheduledata.findById({_id : id}).then(shedulerecord =>res.json(shedulerecord));
})
app.get('/shedulefetch',(req,res)=>{
    sheduledata.find().then(eventshedule=>res.json(eventshedule)).catch
    (err=>res.json(err));
})

app.put('/updatedrecordschedule/:id',(req,res)=>
{
    const id = req.params.id;
    sheduledata.findByIdAndUpdate({_id : id},{date : req.body.date,
        day : req.body.day, 
        time : req.body.time,
    subject : req.body.subject,
        venue:req.body.venue
}).then(userupdatedrecord =>res.json(userupdatedrecord))
})


//Addevent Insert
const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , '../public/images/dbimages');
    },
    filename : function(req , file , cb){
        const uniquesuffix = Date.now();
        cb(null , uniquesuffix + file.originalname )
    }
})
const upload = multer({storage : storage});


app.post('/addevent', upload.single('image') , async(req,res)=>{
   
   const {name,title,speaker,description,date,time,venue,ticket} = req.body;
   const imageName = req.file.filename;

   try {
    if(!name || !title || !speaker || !description || !date || !time ||! venue ||!ticket){
        return res.status(400).json({error : "All Fields Are required"});
    }
    const newUser = new addeventdata({
        image : imageName,
        name,
        title,speaker,description,date,time,venue,ticket
    })

    res.status(200).json({success : "User Created"});
    console.log(newUser);
    newUser.save();

} catch (error) {
    res.status(500).json({error : "Internal Server Error"});
}
})



//Fetch Event
app.get('/viewevent',(req,res)=>{
    addeventdata.find().then(eventshedule=>res.json(eventshedule)).catch
    (err=>res.json(err))
})

app.get('/vieweventfortickets/:id',(req,res)=>{
    const  id = req.params.id;
    addeventdata.findById({_id : id}).then(userrecord =>res.json(userrecord));
})


//Shedule Insert
app.post('/shedule',(req,res)=>
{
    sheduledata.create(req.body).then(mysheduleinsert=> res.json(mysheduleinsert))
})

//Shedule Fetch
app.get('/sheduledatefetch',(req,res)=>
{
    sheduledata.find().then(shedule =>res.json(shedule)).
    catch(err=>res.json(err));
})
//Schedule delete
app.delete('/deleteshedulerecord/:id',(req,res)=>{
    const id= req.params.id;
    sheduledata.findByIdAndDelete({_id: id}).then(sheduled=>res.json(sheduled));
})

//user delete
app.delete('/userdelete/:id',(req,res)=>{
    const id= req.params.id;
    mydata.findByIdAndDelete({_id: id}).then(mydatas=>res.json(mydatas));
})
    
    

//contactdeletes
app.delete('/contactdeletes/:id',(req,res)=>
{
    const id= req.params.id;
    contactdata.findByIdAndDelete({_id: id}).then(contactdata=>res.json(contactdata));
})

//subscribedelete
app.delete('/subscribedeletes/:id',(req,res)=>
{
    const id= req.params.id;
    subscribedata.findByIdAndDelete({_id: id}).then(subscribedeletedata=>res.json(subscribedeletedata));
})


//feedback delete

app.delete('/deletefeedbackrecord/:id',(req,res)=>{
    const id= req.params.id;
    feedbackdata.findByIdAndDelete({_id: id}).then(feedbackdata=>res.json(feedbackdata));
})
//feedback update
//feedback insert
app.post('/feedback',(req,res)=>
{
    feedbackdata.create(req.body).then(myfeedbackdatauser =>res.json(myfeedbackdatauser))
})
//feedback fetch

app.get('/viewfeedback',(req,res)=>
{
    feedbackdata.find().then(feedbackrecord =>res.json(feedbackrecord)).
    catch(err=>res.json(err));
})
//subscribeinsert

app.post('/subscribe',(req,res)=>
{
    subscribedata.create(req.body).then(mysubscribeuser =>res.json(mysubscribeuser))
})
//subscribe fetch
app.get('/viewsubscribe',(req,res)=>
{
    subscribedata.find().then(subscriberec =>res.json(subscriberec)).
    catch(err=>res.json(err));})
//Contact Insert
app.post('/contact',(req,res)=>
{
 contactdata.create(req.body).then(mycontactdatauser =>res.json(mycontactdatauser))   
})
//contact delete

//ticket delete
app.delete('/ticketdelete/:id',(req,res)=>{
const id= req.params.id;
ticketsdata.findByIdAndDelete({_id: id}).then(deleteticketdata=>res.json(deleteticketdata));
})
//Contact Fetch
app.get('/contactview',(req,res)=>
{
    contactdata.find().then(usercontact =>res.json(usercontact)).
    catch(err=>res.json(err));
})


//Floor Plan Insert
app.post('/floorplan',upload.single('floorimage'), async (req,res)=>
{
    // floordata.create(req.body).then(myfloorplaninsert=> res.json(myfloorplaninsert))
    const {number,Capacity,venue}=req.body;
    const imageName=req.file.filename;
    const newfloorplan =await  new floordata({
        number,
        Capacity,
        venue,
        floorimage : imageName
    })
    newfloorplan.save();
    console.log(newfloorplan)
})

app.post('/addspeaker',upload.single('simage'), async (req,res)=>
{
   
    const {name}=req.body;
    const imageName=req.file.filename;
    const newspeaker =await  new speakerdata({
       name,
        simage : imageName
    })
    newspeaker.save();
    console.log(newspeaker)
})


app.get('/viewspaker',(req,res)=>
{
    speakerdata.find().then(speaker=>res.json(speaker)).catch
    (err=>res.json(err))
})

// speaker delete

app.delete('/deletespeakerrecord/:id',(req,res)=>{
    const id= req.params.id;
    speakerdata.findByIdAndDelete({_id: id}).then(speakerdatas=>res.json(speakerdatas));
})
//delete event

app.delete('/deleteeventrecord/:id',(req,res)=>{
    const id= req.params.id;
    addeventdata.findByIdAndDelete({_id: id}).then(eventdatas=>res.json(eventdatas));
})
//Floor Plan Delete

app.delete('/deletefloorrecord/:id',(req,res)=>{
    const id= req.params.id;
    floordata.findByIdAndDelete({_id: id}).then(floordatas=>res.json(floordatas));
})

//Floor Plan Fetch
app.get('/viewfloor',(req,res)=>{
    floordata.find().then(floordetails=>res.json(floordetails)).catch
    (err=>res.json(err))
})

app.post('/login',async(req,res)=>
{
    const {loginemail ,loginpass} = req.body;
   
  
    const user = await mydata.findOne({email : loginemail});

    if(user)
    {
        const dotMatch = await bcrypt.compare(loginpass , user.pass);
       

        if(user.type =='user')
        {
            res.json('userdata')
        }
        else if(user.type =="exhibitor")
        {
            res.json('exhibitordata')
   }
     
    }

    else 
    {
        res.json('email not found!')
    }

   
  



    
    
    // const dotMatch = await bcrypt.compare(password , user.password);
    // console.log(dotMatch);
    // mydata.findOne({
    //     email : loginemail
    // }).then(user => 
    //     {
           
    //         if(user)
    //         {
    //             const a = bcrypt.compare(loginpass , user.pass);
    //             console.log(a)
    //             if(user.pass === a && user.type == "user")
    //             {
                   
    //                 res.json('userdata')
    //             }
    //             else if(user.pass === a && user.type == "exhibitor")
    //             {
             
    //                 res.json('exhibitordata')
    //             }
    //             else{
    //                 res.json('password incorrect')
    //             }
    //         }
    //         else
    //         {
    //             res.json('no Record found!!!!');
    //         }


    //     })
})

app.put('/acceptevent/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const event = await addeventdata.findById(id);
        if (event.status === 'Pending') {
            event.status = 'Request Accepted';
            await event.save();
            res.status(200).json({ message: 'Event request accepted.' });
        } else {
            res.status(400).json({ error: 'Event has already been accepted or rejected.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});


// Route to reject event request
app.put('/rejectevent/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const event = await addeventdata.findById(id);
        if (event.status === 'Pending') {
            event.status = 'Request Rejected';
            await event.save();
            res.status(200).json({ message: 'Event request rejected.' });
        } else {
            res.status(400).json({ error: 'Event has already been accepted or rejected.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

//Ticket Insert

app.post('/tickets',(req,res)=>
{
 ticketsdata.create(req.body).then(mytickets =>res.json(mytickets))   
})
app.get('/countdata', async(req,res)=>
{
    const speakercount = await speakerdata.countDocuments();
    const eventcount = await addeventdata.countDocuments();
    
    const usercount = await mydata.countDocuments();
    const feedbackcount = await feedbackdata.countDocuments();
    const schedulecount = await sheduledata.countDocuments();
    const floorcount = await floordata.countDocuments();
    const contactcount = await contactdata.countDocuments();
    const ticketcount = await ticketsdata.countDocuments();
    const subscribecount = await subscribedata.countDocuments();
 
    res.json({ speakercount,eventcount,usercount,feedbackcount, floorcount,schedulecount, contactcount,ticketcount,subscribecount});
})
app.listen(4000,()=>
{
    console.log("Server is running on port Number  : 4000");
})



