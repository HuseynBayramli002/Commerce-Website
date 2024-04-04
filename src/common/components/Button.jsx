import React from 'react';

const Button = (props) => {
  const { buttonTitle, color, increaseData } = props;

  return (
    <div className=''>
      <button className='rounded-sm px-12 py-4 text-base text-white font-medium' style={{ backgroundColor: color, transition: "opacity 0.35s" }}
        onClick={() => increaseData()} onMouseEnter={(e) => { e.target.style.opacity = 0.9; }} onMouseLeave={(e) => { e.target.style.opacity = 1; }}>
        {buttonTitle}
      </button>

    </div>
  );
};

export default Button;
