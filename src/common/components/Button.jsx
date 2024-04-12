import React from 'react';

const Button = (props) => {
  const { btnTitle, buttonIcon, color, textColor, btnSize, btnWeight, btnFunk, btntype } = props;

  return (
    <div className=''>
      <button
      type={btntype}
       className='w-full rounded-sm px-12 py-4 text-base text-white font-medium flex items-center' style={{ backgroundColor: color, color: textColor, fontSize: btnSize, fontWeight: btnWeight, transition: "opacity 0.35s" }}
        onClick={(e) => btnFunk(e)} onMouseEnter={(e) => { e.target.style.opacity = 0.9; }} onMouseLeave={(e) => { e.target.style.opacity = 1; }}>
        <div className='text-xl'>
          {buttonIcon}
        </div>
        <p className='text-center w-full'>{btnTitle}</p>
      </button>

    </div>
  );
};

export default Button;
