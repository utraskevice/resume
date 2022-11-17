import './header.css';
import LanguageBtn from './languageBtn';

function Header({ children }) {
  return (
    <header>
      <div className='header--line'>
        <LanguageBtn />
      </div>
      <div className='header--info'>{children}</div>
    </header>
  );
}

export default Header;
