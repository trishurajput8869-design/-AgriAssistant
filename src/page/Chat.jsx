import { useState, useRef } from "react";
import {
  Send,
  ImagePlus,
  Mic,
  Leaf,
  Bot,
  User,
  Plus,
  Sprout,
  CloudSun,
  Trash2
} from "lucide-react";

import { motion } from "framer-motion";


function Chat() {


  const [message,setMessage] = useState("");

  const [image,setImage] = useState(null);

  const fileRef = useRef(null);



  const [messages,setMessages] = useState([

    {
      role:"ai",
      text:"Namaste 🌱 Main AgriAssist AI hoon. Aap fasal, mitti ya farming se related sawaal puch sakte hain."
    }

  ]);





  const sendMessage = async ()=>{


    if(!message.trim() && !image) return;



    const userText = message;



    setMessages(prev=>[

      ...prev,

      {

        role:"user",

        text:
        userText || "Is fasal ki photo check karo 🌱",

        image:image

      }

    ]);



    setMessage("");



    try{



      // ==========================
      // IMAGE REQUEST
      // ==========================


      if(image){


        const formData = new FormData();



        const blob = await fetch(image)
        .then(res=>res.blob());



        formData.append(

          "file",

          blob,

          "crop-image.jpg"

        );




        const res = await fetch(

          "http://127.0.0.1:8000/predict",

          {

            method:"POST",

            body:formData

          }

        );




        const data = await res.json();




        setMessages(prev=>[

          ...prev,

          {

            role:"ai",

            text:

            data.response ||

            data.prediction ||

            "Image analyze nahi ho payi 🌱"

          }

        ]);



      }





      // ==========================
      // TEXT CHAT REQUEST
      // ==========================


      else{


        const res = await fetch(

          "http://127.0.0.1:8000/chat",

          {

            method:"POST",

            headers:{

              "Content-Type":"application/json"

            },


            body:JSON.stringify({

              message:userText

            })

          }

        );



        const data = await res.json();




        setMessages(prev=>[

          ...prev,

          {

            role:"ai",

            text:

            data.response ||

            "Kuch problem aa gayi 🌱"

          }

        ]);



      }




    }

    catch(error){



      console.log(error);



      setMessages(prev=>[

        ...prev,

        {

          role:"ai",

          text:
          "Backend se connection nahi ho pa raha 🌱"

        }

      ]);



    }



    setImage(null);


  };









  const handleImage=(e)=>{


    const file=e.target.files[0];


    if(file){


      setImage(

        URL.createObjectURL(file)

      );


    }


  };








return (

<div className="
min-h-screen
bg-[#050805]
text-white
flex
">





{/* Sidebar */}


<div className="
hidden md:flex
w-72
border-r border-white/10
bg-black/30
p-5
flex-col
">



<div className="
flex items-center gap-3 mb-10
">


<div className="
w-12 h-12
rounded-xl
bg-green-500/20
flex items-center justify-center
">

<Leaf className="text-green-400"/>

</div>



<div>

<h1 className="font-bold text-xl">
AgriAssist
</h1>


<p className="text-xs text-gray-400">
AI Farming Assistant
</p>


</div>


</div>





<button className="
bg-green-500
text-black
rounded-xl
py-3
font-semibold
flex
gap-2
items-center
justify-center
">

<Plus size={18}/>

New Chat

</button>





<div className="mt-10">


<p className="
text-gray-500
text-sm
mb-3
">

Quick Tools

</p>



<div className="space-y-3">


<div className="
bg-white/5
p-3
rounded-xl
flex
gap-3
items-center
">

<Sprout 
size={18}
className="text-green-400"
/>

Crop Analysis

</div>




<div className="
bg-white/5
p-3
rounded-xl
flex
gap-3
items-center
">


<CloudSun
size={18}
className="text-green-400"
/>

Weather Advice


</div>


</div>


</div>



</div>









{/* MAIN CHAT */}


<div className="
flex-1
flex
flex-col
">





<div className="
h-20
border-b border-white/10
flex
items-center
px-6
">


<div>

<h2 className="
text-xl
font-semibold
">

AgriAssist AI

</h2>


<p className="text-gray-400 text-sm">

Ask anything about farming 🌱

</p>


</div>


</div>









<div className="
flex-1
overflow-y-auto
p-6
space-y-5
">


{

messages.map((msg,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className={`
flex gap-3

${msg.role==="user"
?
"justify-end"
:
"justify-start"}

`}

>



{
msg.role==="ai" &&

<div className="
w-10 h-10
rounded-full
bg-green-500/20
flex
items-center
justify-center
">

<Bot className="text-green-400"/>

</div>

}





<div className={`
max-w-xl
px-5
py-4
rounded-2xl


${msg.role==="user"

?
"bg-green-500 text-black"

:

"bg-white/10"

}

`}>



{
msg.image &&

<img

src={msg.image}

className="
rounded-xl
mb-3
w-48
"

/>

}



{msg.text}


</div>






{
msg.role==="user" &&

<div className="
w-10 h-10
rounded-full
bg-white/10
flex
items-center
justify-center
">

<User/>

</div>

}



</motion.div>


))

}


</div>









{/* INPUT */}


<div className="
p-5
border-t
border-white/10
">


{

image &&

<div className="mb-3 flex gap-3 items-center">


<img

src={image}

className="
w-20
h-20
rounded-xl
object-cover
"

/>


<button
onClick={()=>setImage(null)}
>

<Trash2 className="text-red-400"/>

</button>


</div>


}







<div className="
flex
gap-3
bg-white/5
border
border-white/10
rounded-2xl
p-3
">


<input

type="file"

accept="image/*"

hidden

ref={fileRef}

onChange={handleImage}

/>




<button
onClick={()=>fileRef.current.click()}
>

<ImagePlus className="text-green-400"/>

</button>





<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

placeholder="Fasal ke bare me pucho..."

className="
flex-1
bg-transparent
outline-none
"

/>





<button>

<Mic className="text-gray-400"/>

</button>






<button

onClick={sendMessage}

className="
bg-green-500
text-black
p-3
rounded-xl
"

>

<Send size={18}/>

</button>



</div>



</div>





</div>



</div>


);


}


export default Chat;