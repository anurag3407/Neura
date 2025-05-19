import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "./helper";

const Answer = ({ ans, totalResult, index }) => {
  const [isHeading, setIsHeading] = useState(false);
  const [isSubheading, setIsSubheading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    // Process the data
    if (checkHeading(ans)) {
      // Check if it's a heading or subheading
      if (ans.startsWith('***')) {
        setIsSubheading(true);
      } else {
        setIsHeading(true);
      }
      setAnswer(replaceHeadingStars(ans));
    }
  }, [ans]);

  const renderContent = () => {
    if (isHeading) {
      // Make headings bold
      return <span className="text-2xl font-bold">{answer}</span>;
    } else if (isSubheading) {
      // Make subheadings in markdown (using h3 styling)
      return <span className="text-xl font-semibold">{answer}</span>;
    } else if (index === 0 && totalResult > 1) {
      // Make the first answer more prominent
      return <span className="text-lg">{answer}</span>;
    } else {
      // Make regular text small
      return <span className="text-sm pl-5">{answer}</span>;
    }
  };

  return <>{renderContent()}</>;
};

export default Answer;
