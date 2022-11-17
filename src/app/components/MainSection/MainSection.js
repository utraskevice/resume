import './MainSection.css';
import Title from './Title/title';
import Underline from './Title/underlines/underline.js';

function MainSection({ children, column, title, underlineForm, flex }) {
  let className = 'main-section';

  if (column) {
    className = [className, ` main-section--${column}`].join('');
  }

  if (flex) {
    className = [className, ` main-section--${flex}`].join('');
  }

  return (
    <section className={className} underlineForm={underlineForm}>
      <Title title={title}></Title>
      <Underline underlineForm={underlineForm}></Underline>
      <article className='main-section--article'>{children}</article>
    </section>
  );
}

export default MainSection;
