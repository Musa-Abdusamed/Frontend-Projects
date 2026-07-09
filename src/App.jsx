import profileImage from "./assets/profile.png";
import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.jpg";
import profile3 from "./assets/profile3.jpg";

function ProfileCard({name,job,image,location}){
  return(
    <div className="w-72 rounded-xl bg-white p-6 shadow-lg">
      <img 
      src={image}
      alt={name}
      className="mx-auto h-32 rounded-full object-cover"/>

<h2 className="mt-4 text-center text-2xl font-bold">
  {name}

</h2>
<p className="text-center text-green-700">
  {job}
</p>
<p className="text-center text-blue-500">
  {location}
  </p>
    </div>
    
  );
}


const users=[{
  name:"Musa:",
  job: "Frontend Developer",
  image: profile1,
  location: "Adama"
},
{
  name:"Ahmed:",
  job: "Backend Developer",
  image: profile2,
  location: "Addis Ababa"
},
{
  name: "Ali:",
  job: "UI designer",
  image: profile3,
  location: "Dire Dawa"
}


];
function App(){
  return(
    <div className="min-h-screen flex justify-center gap-6 bg-slate-100 items-center">
      {
        users.map((user)=>(
          <ProfileCard
          name={user.name}
          job={user.job}
          image={user.image}
          location={user.location}
          />
        ))
      }

    </div>
  );
}


 export default App;