import './Testimonials.scss';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';

import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;

  const transition = { type: 'spring', duration: 3 };
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span>{testimonialsData[selected].name}</span>
          <span> - {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() =>
              selected === 0
                ? setSelected(length - 1)
                : setSelected(prev => prev - 1)
            }
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() =>
              selected === length - 1
                ? setSelected(0)
                : setSelected(prev => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
