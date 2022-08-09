import React from 'react';
import warning from 'warning';

export function useControlledSwitchWarning(
  controlPropValue,
  controlPropName,
  componentName
) {
  const isControlled = controlPropValue !== null && controlPropValue !== undefined;
  const { current: wasControlled } = React.useRef(isControlled);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    warning(
      !(isControlled && !wasControlled),
      `\`${componentName}\` is changing from uncontrolled to be controlled. Reach UI components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled \`${componentName}\` for the lifetime of the component. Check the \`${controlPropName}\` prop.`
    );
    warning(
      !(!isControlled && wasControlled),
      `\`${componentName}\` is changing from controlled to be uncontrolled. Reach UI components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled \`${componentName}\` for the lifetime of the component. Check the \`${controlPropName}\` prop.`
    );
  }, [isControlled, wasControlled, componentName, controlPropName]);
}