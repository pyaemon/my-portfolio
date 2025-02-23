import { Button } from '@/components/ui/button';
import CenteredLayout from '../components/CenterLayout';
import reactImg from '../../public/projectImg/react-bg.png';
import nestImg from '../../public/projectImg/nest-bg.png';
import dockerImg from '../../public/projectImg/docker-bg.png';
import nodeImg from '../../public/projectImg/node-bg.png';
import awsImg from '../../public/projectImg/aws-bg.png';
import ubuntuImg from '../../public/projectImg/ubuntu_bg-.png';
import mysqlImg from '../../public/projectImg/mysql-bg.png';
import htmlImg from '../../public/projectImg/html-bg.png';
import figmaImg from '../../public/projectImg/figma-bg.png';
import tsImg from '../../public/projectImg/ts-bg.png';
import degree from '../../public/projectImg/degree-bg.png';
import Image from 'next/image';
import imageData from '../skill/skill.json';

const imgMap = {
  reactImg,
  nestImg,
  dockerImg,
  nodeImg,
  awsImg,
  ubuntuImg,
  mysqlImg,
  htmlImg,
  figmaImg,
  tsImg,
};
export default function Skill() {
  return (
    <>
      <div>
        <h1 className="text-center text-2xl">Education</h1>
        <div className="flex flex-wrap items-center justify-center shadow-lg rounded px-4 py-2 my-4">
          <div className="flex flex-row justify-between items-center border p-10 rounded-xl  h-auto mx-3 my-3">
            <Image src={degree} alt="degree" width={100} />
            <p>Bachelor of Engineering (IT) </p> <br />
            {/* <p> 2013 ~ 2018 </p> */}
          </div>
          <div className="flex flex-row justify-between items-center border p-10 rounded-xl  h-auto mx-3 my-3">
            <Image src={degree} alt="degree" width={100} />
            <p> Diploma in English </p> <br />
            {/* <p> 2013 ~ 2018 </p> */}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl">Skills</h1>
        <div className="flex flex-row flex-wrap items-center justify-center shadow-lg rounded px-4 py-2 my-4">
          {imageData?.map((v, k) => (
            <Button className="w-[150px] h-[150px] mx-10 my-5" variant="outline" key={k}>
              <Image src={imgMap[v.image]} alt="react" width={150} className="w-full" />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
