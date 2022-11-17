import '../Footer/index.css';

function FooterBox({ contact, contactLi1, contactLi2, url1, url2 }) {
  return (
    <div className='footer-box'>
      <h2>{contact}</h2>
      <a target='_blank' rel='noreferrer' href={url1}>
        {contactLi1}
      </a>
      <a target='_blank' rel='noreferrer' href={url2}>
        {contactLi2}
      </a>
    </div>
  );
}

export default FooterBox;
