import { useEffect, useState } from 'react';
import turkey from "../images/turkey.png";
import feather1 from "../images/feather1.svg";
import feather2 from "../images/feather2.svg";
import feather3 from "../images/feather3.svg";
import feather4 from "../images/feather4.svg";
import feather5 from "../images/feather5.svg";
import feather6 from "../images/feather6.svg";
import feather7 from "../images/feather7.svg";
import feather8 from "../images/feather8.svg";
import feather9 from "../images/feather9.svg";
import featherA from "../images/featherA.svg";

const feathers = [
  feather1,
  feather2,
  feather3,
  feather4,
  feather5,
  feather6,
  feather7,
  feather8,
  feather9,
  featherA,
];

function PictureDisplay({ size, featherCount, featherColors }) {
  const [ sizeClass, setSizeClass ] = useState("");
  // // useEffect(() => {
  //   console.log('PictureDisplay', size, featherCount, featherColors);
  // }, [size, featherCount, featherColors]);

  useEffect(() => {
    console.log(size);
    let cName = '';
    switch (size) {
      case 'm':
        cName = 'medium'
        break;
      case 'l':
        cName = 'large'
        break;
      case 'xl':
        cName = 'xlarge'
        break;
      default:
        cName = 'small'
        break;
    }
    // console.log(cName)
    setSizeClass(cName)
  }, [size])

  useEffect(() => {
    console.log(featherCount);
  }, [featherCount])

  useEffect(() => {
    console.log(featherColors);
  }, [featherColors])

  const colors = [];
  if (!featherColors || featherColors.length === 0) featherColors = [''];
  for (let i = 0; i < featherCount; i++) {
    colors.push(featherColors[i % featherColors.length]);
  }

  return (
    <div className={`image-area ${sizeClass}`}>
      {colors.map((c, i) =>
        <img src={feathers[i]} className={`image-feather ${c}`} alt="" />
      )}

      <img src={turkey} className="image-turkey" alt="turkey" />
    </div>
  );
}

export default PictureDisplay;
