import { StackFrame, StackItemFrame } from './styled';
import { StackItemProps, StackProps } from './types';

const StackMain: React.FC<StackProps> = ({
  orientation,
  children,
  ...props
}) => {
  return (
    <StackFrame $orientation={orientation} {...props}>
      {children}
    </StackFrame>
  );
};

const StackItem: React.FC<StackItemProps> = ({ children, ...props }) => {
  return <StackItemFrame {...props}>{children}</StackItemFrame>;
};

StackMain.defaultProps = {
  orientation: 'vertical',
  as: 'div'
};

StackItem.defaultProps = {
  as: 'div'
};

const Stack = {
  Main: StackMain,
  Item: StackItem
};

export default Stack;
