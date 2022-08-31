import './Plans.scss';

import { plansData } from '../../data/plansData';

import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="program-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div key={i} className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div key={i} className="feature">
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits &rarr;</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans;
