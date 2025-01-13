import React, { useState } from "react";

const RecruitmentStatus = () => {
  const [isLookingForJob, setIsLookingForJob] = useState(true);

  const toggleStatus = () => {
    setIsLookingForJob((prevStatus) => !prevStatus);
  };

  return (
    <div className="recruitment-status">
      <div
        className={`light-bulb ${isLookingForJob ? "green" : "red"}`}
      ></div>
      <p>{
        isLookingForJob
          ? "LOOKING FOR A JOB"
          : "CURRENTLY NOT LOOKING FOR A JOB"
      }</p>
    </div>
  );
};

export default RecruitmentStatus;