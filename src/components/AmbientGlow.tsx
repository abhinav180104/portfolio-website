const ORBS = [
  {
    size: 'h-[24rem] w-[24rem]',
    color: 'bg-azure/18',
    position: { top: '-6rem', left: '-4rem' },
  },
  {
    size: 'h-[28rem] w-[28rem]',
    color: 'bg-lime/10',
    position: { bottom: '-8rem', right: '-2rem' },
  },
  {
    size: 'h-[14rem] w-[14rem]',
    color: 'bg-sky-200/8',
    position: { top: '40%', left: '65%' },
  },
]

export function AmbientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-60">
      {ORBS.map((orb, idx) => (
        <div
          key={idx}
          className={`absolute ${orb.size} ${orb.color} rounded-full blur-[96px]`}
          style={orb.position}
        />
      ))}
    </div>
  )
}
