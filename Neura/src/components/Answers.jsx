import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "./helper";	


const Answer = ({ ans,totalResult, index }) => {
  

	const [isHeading, setIsHeading] = useState(false);	
	const [answer, setAnswer] = useState(ans);
    useEffect(() => {
      if(checkHeading(ans)) {
		setIsHeading(true);
		setAnswer(replaceHeadingStars(ans));
	  }
    }, []);

    return (
      <>

	  {
		index==0 &&totalResult>1? <span className="Text-3xl">{answer}</span>: <span className="text-base pl-5 ">{answer}</span>
      }
    </>
  );
};
export default Answer;
