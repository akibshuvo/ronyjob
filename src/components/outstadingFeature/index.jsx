import React from 'react';
import Image from '../Image/Image';
import featureOne from '../../assets/featuresPartImg/featuresImage01.jpg';
import featureTwo from '../../assets/featuresPartImg/featuresImage02.jpg';
import featureThree from '../../assets/featuresPartImg/featuresImage03.jpeg';

const Index = () => {
  return (
    <div className="container mx-auto mt-20">
      <h4 className="font-bold text-2xl">Outstanding Features</h4>
      <p className="text-[#1f1f1f] py-6 w-2/3">
        The garments labeled as committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino's goal is to support the implementation of practices more committed to the environment.
      </p>

      <ul className="list-disc ml-5">
        <li>Tonal stitching: 98% cotton, 2% elastane.</li>
        <li>Supple and stretch knit with a rich touch of wool.</li>
        <li>Model: 6'1", wearing a size M.</li>
        <li>Caring for your clothes is caring for the environment.</li>
      </ul>

      <h4 className="font-bold text-2xl py-8">Washing Instructions</h4>
      <ul className="list-disc ml-5">
        <li>Machine wash max. 30°C. Short spin.</li>
        <li>Iron maximum 110°C.</li>
        <li>Do not bleach.</li>
        <li>Do not dry clean.</li>
        <li>Tumble dry, medium heat.</li>
      </ul>

      <div className="flex gap-x-4 w-full mt-5">
        <Image src={featureOne} alt="Feature image 1" className="w-1/4" />
        <Image src={featureTwo} alt="Feature image 2" className="w-1/4" />
        <Image src={featureThree} alt="Feature image 3" className="w-1/4" />
      </div>


      <h4 className="font-bold text-2xl py-8">Washing Instructions</h4>
      <ul className="list-disc ml-5">
        <li>Machine wash max. 30°C. Short spin.</li>
        <li>Iron maximum 110°C.</li>
        <li>Do not bleach.</li>
        <li>Do not dry clean.</li>
        <li>Tumble dry, medium heat.</li>
      </ul>
    </div>
  );
}

export default Index;