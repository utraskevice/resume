import './App.css';
import linkedinLogo from './images/linkedin.svg';
import twitterLogo from './images/twitter.svg';
import gitHubLogo from './images/gitHub.svg';
import devLogo from './images/dev.svg';

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <div className='header-line'></div>
        <div className='header-info'>
          <h1>Urtė Traškevičė</h1>
          <h2>Programmer</h2>
        </div>
      </header>
      <main className='main-container'>
        <section className='main-section col-2'>
          <div className='title'>
            <h3>About me</h3>
            <div className='underline'>
              <div className='green-line'></div>
              <hr />
            </div>
          </div>
          <article className='section-article'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              quas facilis pariatur alias temporibus consectetur omnis
              repellendus voluptate incidunt laboriosam quo veritatis tempora,
              excepturi voluptatum reiciendis similique animi aperiam hic quod
              necessitatibus corrupti ipsum perspiciatis cum dicta. Obcaecati
              eaque, nisi vel minus modi officiis suscipit adipisci quibusdam
              ipsa eum deleniti.
            </p>
          </article>
        </section>
        <section className='main-section col-1'>
          <div className='title'>
            <h3>Links</h3>
            <div className='underline'>
              <div className='green-line'></div>
              <hr />
            </div>
          </div>
          <article className='section-article'>
            <div className='links'>
              <a href='https://www.linkedin.com'>
                <img
                  className='links-icons'
                  src={linkedinLogo}
                  alt='linkedIn'
                />
                LINKEDIN/username
              </a>
            </div>
            <div className='links'>
              <a href='https://www.twitter.com'>
                <img className='links-icons' src={twitterLogo} alt='twitter' />
                TWITTER/user-handle
              </a>
            </div>
            <div className='links'>
              <a href='https://www.github.com'>
                <img className='links-icons' src={gitHubLogo} alt='gitHub' />
                GITHUB/username
              </a>
            </div>
            <div className='links'>
              <a href='https://www.youtube.com'>
                <img className='links-icons' src={devLogo} alt='dev' />
                BLOG/blog-name
              </a>
            </div>
          </article>
        </section>
        <section className='main-section col-1'>
          <div className='title'>
            <h3>Education</h3>
            <div className='underline'>
              <div className='green-line'></div>
              <hr />
            </div>
          </div>
          <article className='section-article'>
            <div>
              <p>
                <span>School name</span> <br />
                2009-2013 <br />
                Degree
              </p>
            </div>
            <div className='underline underline-short'>
              <hr />
            </div>
            <div>
              <p>
                <span>School name</span> <br />
                2009-2013 <br />
                Degree
              </p>
            </div>
          </article>
        </section>
        <section className='main-section col-1'>
          <div className='title'>
            <h3>Personal skills</h3>
            <div className='underline'>
              <div className='green-line'></div>
              <hr />
            </div>
          </div>
          <article className='section-article'>
            <div className='skills-box'>
              <p className='badge badge-green'> Teamwork</p>
              <p className='badge badge-yellow'>Communication</p>
              <p className='badge badge-red'>Organization</p>
            </div>
          </article>
        </section>
        <section className='main-section col-1'>
          <div className='title'>
            <h3>Technical skills</h3>
            <div className='underline'>
              <div className='green-line'></div>
              <hr />
            </div>
          </div>
          <article className='section-article'>
            <div className='skills-box'>
              <p className='badge badge-green'>HTML</p>
              <p className='badge badge-green'>CSS/SCSS</p>
              <p className='badge badge-yellow'>Javascript</p>
              <p className='badge badge-yellow'>React.JS</p>
            </div>
          </article>
        </section>
        <section className='main-section col-3'>
          <div className='title'>
            <h3>Work experience</h3>
            <div className='underline'>
              <div className='green-line'></div>
              <hr />
            </div>
          </div>
          <article className='section-article'>
            <div className='experience-box'>
              <div className='right_border'>
                <p className='title-experience'>
                  JOB POSITION <br />
                  Company <br />
                  2018 - present
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum voluptatum similique voluptas ex veniam, architecto
                  consectetur alias adipisci eos, nulla repellendus? Dolorum
                  reprehenderit fugiat sint alias amet consectetur sed. Rem?
                </p>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
              <div className='right_border'>
                <p className='title-experience'>
                  JOB POSITION <br />
                  Company <br />
                  2018 - present
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum voluptatum similique voluptas ex veniam, architecto
                  consectetur alias adipisci eos, nulla repellendus? Dolorum
                  reprehenderit fugiat sint alias amet consectetur sed. Rem?
                </p>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
              <div>
                <p className='title-experience'>
                  JOB POSITION <br />
                  Company <br />
                  2018 - present
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum voluptatum similique voluptas ex veniam, architecto
                  consectetur alias adipisci eos, nulla repellendus? Dolorum
                  reprehenderit fugiat sint alias amet consectetur sed. Rem?
                </p>
                <ul>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer className='footer'>
        <div className='underline'>
          <hr />
        </div>
        <div className='footer-info'>
          <div className='footer-info--box'>
            <h2>Location</h2>
            <a href='https://www.google.com/maps/place/Vilnius/@54.7007598,24.9735438,10z/data=!3m1!4b1!4m5!3m4!1s0x46dd93fb5c6408f5:0x400d18c70e9dc40!8m2!3d54.6871555!4d25.2796514'>
              Imaginary `st. 52, <br />
              Vilnius, Narnia
            </a>
          </div>
          <div className='footer-info--box'>
            <h2>Contact</h2>
            <a href='tel:+370678903245'>+370678903245</a>
            <a href='mailto: email@test.dev'>email@test.dev</a>
          </div>
          <div className='footer-info--box'>
            <h2>Social</h2>
            <a href='https://www.linkedin.com'> LINKEDIN/username </a>
            <a href='https://www.twitter.com'>TWITTER/@user-handle</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
