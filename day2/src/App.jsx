import Count from "./components/Count";
import ListMenu from "./components/ListData";
import Message from "./components/message";
import ProfileCard from "./components/ProfileCard"


function App() {
  const message = ["aku",'kaya']

  const fruits = ["aku kaya","kamu nanya","rugi dong"]
 
 const data = [
  { id: 1, skill: "berenang" },
  { id: 2, skill: "ngoding" },
  { id: 3, skill: "ngonten" }
];


  return (
    <>
     <div>
     <ProfileCard
      name = "Fery Suryadi"
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW2rqBVcWz1BbleWcESrNxfIvj7Kvxh3HEg&s"
      bio = "saya adalah anak ke 2"
      skills = {data}
      

     />
     <Count harga = {20000} diskon={20}/>
     </div>
     <div>
     <br/>
      <Message unreadmsg = {message}/>
      <Message unreadmsg = {[]}/>
     </div>
     <div>
     <br/>
      <ListMenu list ={fruits}/>
      <ListMenu list={[]}/>
     </div>
    </>
  )
}

export default App
