
import './App.css';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom';
import Index from './components/home';
import About from './components/aboutus';
import Speakers from './components/speakers';
import Schedule from './components/schedule';
import Gallery from './components/gallery';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Login from './components/login';
import User from './components/admindashboard/user';
import AdminDashboard from './components/admindashboard';
import UserDashboard from './components/userdashboard/userdashmain';
import ExhibitorDashboard from './components/exhibitordashboard/exhibitordash';
import AddEvent from './components/exhibitordashboard/addevent';
import ScheduleAndDateAdd from './components/admindashboard/sheduleanddateadd';
import ViewEvent from './components/admindashboard/vieweventrequest';
import EventRequest from './components/exhibitordashboard/EventRequest';
import ViewEventRequest from './components/admindashboard/vieweventrequest';
import UpdateUserData from './components/admindashboard/updateuser';
import AddFloorPlan from './components/admindashboard/addfloorpaln';
import Exhibitorevent from './components/exhibitordashboard/exhibitorevents';
import EventDetail from './components/admindashboard/admineventdetail';
import ScheduleFetch from './components/admindashboard/schedulefetch';
import UpdateSheduledata from './components/admindashboard/updateschedule';
import Events from './components/event';
import UserTicket from './components/userticket';
import Faq from './components/faq';
import AdminTicket from './components/admindashboard/adminticket';
import Talk from './components/exhibitordashboard/talk';
import ExhibitorTicket from './components/exhibitordashboard/ticketstatus';
import FloorFetch from './components/exhibitordashboard/floorfetch';
import AddSpeaker from './components/admindashboard/addspeaker';
import ViewSpeaker from './components/admindashboard/viewspeaker';
import UpdateSpeaker from './components/admindashboard/updatespeaker';
import AdminFloorFetch from './components/admindashboard/adminfloorfetch';
import UserEvent from './components/userdashboard/userevent';
import BOOKTicket from './components/userdashboard/userticket';
import ContactData from './components/admindashboard/contactdata';
import Feedback from './components/feedback';
import ViewFeedback from './components/admindashboard/fetchfeedback';
import ContactDatas from './components/admindashboard/contactdata';
import ViewSubscription from './components/admindashboard/viewsubscription';


function App() {
  return (
    <div className="App">
    
<Routes>
<Route path='/' element={<Index/>}/>
    <Route path='/about'element = {<About/>}/>
   <Route path ='/speaker' element={<Speakers/>}/>
   <Route path='/schedule' element={<Schedule/>}/>
   <Route path='/gallery' element= {<Gallery/>}/>
   <Route path='/pricing' element= {<Pricing/>}/>
   <Route path='/contact' element= {<Contact/>}/>
   <Route path='/signup' element= {<Signup/>}/>
   <Route path='/login' element= {<Login/>}/>
   <Route path='/faq' element= {<Faq/>}/>
<Route path='/event' element={<Events/>}/>
<Route path='/userticket/:id' element={<UserTicket/>}/>
<Route path='/feedback' element={<Feedback/>}/>
</Routes>


<Routes>
  {/* Admin Dashboard Routes */}

<Route path='/userdata' element= {<User/>}/>
<Route path='/sheduledateadd' element= {<ScheduleAndDateAdd/>}/>
<Route path='/vieweventreq' element= {<ViewEventRequest/>}/>
<Route path='/update/:id' element= {<UpdateUserData/>}/>
<Route path='/floorplan' element= {<AddFloorPlan/>}/>
<Route path='/viewevent' element= {<EventDetail/>}/>
<Route path='/sheduledatefetch' element={<ScheduleFetch/>}/>
<Route path='/updateshedule/:id' element={<UpdateSheduledata/>}/>
<Route path='/adminticket' element={<AdminTicket/>}/>
<Route path='/addspeaker' element={<AddSpeaker/>}/>
<Route path='/fetchspeaker' element={<ViewSpeaker/>}/>
<Route path='/updatespeaker/:id' element={<UpdateSpeaker/>}/>
<Route path='/viewfeedback' element={<ViewFeedback/>}/>
<Route path='/adminfloorplan' element={<AdminFloorFetch/>}/>
<Route path='/admindashboard' element={<AdminDashboard/>}/>
<Route path='/contactview' element={<ContactDatas/>}/>
<Route path='/viewsubscription' element={<ViewSubscription/>}/>


{/* User Dashboard Routes */}
<Route path='/userdashboard' element= {<UserDashboard/>}/>
<Route path='/usereventstatus' element={<UserEvent/>}/>
<Route path='/bookticketstatus' element={<BOOKTicket/>}/>


{/* Exhibitor Dashboard Routes */}
<Route path='/exhibitordashboard' element= {<ExhibitorDashboard/>}/>
<Route path='/addevent' element= {<AddEvent/>}/>
<Route path='/eventrequesttoadmin' element= {<EventRequest/>}/>
<Route path='/exhibitoreventstatus' element= {<Exhibitorevent/>}/> 
<Route path='/talkwithadmin' element= {<Talk/>}/>
<Route path='/exhibitorticketstatus' element= {<ExhibitorTicket/>}/>
<Route path='/fetchfloor' element= {<FloorFetch/>}/>


{/* Exhibitor Dashboard Routes */}

</Routes>
    </div>
  );
}

export default App;
