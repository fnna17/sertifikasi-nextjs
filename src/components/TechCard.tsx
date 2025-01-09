import Image from 'next/image';

type TechCardProps = {
    imageURL: string;
    techStack: string;
};

export default function TechCard({ imageURL, techStack }: TechCardProps) {
    return (
        <div className="w-48 h-48 flex flex-col justify-center items-center shadow-lg 
            overflow-hidden rounded-3xl bg-white bg-opacity-30 
            backdrop-filter backdrop-blur-md border border-white border-opacity-20 
            transition-transform duration-300 hover:scale-105">
            <div className="relative w-20 h-20">
                <Image src={imageURL} alt={techStack} fill className="object-contain" />
            </div>
            <p className="text-white text-center text-base leading-4 mt-4">
                {techStack}
            </p>
        </div>
    );
}
