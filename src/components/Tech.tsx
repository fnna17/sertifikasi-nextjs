import TechCard from './TechCard'; 
export default function Tech() {
    return (
        <>
            <div className="bg-[#070725] w-screen min-h-[300px] p-8">
                <h1 className="text-4xl text-white font-bold mb-4">Tech</h1>
                <div className="w-32 border-2 mb-8" />
                <div className="flex justify-center items-center w-full flex-wrap gap-4">
                    <TechCard imageURL="/img/js.png" techStack="JavaScript" />
                    <TechCard imageURL="/img/java.png" techStack="Java" />
                    <TechCard imageURL="/img/next.png" techStack="Next Js" />
                </div>
            </div>
        </>
    );
}
