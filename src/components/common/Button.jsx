import React from "react";
import TextBlock from "./TextBlock";

export default function Button({
  type,
  className,
  firstSubClassName,
  secondSubClassName,
  text,
  subText,
  imageSrc,
  altText,
  onClick,
}) {
  const renderButtonContent = () => {
    switch (type) {
      case "image":
        return <img className={className} src={imageSrc} alt={altText} onClick={onClick} />;
      case "text":
        return <button className={className}>{text}</button>;
      case "text-image":
        return (
          <div className={className}>
            <img src={imageSrc} alt={altText} />
            <div>
              <TextBlock
                type="title-with-sub"
                className={firstSubClassName}
                subClassName={secondSubClassName}
                title={text}
                subtitle={subText}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderButtonContent()}</>;
}
