import './footer.css';
import Underline from '../MainSection/Title/underlines/underline.js';
import FlexBox from '../MainSection/flexBox.js';

function Footer({ children }) {
  return (
    <footer className='footer'>
      <Underline></Underline>
      <FlexBox className='main-section--flex, space-around'>{children}</FlexBox>
    </footer>
  );
}

export default Footer;
