import { useRef } from 'react';
import './Join.scss';
import emailjs from '@emailjs/browser';

const Join = () => {
  const formRef = useRef();
  const formSubmitHandler = async e => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_5tzvw44',
        'template_v1mz659',
        formRef.current,
        'R7nxVhFw4TpPkDyuo'
      );
      if (result) {
        alert(' join successful');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={formRef}
          className="email-container"
          onSubmit={formSubmitHandler}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
