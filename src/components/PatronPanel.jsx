import { UserIcon } from '../icons'

function PatronAvatar({ name, role, photo, compactName }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="size-[100px] md:size-[112px] rounded-full overflow-hidden border-[3px] border-[#223f7f]/20 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] shrink-0 bg-[#dde6f5] flex items-center justify-center text-[#223f7f]">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <UserIcon size={40} />
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p
          className={`text-[#191919] font-bold leading-snug whitespace-nowrap ${
            compactName
              ? 'text-[15px] lg:text-[14px] tracking-normal lg:tracking-tight'
              : 'text-[15px] md:text-[17px]'
          }`}
        >
          {name}
        </p>
        <p
          className={`text-[#64748b] font-medium leading-snug ${
            compactName ? 'text-[13px] lg:text-[12px]' : 'text-[13px] md:text-[15px]'
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  )
}

export default function PatronPanel({ title, icon, itemWidthClassName, people, compactNames }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6 md:p-[57px] flex flex-col gap-8 md:gap-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)]">
      <div className="border-b border-[#e1e1e1] pb-5 md:pb-6 flex items-center gap-4">
        {icon}
        <h3 className="text-[#191919] text-[20px] md:text-[24px] font-extrabold leading-normal">{title}</h3>
      </div>
      {/* flex-wrap + justify-center (rather than CSS grid) so an incomplete
          last row of avatars stays centered instead of hugging the left edge. */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 md:gap-y-8">
        {people.map((person, index) => (
          <div key={index} className={itemWidthClassName}>
            <PatronAvatar {...person} compactName={compactNames} />
          </div>
        ))}
      </div>
    </div>
  )
}
