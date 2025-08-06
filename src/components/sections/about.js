import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    list-style: none;
    margin: 15px 0px 0px 0px;
    padding: 0px;
    flex-wrap: wrap;

    li {
      overflow: hidden;
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0.75rem;
      border: thin solid var(--outline-light);
      padding: 10px 15px 10px 15px;
      margin: 0.5rem;

      .skill-img {
        width: 25px;
        margin-right: 25px;
      }
      .skill-name {
        margin-top: auto;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--primary-color);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hi there!</p>
            <p>
              My name is Dave (or 0x) and I'm a Computer Engineering undergraduate with over 3 years
              experience building scalable software.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of building
              <a href="https://krist-ecommerce.vercel.app" rel="noreferrer" target="_blank">
                an e-commerce platform for a retail brand
              </a>{' '}
              and{' '}
              <a href="https://eventorbit.vercel.app" rel="noreferrer" target="_blank">
                a high-traffic event ticketing system
              </a>
              . I’ve also partnered with developer friends to build exciting projects such as{' '}
              <a href="https://hora-student-app.vercel.app" rel="noreferrer" target="_blank">
                {' '}
                a full-stack student todo-list application
              </a>{' '}
              and{' '}
              <a href="https://career-nova.vercel.app" rel="noreferrer" target="_blank">
                a career / mentoring app with AI integration.
              </a>
            </p>

            <p>
              Aside programming, I have deep interests in Mathematics particularly complex analysis
              and one of my biggest goals in life is to unravel the mystery of the Reimann's
              conjecture.
            </p>

            <p>Here are a few technologies I've worked with:</p>
          </div>
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/tailwindcss.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="TailwindCSS"
                  />
                </div>
                <p className="skill-name">TailwindCSS</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/typescript.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="TypeScript"
                  />
                </div>
                <p className="skill-name">TypeScript</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/nodejs.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Nodejs"
                  />
                </div>
                <p className="skill-name">Nodejs</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/nextjs.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Next.js"
                  />
                </div>
                <p className="skill-name">Next.js</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/python.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Python</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/mongodb.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="MongoDB"
                  />
                </div>
                <p className="skill-name">MongoDB</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/graphql.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="GraphQL"
                  />
                </div>
                <p className="skill-name">GraphQL</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/supabase.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Supabase"
                  />
                </div>
                <p className="skill-name">Supabase</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Docker.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Docker"
                  />
                </div>
                <p className="skill-name">Docker</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/framermotion.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Framer Motion"
                  />
                </div>
                <p className="skill-name">Framer Motion</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/webflow.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Webflow"
                  />
                </div>
                <p className="skill-name">Webflow</p>
              </li>
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
