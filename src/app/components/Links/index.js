import './index.css';

function Links({ children, iconSrc, iconAlt, url }) {
  return (
    <div className='links'>
      <a target='_blank' rel='noreferrer' href={url}>
        {iconSrc && (
          <img className='links--icons' src={iconSrc} alt={iconAlt} />
        )}
        {children}
      </a>
    </div>
  );
}

export default Links;
