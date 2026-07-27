import { CoffeeIcon, DrumstickIcon } from '../icons'
import { schedule } from '../data/content'

function FormatCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-[#d9e2ec] rounded-[8px] p-5 md:p-[21px] flex flex-col gap-3">
      <div className="bg-[#eaf3ff] rounded-[6px] size-10 flex items-center justify-center text-[#2563eb]">
        {icon}
      </div>
      <h3 className="text-[#17324d] text-[18px] md:text-[22px] font-semibold leading-normal pt-1">{title}</h3>
      <p className="text-[#6a7a8c] text-[15px] md:text-[18px] font-normal leading-normal">{description}</p>
    </div>
  )
}

// Colored full-width divider rows for breaks/ceremonial slots (Inauguration,
// Tea Break, Lunch Break, Valedictory, etc.), matching the reference table design.
const BANNER_STYLES = {
  amber: { bg: '#fff8dc', text: '#8a6d00' },
  green: { bg: '#eaf8ef', text: '#2e7d57' },
  red: { bg: '#fceeee', text: '#9e4a4a' },
}

const BANNER_ICONS = {
  coffee: CoffeeIcon,
  drumstick: DrumstickIcon,
}

function BannerRow({ label, variant = 'amber', icon }) {
  const style = BANNER_STYLES[variant] || BANNER_STYLES.amber
  const Icon = BANNER_ICONS[icon]
  return (
    <div
      className="bg-white border-t border-[#d9e2ec] flex items-center justify-center gap-2 px-[18px] py-3"
      style={{ backgroundColor: style.bg }}
    >
      {Icon && <Icon style={{ color: style.text }} />}
      <span className="text-[13px] font-medium text-center" style={{ color: style.text }}>
        {label}
      </span>
    </div>
  )
}

function ScheduleRow({ time, title, session, speaker, focus, showFocus }) {
  return (
    <div className="bg-white border-t border-[#d9e2ec] flex items-start">
      <div className="w-[120px] px-[18px] py-4 shrink-0">
        <span className="text-[13px] font-medium text-[#2f9dc3]">{time}</span>
      </div>
      <div className={`${showFocus ? 'flex-[2]' : 'flex-[2.2]'} px-[18px] py-4 flex flex-col gap-1`}>
        {title && <span className="text-[13px] font-semibold text-[#17324d]">{title}</span>}
        {session && <span className="text-[12px] text-[#6a7a8c]">{session}</span>}
      </div>
      <div className={`${showFocus ? 'flex-[1.2]' : 'flex-[1.5]'} px-[18px] py-4`}>
        <span className="text-[13px] text-[#6a7a8c] whitespace-pre-line">{speaker}</span>
      </div>
      {showFocus && (
        <div className="flex-[1.5] px-[18px] py-4">
          <span className="text-[13px] text-[#6a7a8c]">{focus}</span>
        </div>
      )}
    </div>
  )
}

function ScheduleTable({ sessions }) {
  const showFocus = sessions.some((item) => item.type !== 'banner' && item.focus)
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="bg-white border border-[#d9e2ec] rounded-[8px] overflow-hidden min-w-[640px] mx-4 sm:mx-0">
        <div className="bg-[#f6f8fb] flex text-[13px] font-semibold text-[#17324d]">
          <div className="w-[120px] px-[18px] py-4 shrink-0">Time</div>
          <div className={`${showFocus ? 'flex-[2]' : 'flex-[2.2]'} px-[18px] py-4`}>Session Title</div>
          <div className={`${showFocus ? 'flex-[1.2]' : 'flex-[1.5]'} px-[18px] py-4`}>Speaker / Faculty</div>
          {showFocus && <div className="flex-[1.5] px-[18px] py-4">Learning Objectives</div>}
        </div>
        {sessions.map((item, index) =>
          item.type === 'banner' ? (
            <BannerRow key={index} label={item.label} variant={item.variant} icon={item.icon} />
          ) : (
            <ScheduleRow key={index} {...item} showFocus={showFocus} />
          )
        )}
      </div>
    </div>
  )
}

export default function ProgramSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-[72px] md:scroll-mt-[80px] bg-[#eef2f7] px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[26px] md:text-[42px] font-bold leading-normal">Program Schedule</h2>
          <p className="text-[#17324d] text-[15px] md:text-[20px] font-semibold leading-normal">{schedule.titleLine}</p>
          <p className="text-[#6a7a8c] text-[14px] md:text-[16px] font-medium leading-normal">{schedule.venueLine}</p>
        </div>

        {schedule.formats?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {schedule.formats.map((format, index) => (
              <FormatCard key={index} {...format} />
            ))}
          </div>
        )}

        <ScheduleTable sessions={schedule.sessions} />
      </div>
    </section>
  )
}
