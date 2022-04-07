function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
          SONNYTECH ACADEMY
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          23,386 subscribers
        </div>

        {/* FORM SECTION */}

        <form
          action="https://www.getrevue.co/profile/samuelagbenyo067/add_subscriber"
          method="post"
          target="_blank"
        >
          <div class="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder="Enter your email address"
              type="email"
              name="member[email]"
              className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
            />
            <input
              type="submit"
              value="Subscribe Now"
              name="member[subscribe]"
              className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl text-white py-4 px-6 md:px-10 lg:py-6 cursor-pointer hover:opacity-75 duration-150"
            />
          </div>

          <div className="opacity-75 italic">
            By subscribing, you agree with Revue’s{" "}
            <a target="_blank" href="https://www.getrevue.co/terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://www.getrevue.co/privacy">
              Privacy Policy
            </a>
            .
          </div>
        </form>

        {/* FORM SECTION END */}
      </main>

      <footer className="container mx-auto p-5 text-center">
        <p>Built with 💖 by Samuel Agbenyo</p>
      </footer>
    </div>
  );
}

export default App;
