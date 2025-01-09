import { relative } from "path";

function App() {
    return (
      <>
        <div>
            <main className="p-8 flex justify-between items-center">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-gray-900">Welcome to My Blog</h1>
                    <p className="text-lg mt-4 text-gray-700">
                        Explore stories, technology updates, and personal insights!
                    </p>
                </div>

                <div className="relative">
                <img src="/finna.jpg" alt="Main Content" style={{ width: '300px', height: '300px', position: 'relative', top: '50px', right: '120px'}} className="rounded-full " />
              </div>
            </main>
        </div>
    </>
    );
}

export default App;
