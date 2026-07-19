const SkillItems = ({ items }) => {
  const Icon = items.icon.name;

  return (
    <div className="w-full sm:w-[32%] bg-white dark:bg-[#222] rounded-lg p-7.5 shadow-md">
      <h5 className="text-base sm:text-lg font-gmarket font-bold flex items-center gap-2">
        <Icon style={{ color: items.icon.color }} className="text-xl sm:text-2xl" /> {items.title}
      </h5>

      <ul className="mt-5 list-disc list-inside pl-1">
        {items.info.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillItems