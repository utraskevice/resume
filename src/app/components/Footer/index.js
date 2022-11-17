import './index.css';
import Underline from '../Underlines';
import FlexBox from '../flexBox';

function Footer({ children }) {
  return (
    <footer className='footer'>
      <Underline></Underline>
      <FlexBox className='main-section--flex, space-around'>{children}</FlexBox>
    </footer>
  );
}

export default Footer;
