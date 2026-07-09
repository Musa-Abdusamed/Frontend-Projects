import profileImage from "./assets/profile.png";
import profile1 from "./assets/profile1.jpg"
import profile2 from "./assets/profile2.jpg"
import profile3 from "./assets/profile3.jpg"
// function ProfileCard(){
//   return(
//     <div className="max-w-sm round-xl bg-white p-6 shadow-lg">
//       <img src={profileImage}
//       alt="my profile"
//       className="mx-outo h-10 w-10 round-full object-cover" />

//     </div>
//   );
// }
// function App() {
//   return (
  
//     <div className="min-h-screen flex items-center justify-center bg-slate-1">
      
//       <div className="w-96 rounded-xl bg-white p-8 shadow-xl">
//         <h1 className="text-3xl font-bold text-blue-600">
//           Welcome, Musa!
//         </h1>
// <ProfileCard/>
//         <p className="mt-3 text-gray-red">
//           React and Tailwind are working together.
//         </p>

//         <button className="mt-6 rounded-lg bg-blue-600 px-4 
//         py-2 text-white transition hover:bg-blue-700">
//           Start Learning
//         </button>
//       </div>
//     </div>
//   );
// }
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
// function App(){
//   return(
//     <div className="flex gap-6">
// <ProfileCard 
// name="Musa Abdusamed"
// job="Frontend Developer"
// image={profileImage}
// />
// <ProfileCard 
// name="ahmed"
// job="Backend Developer"
// image={profileImage}
// />
// <ProfileCard 
// name="ali"
// job="UI Designer"
// image={profileImage}
// />
//     </div>
//   );
// }


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