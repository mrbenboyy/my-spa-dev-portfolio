import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import mapImage from "@/assets/images/map.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon
  },
  {
    title: "HTML5",
    iconType: HTMLIcon
  },
  {
    title: "CSS3",
    iconType: CssIcon
  },
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "Chrome",
    iconType: ChromeIcon
  },
  {
    title: "Github",
    iconType: GithubIcon
  },
]

const hobbies = [
  {
    title: 'Football',
    emoji: '⚽️',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '35%',
    top: '40%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '70%',
    top: '45%'
  },
  {
    title: 'Tennis',
    emoji: '🎾',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%'
  },
]

export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />

      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px]">
          <CardHeader
            title="My Reads"
            description="Explore the books shaping my perspectives."
          />
          <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>

        <Card className="h-[320px] p-0">
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies and tools I use to craft exceptional digital experiences."
            className="px-6 pt-6"
          />
          <ToolboxItems items={toolboxItems} className="mt-6" />
          <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
        </Card>

        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital realm."
            className="px-6 py-6"
          />
          <div className="relative flex-1">
            {hobbies.map((hobby, index) => (
              <div key={index} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                left: hobby.left,
                top: hobby.top
              }}>
                <span className="font-medium text-gray-950"> {hobby.title} </span>
                <span> {hobby.emoji} </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={memojiSmile} alt="smiling memoji" />
        </Card>
      </div>
    </div>
  </div>
};
