import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Othmane CHLIGUI",
    text: "Hakim is a coding wizard in the making! I remember when we were stuck on a group project, and he stayed up all night debugging our API issues like it was nothing. His knack for breaking down complex concepts into simple steps is unreal. If anyone’s going to thrive as a fullstack dev, it’s him.",
    avatar: memojiAvatar1,
  },
  {
    name: "Ihssane HAQOUCH",
    text: "I’ve never seen someone hustle like Hakim. From JavaScript frameworks to server-side scripting, he’s constantly leveling up. When I asked him why he’s obsessed with fullstack, he said, ‘I want to build everything myself—no limits.’ That’s Hakim for you—always aiming higher",
    avatar: memojiAvatar2,
  },
  {
    name: "Yassine ZAYDI",
    text: "I once asked Hakim to explain APIs, and he drew a pizza delivery analogy on a napkin. Suddenly, everything made sense. He’s not just coding—he’s teaching while he learns. Also, his GitHub is greener than my envy. 🟩",
    avatar: memojiAvatar3,
  },
  {
    name: "Mouad CHABAB",
    text: "We called him ‘The Server Whisperer’ after he resurrected our crashed project 10 minutes before the demo. How? No idea. But Hakim’s got that rare mix of patience and genius. Hire him now or regret it later.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader
        eyebrow="Happy Friends"
        title="What My Friends Say About Me"
        description="Don&apos;t just take my word for it. See what my friends have to say about my Work."
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                      <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                    </div>
                    <div>
                      <div className="font-semibold"> {testimonial.name} </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              ))}
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  </div>;
};
