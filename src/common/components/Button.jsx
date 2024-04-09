import React from 'react';

const Button = (props) => {
  const { buttonTitle, buttonIcon, color, textColor, fontSize, fontWeight, buttonFunk, type } = props;

  return (
    <div className=''>
      <button
      type={type}
       className='w-full rounded-sm px-12 py-4 text-base text-white font-medium flex items-center' style={{ backgroundColor: color, color: textColor, fontSize: fontSize, fontWeight: fontWeight, transition: "opacity 0.35s" }}
        onClick={(e) => buttonFunk(e)} onMouseEnter={(e) => { e.target.style.opacity = 0.9; }} onMouseLeave={(e) => { e.target.style.opacity = 0.9; }}>
        <div className='text-xl'>
          {buttonIcon}
        </div>
        <p className='text-center w-full'>{buttonTitle}</p>
      </button>

    </div>
  );
};

export default Button;
