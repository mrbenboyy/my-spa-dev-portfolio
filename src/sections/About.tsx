'use client'

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import laravelIcon from '@/assets/icons/laravel.svg';
import GithubIcon from '@/assets/icons/github.svg';
import SpringBootIcon from '@/assets/icons/spring-boot.svg';
import AngularIcon from '@/assets/icons/angular.svg';
import DjangoIcon from '@/assets/icons/django.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import NodeJsIcon from '@/assets/icons/nodejs.svg';
import NextJsIcon from '@/assets/icons/nextjs.svg';
import mapImage from "@/assets/images/map.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";
import Me from "@/components/Me";

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
    title: "Laravel",
    iconType: laravelIcon
  },
  {
    title: "Github",
    iconType: GithubIcon
  },
  {
    title: "SpringBoot",
    iconType: SpringBootIcon
  },
  {
    title: "Angular",
    iconType: AngularIcon
  },
  {
    title: "Django",
    iconType: DjangoIcon
  },
  {
    title: "Docker",
    iconType: DockerIcon
  },
  {
    title: "NodeJS",
    iconType: NodeJsIcon
  },
  {
    title: "NextJS",
    iconType: NextJsIcon
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
  const constraintRef = useRef(null);

  return <div id="about" className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />

      <div className="mt-20 flex flex-col gap-8">
        <Me />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className=""
            />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby, index) => (
                <motion.div key={index} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                  left: hobby.left,
                  top: hobby.top
                }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950"> {hobby.title} </span>
                  <span> {hobby.emoji} </span>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={memojiSmile} alt="smiling memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
};
