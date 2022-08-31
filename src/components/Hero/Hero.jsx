import Header from '../Header/Header';
import './Hero.scss';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

import { motion } from 'framer-motion';

import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '180px' : '267px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your index live up
              your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter start={500} end={978} delay="4" preFix="+" />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              <NumberCounter start={30} end={50} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>

        <motion.div
          initial={{ right: '-1.6rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero img */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: '24rem' }}
          whileInView={{ right: '40rem' }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* calories */}
        <motion.div
          initial={{ right: '76rem' }}
          whileInView={{ right: '52rem' }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
