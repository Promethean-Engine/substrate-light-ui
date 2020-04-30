// Copyright 2018-2020 @paritytech/Nomidot authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Breadcrumbs, Layout } from '../src';
import { withTheme } from './customDecorators';

const sectionLabels = [
  'Welcome',
  'Stash',
  'Controller',
  'Confirm',
  'Claim',
  'Bond',
];

storiesOf('Breadcrumbs', module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add('3 sections', () => {
    const BreadcrumbsProps = {
      activeLabel: select('activeLabel', sectionLabels, 'Welcome'),
      onClick: action('clicked'),
      sectionLabels: sectionLabels,
      className: text('className', ''),
    };
    return (
      <Layout>
        <Breadcrumbs {...BreadcrumbsProps} />
      </Layout>
    );
  });
