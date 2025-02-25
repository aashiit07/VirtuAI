let btn=document.querySelector('#btn')
let content=document.querySelector('#content')
let voice=document.querySelector('#voice')
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
   if(hours>=0&&hours<12)
   {
    speak("Good Morning Sir")
   }
   else if(hours>=12&&hours<16)
   {
    speak("Good afternoon sir")
   }
   else if(hours>=16&&hours<=19)
   {
    speak("Good evening Sir")
   }
   else
   {
    speak("GoodNight sir")
   }  
}
 window.addEventListener('load',()=>{
     wishMe()
 });
//this wishMe() would work on Microsoft IE and not on the latest versions of google etc because modern browsers (like Chrome, Firefox, and Edge) restrict speechSynthesis.speak() from running automatically on page load.
// What’s the Issue?
//Browsers block autoplaying speech to prevent websites from annoying users with unwanted speech as soon as the page loads.
//speechRecognition is not compatible with Firefox and safari
let speechRecognition=window.speechRecognition||window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
 let transcript=  event.results[currentIndex][0].transcript
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message)
{
     btn.style.display="flex"
      voice.style.display="none"
    if(message.includes("hello")||message.includes("hi"))
    {
        speak("hello sir , how can i help you?")
    }
    else if(message.includes("who are you"))
    {
        speak("I'm a virtual assistant , created by Aashi Ma'am")
    }
    else if(message.includes('open youtube'))
    {
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes('open instagram'))
        {
            speak("opening instagram...")
            window.open("https://www.instagram.com/","_blank")
        }
    else if(message.includes('open google'))
            {
                speak("opening google...")
                window.open("https://www.google.com/","_blank")
            }
    
    else if(message.includes('open calculator'))
            {
                    speak("opening calculator...")
                    window.open("calculator://")
            }   
    else if(message.includes('open whatsapp'))
                {
                        speak("opening whatsapp...")
                        window.open("whatsapp://")
                }
    else if(message.includes('time'))
                {
                  let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
                 speak(time)
                } 
    else if(message.includes('date'))
                    {
                      let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
                     speak(date)
                    }         
    else
    {
       let finalText= "This is what i found on internet regarding" +message.replace("shifra","")||message.replace("shipra","")
        speak(finalText )
        window.open(`https://www.google.com/search?q=${message.replace("Shifra","")}`,"_blank")
    }        

}