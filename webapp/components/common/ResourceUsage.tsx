import { Progress, ProgressLabel, ProgressValue } from "../ui/progress"

export default function ResourceUsage({
  label,
  used,
}: {
  label: string
  used: number
}) {
  const isWarning = used < 80 && used >= 65
  const isFull = used >= 80 && used <= 100
  return (
    <Progress
      value={used}
      className="w-full max-w-sm"
      isFull={isFull}
      isWarning={isWarning}
    >
      <ProgressLabel>{label}</ProgressLabel>
      <ProgressValue className={"text-xs"} />
    </Progress>
  )
}
