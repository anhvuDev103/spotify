import { CheckIcon } from '@components/Svg';
import Tippy from '@tippyjs/react';
import { cloneElement, createContext, useContext, useState } from 'react';

import {
  PopoverFrame,
  PopoverOptionDividerFrame,
  PopoverOptionGroupFrame,
  PopoverOptionItemFrame,
} from './styled';
import {
  PopoverOptionDividerProps,
  PopoverOptionGroupProps,
  PopoverOptionItemProps,
  PopoverProps,
} from './types';

interface PopoverContextType {
  show: () => void;
  hide: () => void;
}

const PopoverContext = createContext<PopoverContextType>({
  show: () => {},
  hide: () => {},
});

const Popover = ({ children, renderElement, ...props }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setShow = (target?: boolean) => () => {
    if (target) {
      setIsVisible(target);
      return;
    }

    setIsVisible((prev) => !prev);
  };

  return (
    <PopoverContext.Provider
      value={{
        show: setShow(true),
        hide: setShow(false),
      }}
    >
      <Tippy
        visible={isVisible}
        interactive
        appendTo={document.body}
        animation={false}
        onClickOutside={setShow(false)}
        render={(attrs) => (
          <PopoverFrame className='box' tabIndex={-1} {...attrs}>
            {renderElement}
          </PopoverFrame>
        )}
        {...props}
      >
        {cloneElement(children, {
          onClick: setShow(),
        })}
      </Tippy>
    </PopoverContext.Provider>
  );
};

const PopoverOptionGroup: React.FC<PopoverOptionGroupProps> = ({
  children,
  label,
  ...props
}) => {
  return (
    <PopoverOptionGroupFrame {...props}>
      {label && <p className='PopoverOptionGroup-label'>{label}</p>}
      {children}
    </PopoverOptionGroupFrame>
  );
};

const PopoverOptionItem: React.FC<PopoverOptionItemProps> = ({
  children,
  startIcon,
  endIcon = <CheckIcon color='primary.main' />,
  active,
  disabled,
  onSelect,
  ...props
}) => {
  const { hide } = useContext(PopoverContext);

  const select = () => {
    onSelect();
    hide();
  };

  return (
    <PopoverOptionItemFrame
      $active={active}
      $disabled={disabled}
      onClick={select}
      {...props}
    >
      {startIcon && (
        <div className='PopoverOptionItem-icon PopoverOptionItem-startIcon'>
          {startIcon}
        </div>
      )}
      {children}
      {endIcon && (
        <div className='PopoverOptionItem-icon PopoverOptionItem-endIcon'>
          {endIcon}
        </div>
      )}
    </PopoverOptionItemFrame>
  );
};

const PopoverOptionDivider: React.FC<PopoverOptionDividerProps> = () => {
  return <PopoverOptionDividerFrame />;
};

export const PopoverOption = {
  Group: PopoverOptionGroup,
  Item: PopoverOptionItem,
  Divider: PopoverOptionDivider,
};

export default Popover;
