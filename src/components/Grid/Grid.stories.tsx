import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Stack } from '../Stack';
import { Col } from './Col';
import { Row } from './Row';

export default {
  title: 'Grid',
  component: Row,
  argTypes: {},
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = ({ children }) => (
  <Stack gap="medium">{children}</Stack>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={12}>
          12
        </Col>
      </Row>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={6}>
          6
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={6}>
          6
        </Col>
      </Row>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={4}>
          4
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={4}>
          4
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={4}>
          4
        </Col>
      </Row>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={4}>
          4
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={8}>
          8
        </Col>
      </Row>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={3}>
          3
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={3}>
          3
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={3}>
          3
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={3}>
          3
        </Col>
      </Row>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2} offset={8}>
          2
        </Col>
      </Row>
    </>
  ),
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('12')).toBeInTheDocument();
};

export const Gap = Template.bind({});

Gap.args = {
  children: (
    <>
      <Row>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
      </Row>
      <Row gap={['xsmall', 'medium', 'xlarge']}>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
        <Col backgroundColor="secondary" textAlign="center" span={2}>
          2
        </Col>
      </Row>
    </>
  ),
};
export const Responsive = Template.bind({});

Responsive.args = {
  children: (
    <Row>
      <Col backgroundColor="secondary" textAlign="center" span={[6, 4]}>
        span [6, 4]
      </Col>
      <Col backgroundColor="secondary" textAlign="center" span={[6, 4]} offset={[0, 4]}>
        span [6, 4] offset [0, 4]
      </Col>
    </Row>
  ),
};
