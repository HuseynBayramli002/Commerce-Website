import React from 'react';

const Button = (props) => {
  const { buttonTitle, buttonIcon, color, textColor, fontSize, fontWeight, increaseData } = props;

  return (
    <div className=''>
      <button className='w-full rounded-sm px-12 py-4 text-base text-white font-medium flex gap-3 items-center' style={{ backgroundColor: color, color: textColor, fontSize: fontSize, fontWeight: fontWeight, transition: "opacity 0.35s" }}
        onClick={() => increaseData()} onMouseEnter={(e) => { e.target.style.opacity = 0.9; }} onMouseLeave={(e) => { e.target.style.opacity = 1; }}>
        <div className='text-xl'>
          {buttonIcon}
        </div>
        {buttonTitle}
      </button>

    </div>
  );
};

export default Button;
