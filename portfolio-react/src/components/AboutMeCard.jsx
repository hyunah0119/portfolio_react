const AboutMeCard = ({ title, text, item, children }) => {
  return (
    <div className="w-full sm:w-[25%] border border-[#eee] rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] px-5 py-7 
    dark:bg-[#26231F] dark:border-[#3A352F] dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
      <div className="flex justify-center items-center">
        {children}
      </div>
      <div className="pt-7">
        <h5 className="text-lg font-bold">{title}</h5>
        <span className="text-sm font-medium text-[#666] dark:text-[#EDE4D0]">{item}</span>

        <p className="text-[#666] dark:text-[#EDE4D0] break-keep mt-2.5">{text}</p>
      </div>
    </div>
  )
}

export default AboutMeCard