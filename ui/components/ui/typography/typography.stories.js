import React from 'react';
import {
  COLORS,
  FONT_WEIGHT,
  TEXT_ALIGN,
  TYPOGRAPHY,
} from '../../../helpers/constants/design-system';

import Box from '../box';

import README from './README.mdx';
import Typography from '.';

export default {
  title: 'Components/UI/Typography',
  id: __filename,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.values(COLORS),
    },
    align: {
      control: { type: 'select' },
      options: TEXT_ALIGN,
      defaultValue: TEXT_ALIGN.LEFT,
    },
    fontWeight: {
      control: { type: 'select' },
      options: FONT_WEIGHT,
      defaultValue: FONT_WEIGHT.NORMAL,
    },
    variant: {
      control: { type: 'select' },
      options: TYPOGRAPHY,
      defaultValue: TYPOGRAPHY.Paragraph,
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'The quick orange fox jumped over the lazy dog.',
    },
  },
};

export const DefaultStory = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

DefaultStory.storyName = 'Default';

export const Variant = (args) => (
  <>
    {Object.values(TYPOGRAPHY).map((variant) => (
      <div key={variant} style={{ width: '100%' }}>
        <Typography {...args} variant={variant}>
          {variant}
        </Typography>
      </div>
    ))}
  </>
);

export const Color = (args) => (
  <>
    <Typography {...args} color={COLORS.TEXT_DEFAULT}>
      COLORS.TEXT_DEFAULT
    </Typography>
    <Typography {...args} color={COLORS.TEXT_ALTERNATIVE}>
      COLORS.TEXT_ALTERNATIVE
    </Typography>
    <Typography {...args} color={COLORS.TEXT_MUTED}>
      COLORS.TEXT_MUTED
    </Typography>
    <Box backgroundColor={COLORS.OVERLAY_DEFAULT}>
      <Typography {...args} color={COLORS.OVERLAY_INVERSE}>
        COLORS.OVERLAY_INVERSE
      </Typography>
    </Box>
    <Typography {...args} color={COLORS.PRIMARY_DEFAULT}>
      COLORS.PRIMARY_DEFAULT
    </Typography>
    <Box backgroundColor={COLORS.PRIMARY_DEFAULT}>
      <Typography {...args} color={COLORS.PRIMARY_INVERSE}>
        COLORS.PRIMARY_INVERSE
      </Typography>
    </Box>
    <Typography {...args} color={COLORS.SECONDARY_DEFAULT}>
      COLORS.SECONDARY_DEFAULT
    </Typography>
    <Box backgroundColor={COLORS.SECONDARY_DEFAULT}>
      <Typography {...args} color={COLORS.SECONDARY_INVERSE}>
        COLORS.SECONDARY_INVERSE
      </Typography>
    </Box>
    <Typography {...args} color={COLORS.ERROR_DEFAULT}>
      COLORS.ERROR_DEFAULT
    </Typography>
    <Box backgroundColor={COLORS.ERROR_DEFAULT}>
      <Typography {...args} color={COLORS.ERROR_INVERSE}>
        COLORS.ERROR_INVERSE
      </Typography>
    </Box>
    <Typography {...args} color={COLORS.SUCCESS_DEFAULT}>
      COLORS.SUCCESS_DEFAULT
    </Typography>
    <Box backgroundColor={COLORS.SUCCESS_DEFAULT}>
      <Typography {...args} color={COLORS.SUCCESS_INVERSE}>
        COLORS.SUCCESS_INVERSE
      </Typography>
    </Box>
    <Box backgroundColor={COLORS.WARNING_DEFAULT}>
      <Typography {...args} color={COLORS.WARNING_INVERSE}>
        COLORS.WARNING_INVERSE
      </Typography>
    </Box>
    <Typography {...args} color={COLORS.INFO_DEFAULT}>
      COLORS.INFO_DEFAULT
    </Typography>
    <Box backgroundColor={COLORS.INFO_DEFAULT}>
      <Typography {...args} color={COLORS.INFO_INVERSE}>
        COLORS.INFO_INVERSE
      </Typography>
    </Box>
  </>
);

export const Tag = () => (
  <>
    <Typography tag="p">p</Typography>
    <Typography tag="h1">h1</Typography>
    <Typography tag="h2">h2</Typography>
    <Typography tag="h3">h3</Typography>
    <Typography tag="h4">h4</Typography>
    <Typography tag="h5">h5</Typography>
    <Typography tag="h6">h6</Typography>
    <Typography tag="span">span</Typography>
    <br />
    <Typography tag="strong">strong</Typography>
    <br />
    <Typography tag="em">em</Typography>
    <ul>
      <Typography tag="li">li</Typography>
    </ul>
    <Typography tag="div">div</Typography>
    <Typography tag="dt">dt</Typography>
    <Typography tag="dd">dd</Typography>
  </>
);
