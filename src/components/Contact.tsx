"use client"
import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)
    const [error, setError] = useState(false)
    
    const submitHandler = async() => {
        if(!name || !email || !message){
            setError(true)
            return;
        }
        setError(false)
        setLoading(true)
        const response = await fetch("/api/send",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({name,email,message})
        })
        setLoading(false)
        if(response.status === 500 || response.status === 400){
            setFailed(true)

            setTimeout(()=>{
                setFailed(false)
            },2000)
            
        }
        if(response.status === 200){
            setSuccess(true)

            setTimeout(()=>{
                setSuccess(false)
            },2000)
            
        }

    }
    return (
        <div id="contact" className="h-auto w-auto pb-6 mb-0">
            <h1 className="px-auto text-center pt-10 text-2xl sm:text-4xl lg:text-6xl font-bold pb-12">Contact</h1>
            <div className="flex flex-col justify-center items-center gap-8">
                <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} className="w-2/3 sm:w-[36rem] px-2 py-3 border-2 border-black border-solid outline-none rounded-lg" />
                <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-2/3 sm:w-[36rem] px-2 py-3 border-2 border-black border-solid outline-none rounded-lg" />
                <textarea placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)} className="w-2/3 sm:w-[36rem] h-[10rem] sm:h-[16rem] resize-none px-2 py-3 border-2 border-black border-solid outline-none rounded-lg" />
                <button onClick={submitHandler} className={`px-6 py-3 ${failed && "bg-red-400" || success && "bg-green-400" || "bg-slate-400"}  text-white font-md text-lg rounded-2xl hover:-translate-y-2 active:translate-y-0 transition-all duration-300`}>
                    {loading ? "Please Wait" : "Connect"} 
                    {success && " Success"}
                    {failed && " Failed"}
                </button>
                {error && <div className="text-rose-500 text-xl font-medium">All Fields are required</div>}
            </div>
        </div>

    )
}

export default Contact;