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
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

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
    emoji: '⚽️'
  },
  {
    title: 'Photography',
    emoji: '📷'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Music',
    emoji: '🎵'
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️'
  },
  {
    title: 'Reading',
    emoji: '📚'
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

      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader
            title="My Reads"
            description="Explore the books shaping my perspectives."
          />
          <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>

        <Card>
          <CardHeader
            title="My Toolbox"
            description="Explore the technologies and tools I use to craft exceptional digital experiences."
          />
          <div>
            {toolboxItems.map((item, index) => (
              <div key={index}>
                <TechIcon component={item.iconType} />
                <span> {item.title} </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital realm."
          />
          <div>
            {hobbies.map((hobby, index) => (
              <div key={index}>
                <span> {hobby.title} </span>
                <span> {hobby.emoji} </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital realm."
          />
        </Card>

        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={memojiSmile} alt="smiling memoji" />
        </Card>
      </div>
    </div>
  </div>
};
