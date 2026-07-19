export default function SkillInput({ id, children, checked, onChange }) {
  return (
    <>
      <input
        type="radio"
        id={id}
        name="skillType"
        checked={checked}
        onChange={onChange}
        className="appearance-none w-3 sm:w-4 h-3 sm:h-4 rounded-full border border-[#666] bg-white
        checked:border-[#FF7A70] checked:bg-[radial-gradient(circle_at_center,#FF7A70_0,#FF7A70_40%,transparent_45%)] checked:ring-2 checked:ring-[#FFD1CD] cursor-pointer
        dark:border-[#A79F92] dark:bg-[#1C1C1C] dark:checked:border-[#D98A84] dark:checked:bg-[radial-gradient(circle_at_center,#D98A84_0,#D98A84_40%,transparent_45%)] dark:checked:ring-[#6A4A47]"
      />
      <label htmlFor={id} className="ml-1 text-sm sm:text-base font-medium text-[#666] dark:text-[#EDE4D0] cursor-pointer">
        {children}
      </label>
    </>
  )
}
