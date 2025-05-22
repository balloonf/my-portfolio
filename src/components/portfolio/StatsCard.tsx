interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
}

export function StatsCard({ title, value, description, icon }: StatsCardProps) {
  return (
    <div className="p-6 border rounded-lg text-center space-y-2">
      {icon && (
        <div className="flex justify-center text-primary mb-3">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="font-medium">{title}</p>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  )
}