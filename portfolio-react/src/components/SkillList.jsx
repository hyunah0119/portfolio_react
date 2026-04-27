import SkillItem from "./SkillItem"
import SkillInput from "./SkillInput"
import { skillList, skillType } from "../data/skillList"
import { useState } from "react"

export default function SkillList() {
    const [selectRadioType, setSelectRadioType] = useState('all');

    const visibleList = selectRadioType === 'all' ? skillList : skillList.filter(item => item.type === selectRadioType);

    return (
        <div>
            <div className="flex justify-end mb-7.5 sm:mb-2">
                <ul className="flex flex-wrap gap-x-2 gap-y-1 sm:gap-4">
                    {skillType.map(type => (
                        <li key={type.id} className="flex items-center">
                            <SkillInput 
                            id={type.id} 
                            checked={selectRadioType === type.id} 
                            onChange={() => setSelectRadioType(type.id)}
                            >
                                {type.name}
                            </SkillInput>
                        </li>
                    ))}
                </ul>
            </div>
            
            {visibleList.map(item => (
                <SkillItem
                    key={item.id}
                    items={item.item}
                    info={item.info}
                    type={item.type}
                />
            ))}
        </div>
    )
}
