import Image from 'next/image';
import POS from '../../public/projectImg/pos1.png';
import Brand from '../../public/projectImg/brand.png';
import Centralize from '../../public/projectImg/tailwan_centralize.png';
import FW from '../../public/projectImg/food_waste.png';
import Farm from '../../public/projectImg/farm.png';
import Carbon from '../../public/projectImg/carbon.png';
import GS from '../../public/projectImg/gs.png';
import Stamp from '../../public/projectImg/stmp.png';
import UNDP from '../../public/projectImg/undp.png';
import Evercomm from '../../public/projectImg/evercomm.png';
import { Button } from '@/components/ui/button';
import experienceData from '../experience/experience.json';

const imageMap = {
  POS,
  Brand,
  Centralize,
  FW,
  Farm,
  Carbon,
  GS,
  Stamp,
  UNDP,
  Evercomm,
};

export default function Experience() {
  return (
    <>
      <h1 className="text-center text-2xl">Experiences</h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center shadow-lg rounded px-4 py-2 my-4">
        {experienceData?.map((v, k) => (
          <div
            className="flex flex-col items-center border p-4 md:p-6 rounded-xl w-full md:w-[500px] mx-3 my-3"
            key={k}
          >
            <div className="w-full md:w-auto">
              <Image
                src={imageMap[v.image]}
                alt="projectImg"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="px-5 py-5 max-w-full">
              <p className="text-left mb-6 animate-fadeIn">{v.description}</p>
            </div>
            <div className="flex flex-wrap justify-end space-x-0 space-y-2 md:space-y-0 md:space-x-5">
              <Button className="shadow-custom border-custom animate-lighting" variant="outline">
                {v.technical.frontend}
              </Button>
              <Button className="shadow-custom border-custom animate-lighting" variant="outline">
                {v.technical.framework}
              </Button>
              <Button className="shadow-custom border-custom animate-lighting" variant="outline">
                {v.technical.backend}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
