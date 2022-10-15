import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-white mt-[80px] mb-10">
        <main>
          <div>
            <div className="absolute w-full">
              <div className="absolute w-full shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-[800px] w-full object-cover"
                    src="https://images.unsplash.com/photo-1627570120184-7aec90f5613a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Donation Options</span>
                  </h1>
                  <p className="mt-6 space-x-10 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl flex flex-row">
                    <Dropdown title="Hello" />
                    <Dropdown title="Select up to three categories" />
                    <button className="w-[200px] bg-green-500 rounded">Search</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
