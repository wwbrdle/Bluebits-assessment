import React from "react";
import Button from "./Button";

export default function TextBlock({
  type,
  title,
  subtitle,
  addition,
  className,
  subClassName,
  imageSrc,
}) {
  const handleCopyToClipboard = () => {
    const textToCopy = "288-234-123";
    navigator.clipboard.writeText(textToCopy);
  };
  const renderTextContent = () => {
      switch (type) {
      case "title-only":
        return <p>{title}</p>;
      case "title-with-blue":
        return (
          <div className="pickupCodeWrapperfirst">
            <p className={className}>{title}</p>
            <p className={subClassName}>{subtitle}</p>
          </div>
        );
      case "title-with-image":
        return (
          <div>
            <p className={className}>{title}</p>
            <div className="pickupCode">
              <p className={subClassName}>{subtitle}</p>
              <Button
                type="image"
                className="picupCodeCopy"
                imageSrc={imageSrc}
                altText="copy icon"
                onClick={handleCopyToClipboard}
              />
            </div>
          </div>
        );
      case "title-with-sub":
        return (
          <>
            <p className={className}>{title}</p>
            <p className={subClassName}>{subtitle}</p>
            {addition && <p className={subClassName}>{addition}</p>}
          </>
        );
      default:
        return null;
    }
  };

  return <>{renderTextContent()}</>;
}
