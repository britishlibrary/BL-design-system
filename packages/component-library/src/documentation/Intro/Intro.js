import React from 'react'
// import { linkTo } from '@storybook/addon-links';

import { version } from '../../../package'

// import Button from '../../components/Button';
// import Blockquote from '../../components/Blockquote';
// import Link from '../../components/Link';

import './_intro.scss'

const Intro = () => (
  <div>
    <div className="intro">
      <div className="intro__left">
        <h1>
          The British Library <span className="intro__name">Design System</span>
          <span className="intro__version">v{version}</span>
        </h1>
        <p>
          The British Library design system <br />
          provides you with guidelines, components and templates
          <br /> to boost the user experience of your products.
        </p>
        {/* <Button
          kind="primary"
          style={{ marginRight: '0.5em' }}
          onClick={linkTo('Getting started|Getting started', 'Developers')}>
          Getting started
        </Button>

        <Button
          kind="secondary"
          style={{ marginLeft: '0.5em' }}
          href="https://github.com/britishlibrary/BL-design-system">
          Follow on GitHub
        </Button> */}
      </div>
    </div>

    <div className="intro-content">
      {/* <Page> */}
      <div className="row" style={{ margin: '2em 0' }}>
        <div
          className="col-xs-12 col-md-3 col-lg-3"
          style={{ textAlign: 'left' }}
        >
          <img
            alt="Usability"
            style={{
              width: '80px',
              height: 'auto',
              marginTop: '3em',
              marginLeft: '0.2em',
            }}
            src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/usability.svg`}
          />
        </div>

        <div className="col-xs">
          <h3 className="content-title">Purpose</h3>
          <p>
            Our goal is to create a comprehensive toolkit that will serve as a
            unifying resource for both UX-designers and developers alike. Our
            toolkit will enable teams to ensure that all British Library
            projects are accessible, visually engaging, and maintain a
            consistent look and feel across the board by adhering to The British
            Library&apos;s design and implementation guidelines. Our team is
            dedicated to creating a powerful tool that will help drive
            innovation and excellence across all our digital projects. We look
            forward to sharing our progress with you and seeing the positive
            impact our toolkit will have on our work.
          </p>
          <p>
            At The British Library, we&apos;re committed to creating digital
            products that embody the highest standards of excellence and
            accessibility. To that end, we&apos;ve developed a set of guidelines
            that we apply to all our digital products, including websites, web
            applications, internal systems, and more. Our guidelines are
            designed to ensure that our digital products are consistent,
            visually appealing, and accessible to all users.
          </p>
        </div>
      </div>

      <div className="row" style={{ margin: '2em 0' }}>
        <div
          className="col-xs-12 col-md-3 col-lg-3"
          style={{ textAlign: 'left' }}
        >
          <img
            alt="Toolkit"
            style={{
              width: '100px',
              height: 'auto',
              marginTop: '2em',
              marginLeft: '0em',
            }}
            src={`${process.env.STORYBOOK_INTERNAL_ASSETS}internal/toolkit.svg`}
          />
        </div>

        <div className="col-xs">
          <h3 className="content-title">Toolkit</h3>
          <p>
            Our system consolidates design elements into reusable components,
            which streamlines and expedites the development of digital products.
            With our approach, creating high-quality digital products becomes
            simpler and faster than ever before.
          </p>
          <p>
            Our guide is constantly evolving to ensure it meets the unique needs
            of our team as we continue to innovate and push the boundaries of
            digital design. If you require a particular component or pattern
            that you don&apos;t see in the guide or have any other feedback,
            questions or comments, please don&apos;t hesitate to reach out to
            us. We&apos;re always eager to hear from you and improve our guide
            in any way we can.
          </p>

          {/* <Blockquote title="Your Feedback">
              <p>
                Your feedback is highly appreciated! You can create a{' '}
                <Link href="https://github.com/britishlibrary/BL-design-system/issues" target="_blank">
                  new Issue
                </Link>{' '}
                on GitHub or send an email to{' '}
                <Link href="mailto:webteam@bl.uk">
                  webteam@bl.uk
                </Link>
                .
              </p>
            </Blockquote> */}
        </div>
      </div>
      {/* </Page> */}
    </div>
  </div>
)

export default Intro
