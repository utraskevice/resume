import './index.css';
// Icons
import linkedinLogo from './components/images/linkedin.svg';
import twitterLogo from './components/images/twitter.svg';
import gitHubLogo from './components/images/gitHub.svg';
import devLogo from './components/images/dev.svg';

// imports
import Header from './components/Header';
import Badge from './components/Badge';
import Underline from './components/Underlines';
import Section from './components/Section';
import ExperienceBlock from './components/Experience';
import FlexBox from './components/flexBox';
import Education from './components/Education';
import Footer from './components/Footer';
import FooterBox from './components/FooterBox';
import Links from './components/Links';

function App() {
  return (
    <div className='App'>
      <Header>
        <h1>Urtė Traškevičė</h1>
        <h2>Programmer</h2>
      </Header>

      <main className='main-container'>
        <Section title={'About me'} column='col-2' underlineForm={'green'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>
        <Section title={'Links'} column='col-1' underlineForm={'green'}>
          <Links
            url='https://www.linkedin.com'
            iconSrc={linkedinLogo}
            iconAlt='linkedIn'
          >
            LINKEDIN/username
          </Links>
          <Links
            url='https://www.twitter.com'
            iconSrc={twitterLogo}
            iconAlt='twitter'
          >
            TWITTER/user-handle
          </Links>
          <Links
            url='https://www.github.com'
            iconSrc={gitHubLogo}
            iconAlt='gitHub'
          >
            GITHUB/username
          </Links>
          <Links url='https://www.youtube.com' iconSrc={devLogo} iconAlt='dev'>
            BLOG/blog-name
          </Links>
        </Section>
        <Section title={'Education'} column='col-1' underlineForm={'green'}>
          <Education
            schoolName={'School name'}
            schoolYear={'2009-2013'}
            degree={'Degree'}
          ></Education>
          <Underline underlineForm={'short'}></Underline>
          <Education
            schoolName={'School name'}
            schoolYear={'2009-2013'}
            degree={'Degree'}
          ></Education>
        </Section>
        <Section title='Personal skills' column='col-1' underlineForm={'green'}>
          <div className='skills-box'>
            <Badge collor='green'>Comunication</Badge>
            <Badge collor='green'>Recomendation</Badge>
            <Badge collor='red'>Something</Badge>
          </div>
        </Section>
        <Section title='Tecnical skills' column='col-1' underlineForm={'green'}>
          <div className='skills-box'>
            <Badge collor='green'>Html</Badge>
            <Badge collor='green'>Css/scss</Badge>
            <Badge collor='yellow'>Javascript</Badge>
            <Badge collor='yellow'>React.js</Badge>
          </div>
        </Section>
        <Section
          title={'Work eperience'}
          column='col-3'
          underlineForm={'green'}
        >
          <FlexBox>
            <ExperienceBlock
              border={'right'}
              jobPosition={'JOB POSITION'}
              company={'Company'}
              year={'2018 - present'}
              description={
                'Lorem ipsum dolor sit amet, consecterure apdispecading elit. Lsaldooe vpourlew simloik voluppt ex venima, architecto consecures alias adispcik eos, nulla repllekbus? Dolorum repregerum fugiat sint alias amet consertuno sed.Rem?'
              }
              li1={'Lorem, ipsum dolor.'}
              li2={'Lorem ipsum dolor sit.'}
            ></ExperienceBlock>
            <ExperienceBlock
              border={'right'}
              jobPosition={'JOB POSITION'}
              company={'Company'}
              year={'2018 - present'}
              description={
                'Lorem ipsum dolor sit amet, consecterure apdispecading elit. Lsaldooe vpourlew simloik voluppt ex venima, architecto consecures alias adispcik eos, nulla repllekbus? Dolorum repregerum fugiat sint alias amet consertuno sed.Rem?'
              }
              li1={'Lorem, ipsum dolor.'}
              li2={'Lorem ipsum dolor sit.'}
            ></ExperienceBlock>
            <ExperienceBlock
              jobPosition={'JOB POSITION'}
              company={'Company'}
              year={'2018 - present'}
              description={
                'Lorem ipsum dolor sit amet, consecterure apdispecading elit. Lsaldooe vpourlew simloik voluppt ex venima, architecto consecures alias adispcik eos, nulla repllekbus? Dolorum repregerum fugiat sint alias amet consertuno sed.Rem?'
              }
              li1={'Lorem, ipsum dolor.'}
              li2={'Lorem ipsum dolor sit.'}
            ></ExperienceBlock>
          </FlexBox>
        </Section>
      </main>
      <Footer>
        <FooterBox
          contact={'Location'}
          contactLi1={'Imaginary st. 52,'}
          url1='https://www.google.com/maps/place/Vilnius/@54.7007598,24.9735438,10z/data=!3m1!4b1!4m5!3m4!1s0x46dd93fb5c6408f5:0x400d18c70e9dc40!8m2!3d54.6871555!4d25.2796514'
          contactLi2={'Vilnius, Narnia'}
          url2='https://www.google.com/maps/place/Vilnius/@54.7007598,24.9735438,10z/data=!3m1!4b1!4m5!3m4!1s0x46dd93fb5c6408f5:0x400d18c70e9dc40!8m2!3d54.6871555!4d25.2796514'
        ></FooterBox>
        <FooterBox
          contact={'Contact'}
          contactLi1={'+370678903245'}
          url1='tel:+370678903245'
          contactLi2={'email@test.dev'}
          url2='mailto: email@test.dev'
        ></FooterBox>
        <FooterBox
          contact={'Social'}
          contactLi1={'LINKEDIN/username'}
          url1='https://www.linkedin.com'
          contactLi2={'TWITTER/@user-handle'}
          url2='https://www.twitter.com'
        ></FooterBox>
      </Footer>
    </div>
  );
}

export default App;
