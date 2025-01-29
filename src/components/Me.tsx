import Image from "next/image";
import Card from "./Card"
import { CardHeader } from "./CardHeader"
import MyPic from '@/assets/images/me.jpg';

const Me = () => {
    return (
        <Card className="flex flex-col-reverse md:flex-row md:gap-[98px] h-[520px] md:h-[320px]">
            <CardHeader
                title="Know who am I"
                description="I am a future computer engineer based in Morocco. Passionate about technology and innovation, I love turning ideas into reality through code. My focus is on full-stack web development, where I build seamless, user-friendly, and dynamic applications."
                descClassName="lg:max-w-lg"
                className="md:justify-center"
            />
            <div className="flex items-center justify-center md:outline md:outline-2 md:outline-white/50 md:rotate-12 rounded-3xl flex-shrink-0">
                <Image src={MyPic} alt="my picture" className="w-56 md:h-full md:w-full rounded-3xl outline outline-2 outline-white/50 shadow-xl shadow-gray-950"/>
            </div>
        </Card>
    )
}

export default Me