import React from "react";

export default function Chatbot() {
  return (
    <div className="chatbot-container flex flex-col h-[80vh] max-h-[600px] w-full max-w-md bg-white rounded-2xl shadow-lg fixed bottom-20 right-4">
      <header className="flex items-center px-4 py-3 bg-card rounded-t-2xl">
        <div className="flex items-center gap-2">
          <img
            src="http://placehold.it/345x230"
            width="32"
            height="32"
            alt="Company Logo"
            style={{ aspectRatio: 32 / 32, objectFit: "cover" }}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-purple-600 font-manrope">
            Raven Support
          </span>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-manrope">
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-200">
          <p>Hello! How can I assist you today?</p>
        </div>
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-purple-400 text-white">
          <p>I'm having trouble with my account. Can you help me?</p>
        </div>
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-200">
          <p>
            Of course, I'd be happy to help. What seems to be the issue with
            your account?
          </p>
        </div>
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-purple-400 text-white">
          <p>
            I can't seem to log in. It keeps saying my password is incorrect.
          </p>
        </div>
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-gray-200">
          <p>
            Okay, let's troubleshoot that. First, can you confirm the email
            address associated with your account?
          </p>
        </div>
      </div>
      <footer className="bg-card rounded-b-2xl p-4 flex items-center gap-2">
        <form className="flex-1">
          <input
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full font-manrope"
            id="message"
            placeholder="Type your message..."
            autoComplete="off"
          />
        </form>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-700 hover:bg-purple-500 text-white hover:bg-primary/90 h-10 w-10"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
          <span className="sr-only">Send</span>
        </button>
      </footer>
    </div>
  );
}
