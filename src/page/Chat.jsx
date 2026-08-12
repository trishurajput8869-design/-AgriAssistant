import { useState, useEffect, useRef } from "react";
import {
  Send,
  Mic,
  Leaf,
  Bot,
  User,
  Volume2
} from "lucide-react";


function Chat() {


const [message,setMessage] = useState("");

const [messages,setMessages] = useState([
{
role:"assistant",
content:
"Namaste 🌱 Main AgriAssist AI hoon. Fasal aur kheti se jude sawal puchiye."
}
]);


const [voices,setVoices] = useState([]);

const [listening,setListening] = useState(false);

const recognitionRef = useRef(null);





// ---------------- LOAD VOICES ----------------


useEffect(()=>{


const loadVoices=()=>{

const allVoices =
window.speechSynthesis.getVoices();


setVoices(allVoices);


};


loadVoices();


window.speechSynthesis.onvoiceschanged =
loadVoices;



},[]);







// ---------------- TEXT TO SPEECH ----------------


const speakText=(text)=>{


if(!text)
return;



window.speechSynthesis.cancel();



const utterance =
new SpeechSynthesisUtterance(text);




// Hindi best voice search

let hindiVoice =
voices.find(
voice =>
voice.lang==="hi-IN"
);



// second priority

if(!hindiVoice){

hindiVoice =
voices.find(
voice =>
voice.name.toLowerCase()
.includes("hindi")
);

}



// fallback Indian voice

if(!hindiVoice){

hindiVoice =
voices.find(
voice =>
voice.lang.includes("en-IN")
);

}



if(hindiVoice){

utterance.voice =
hindiVoice;

}




utterance.lang="hi-IN";


// natural settings

utterance.rate=0.82;

utterance.pitch=1.05;

utterance.volume=1;



window.speechSynthesis.speak(
utterance
);



};









// ---------------- MICROPHONE ----------------



useEffect(()=>{


const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(!SpeechRecognition)
return;




const recognition =
new SpeechRecognition();



recognition.lang="hi-IN";


recognition.continuous=false;


recognition.interimResults=false;



recognition.onstart=()=>{

setListening(true);

};



recognition.onend=()=>{

setListening(false);

};





recognition.onresult=(event)=>{


const speechText =
event.results[0][0].transcript;


setMessage(speechText);



};




recognitionRef.current =
recognition;



},[]);







const startMic=()=>{


if(recognitionRef.current){


recognitionRef.current.start();


}


};








// ---------------- SEND MESSAGE ----------------


const sendMessage=async()=>{


if(!message.trim())
return;




const question=message;



setMessages(prev=>[

...prev,

{
role:"user",
content:question
}

]);



setMessage("");




try{


const response =
await fetch(

"http://127.0.0.1:8000/chat",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},


body:JSON.stringify({

message:question

})

}


);



const data =
await response.json();



const reply =
data.reply ||
data.response ||
"Response nahi mila";





setMessages(prev=>[

...prev,

{

role:"assistant",

content:reply

}

]);



}

catch(error){



setMessages(prev=>[

...prev,

{

role:"assistant",

content:
"Backend connect nahi ho pa raha hai."

}

]);

}



};







return (


<div className="
min-h-screen
bg-black
text-white
flex
flex-col
">


{/* HEADER */}


<div className="
p-5
border-b
border-slate-800
flex
items-center
gap-3
">


<Leaf
className="text-green-400"
/>


<h1 className="
text-xl
font-bold
">

AgriAssist AI

</h1>


</div>





{/* CHAT AREA */}


<div className="
flex-1
p-5
space-y-4
overflow-y-auto
">


{

messages.map((msg,index)=>(


<div

key={index}

className={`
flex gap-3

${
msg.role==="user"
?
"justify-end"
:
"justify-start"

}

`}

>




{

msg.role==="assistant"

?

<Bot
className="
text-green-400
"
/>

:

<User/>

}





<div

className={`
max-w-[75%]
px-4
py-3
rounded-2xl
text-sm

${
msg.role==="assistant"

?

"bg-slate-800"

:

"bg-green-500 text-black"

}

`}

>


{msg.content}



{

msg.role==="assistant"

&&


<button

onClick={()=>speakText(msg.content)}

className="
block
mt-3
text-green-400
"

>


<Volume2 size={20}/>


</button>


}


</div>




</div>



))


}



</div>









{/* INPUT */}


<div className="
p-4
border-t
border-slate-800
flex
gap-3
">


<button

onClick={startMic}

className={`
w-14
rounded-xl
flex
items-center
justify-center


${
listening

?

"bg-red-500"

:

"bg-green-500 text-black"

}

`}

>


<Mic/>


</button>







<input


value={message}


onChange={(e)=>
setMessage(e.target.value)
}



onKeyDown={(e)=>{


if(e.key==="Enter")
sendMessage();


}}



placeholder="Bolo ya type karo..."



className="
flex-1
bg-slate-900
border
border-slate-700
rounded-xl
px-4
outline-none
"

/>








<button

onClick={sendMessage}

className="
w-14
rounded-xl
bg-green-500
text-black
flex
items-center
justify-center
"


>


<Send/>


</button>




</div>



</div>


);



}


export default Chat;