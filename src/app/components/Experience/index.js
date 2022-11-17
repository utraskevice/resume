import './index.css';

function ExperienceBlock({
  jobPosition,
  company,
  year,
  description,
  border,
  li1,
  li2,
}) {
  let className = 'experience-box';

  if (border) {
    className = [className, ` experience-box--${border}`].join('');
  }
  return (
    <div className={className}>
      <p className='experience-box--title'>
        {jobPosition} <br />
        {company} <br />
        {year}
      </p>
      <p>{description}</p>
      <ul>
        <li>{li1}</li>
        <li>{li2}</li>
      </ul>
    </div>
  );
}

export default ExperienceBlock;
