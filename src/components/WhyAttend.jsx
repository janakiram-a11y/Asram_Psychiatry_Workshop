import { whyAttend } from '../data/content'
import { BookOpenIcon, PuzzleIcon, ActivityIcon, SmileIcon, ScaleIcon, TargetIcon } from '../icons'

const ICONS = {
  sld: BookOpenIcon,
  autism: PuzzleIcon,
  adhd: ActivityIcon,
  developmentalDelay: SmileIcon,
  legalEthical: ScaleIcon,
  iqTesting: TargetIcon,
}

function TopicCard({ iconKey, title, description }) {
  const Icon = ICONS[iconKey]
  return (
    <div className="bg-white border border-[#d8e2f0] rounded-[8px] p-5 md:p-[21px] flex flex-col gap-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
      <span className="bg-[#e8eff8] rounded-[6px] size-12 flex items-center justify-center text-[#223f7f]">
        <Icon />
      </span>
      <h3 className="text-[#17365d] text-[18px] md:text-[22px] font-semibold leading-normal">{title}</h3>
      <p className="text-[#5d7088] text-[15px] md:text-[18px] font-normal leading-normal">{description}</p>
    </div>
  )
}

export default function WhyAttend() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-[120px] py-12 md:py-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#223f7f] text-[26px] md:text-[42px] font-bold leading-normal">Key Topics</h2>
          {whyAttend.audience && (
            <p className="text-[#5d7088] text-[15px] md:text-[22px] font-medium leading-normal">{whyAttend.audience}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {whyAttend.topics.map((topic) => (
            <TopicCard key={topic.iconKey} {...topic} />
          ))}
        </div>
      </div>
    </section>
  )
}
