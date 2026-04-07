import React from "react";

function FormContact() {
  return (
    <div className="w-full max-w-[550px] flex flex-col items-center justify-center gap-10">
      <h2 className="h-16 flex items-center text-[56px] font-semibold tracking-[-8%] bg-linear-to-b from-[#1100FF] via-[#897DFF] to-[#F0E8FF] bg-clip-text text-transparent">
        Let’s talk!
      </h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full flex flex-col gap-3.5"
      >
        <input
          type="hidden"
          name="access_key"
          value="cb517c48-6c79-4659-8cb2-3d6be43a5406"
        ></input>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className="w-full py-4 px-[17px] bg-white border border-zinc-400 placeholder:text-zinc-500 rounded-xl"
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className="w-full py-4 px-[17px] bg-white border border-zinc-400 placeholder:text-zinc-500 rounded-xl"
        ></input>
        <textarea
          name="message"
          placeholder="How can I help you?*"
          className="h-28 w-full py-4 px-[17px] bg-white border border-zinc-400 placeholder:text-zinc-500 rounded-xl resize-none"
        ></textarea>
        <button type="submit" className="w-full py-4 px-[17px] text-white bg-zinc-900 rounded-xl cursor-pointer">Send</button>
      </form>
    </div>
  );
}

export default FormContact;
