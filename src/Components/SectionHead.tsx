type SectionHeadProps = {
  num: string
  title: string
}

export function SectionHead({ num, title }: SectionHeadProps) {
  return (
    <div className="sec-head reveal">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-line" />
    </div>
  )
}
