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
              My name is Dave (or 0x) - a Computer Engineering undergraduate and software engineer
              with over 4 years of experience architecting scalable web and mobile platforms,
              high-throughput backend services, and real-time systems.
            </p>

            <p>
              Beyond engineering, my mind lives in pure mathematics particularly complex analysis.
              One of my ultimate intellectual pursuits is exploring the non-trivial zeros of the
              Riemann zeta function. I also have interest in algorithms and distributed systems.
            </p>

            <p>
              When I'm not untangling bottlenecks or analyzing mathematical proofs, you’ll probably
              find me trusting my intuition in a late-night chess match or building fun products.
            </p>

            <p>Here are a few technologies I've worked with:</p>
          </div>
          <div className="skills-wrapper">
            <ul className="skills-list">
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
                    src={`../../images/skills/vue.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Next.js"
                  />
                </div>
                <p className="skill-name">Vue.js</p>
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
                <p className="skill-name">(Framer) Motion</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/react.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="React native"
                  />
                </div>
                <p className="skill-name">React Native</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/nestjs.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="nest.js"
                  />
                </div>
                <p className="skill-name">Nest.js</p>
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
                    src={`../../images/skills/python.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Python"
                  />
                </div>
                <p className="skill-name">Python</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/postgresql.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Postgres"
                  />
                </div>
                <p className="skill-name">PostgreSQL</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/laravel.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Postgres"
                  />
                </div>
                <p className="skill-name">Laravel</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/websocket.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Next.js"
                  />
                </div>
                <p className="skill-name">WebSocket</p>
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
                    src={`../../images/skills/redis.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Redis"
                  />
                </div>
                <p className="skill-name">Redis</p>
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
