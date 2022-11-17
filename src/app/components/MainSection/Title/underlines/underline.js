import './underline.css';

function Underline({ underlineForm }) {
  let className = 'underline';

  if (underlineForm) {
    className = [className, ` underline--${underlineForm}`].join('');
  }

  return (
    <div className='underline'>
      <div className={className} underlineForm={underlineForm}></div>
      <hr />
    </div>
  );
}

export default Underline;
