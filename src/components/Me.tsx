import Image from "next/image";
import Card from "./Card"
import { CardHeader } from "./CardHeader"
import MyPic from '@/assets/images/me.png';

const Me = () => {
    return (
        <Card className="flex flex-col-reverse md:flex-row md:gap-[98px] h-[400px] md:h-[250px]">
            <CardHeader
                title="Know who am I"
                description="Hi, My name is Abdelhakim Benbouanane a future computer engineer based in Morocco. Passionate about technology and innovation and I love turning ideas into reality through code."
                descClassName="md:max-w-lg"
                className="md:justify-center md:pr-5"
            />
            <div className="flex items-center justify-center rounded-3xl flex-shrink-0 -mb-11">
                <Image src={MyPic} alt="my picture" className="w-56 pl-2 md:pl-0 md:w-72 rounded-3xl shadow-gray-950"/>
            </div>
        </Card>
    )
}

export default Me