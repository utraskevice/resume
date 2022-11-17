import './index.css';

function Badge({ children, collor }) {
  let className = 'badge';

  if (collor) {
    className = [className, ` badge--${collor}`].join('');
  }

  return (
    <p className={className} collor={collor}>
      {children}
    </p>
  );
}

export default Badge;
