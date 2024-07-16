const Contact = () => {
    return (
        <div className="h-auto pb-6 mb-0">
            <h1 className="px-auto text-center pt-10 text-2xl sm:text-4xl lg:text-6xl font-bold pb-12">Contact</h1>
            <div className="flex flex-col justify-center items-center gap-8">
                <input type="text" placeholder="Name" className="w-[36rem] px-2 py-3 border-2 border-black border-solid outline-none rounded-lg" />
                <input type="text" placeholder="Email" className="w-[36rem] px-2 py-3 border-2 border-black border-solid outline-none rounded-lg" />
                <textarea placeholder="Message" className="w-[36rem] h-[16rem] resize-none px-2 py-3 border-2 border-black border-solid outline-none rounded-lg" />
                <button className="px-6 py-3 bg-slate-400 text-white font-md text-lg rounded-2xl hover:-translate-y-2 active:translate-y-0 transition-all duration-300">Connect</button>
            </div>
        </div>

    )
}

export default Contact;