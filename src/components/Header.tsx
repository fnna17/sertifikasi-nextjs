export default function Header() {
    return (
        <>
            <div className="w-screen p-8 bg-[#070725] flex justify-between items-center">
                <div>
                    <p className="font-bold text-white text-xl">Portofolio Finna</p>
                </div>
                <div>
                    <ul className="flex space-x-16">
                        <li className="text-amber-300 text-lg cursor-pointer hover:text-gray-300">Home</li>
                        <li className="text-amber-300 text-lg cursor-pointer hover:text-gray-400">Tech</li>
                        <li className="text-amber-300 text-lg cursor-pointer hover:text-gray-300">Biography</li>
                        <li className="text-amber-300 text-lg cursor-pointer hover:text-gray-300">Contacts</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
