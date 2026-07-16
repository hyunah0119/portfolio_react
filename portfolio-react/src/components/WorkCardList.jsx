import { useState } from "react";
import WorkAccordion from "./WorkAccordion"

import { workExperienceList } from "../data/workList";

const WorkCardList = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleClickAccordion = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="flex flex-col justify-center">
      {workExperienceList.map((item) => (
        <WorkAccordion
          key={item.id}
          item={item}
          isOpen={openItemId === item.id}
          onClick={() => handleClickAccordion(item.id)}
        />
      ))}
    </div>
  )
}

export default WorkCardList