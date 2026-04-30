import React from "react";

export function Button({ children, className = "", asChild = false, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${className}`,
    });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
