import React from "react"

interface EducationProps {
  item: {
    name: string
    score: string
    url?: string
    degree?: string
    description?: string
  }
}

const EducationCard: React.FunctionComponent<EducationProps> = ({
  item,
}: EducationProps) => {
  return (
    <li>
      <div>
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {item.degree && <span>{item.degree}</span>}
        </div>
      </div>
    </li>
  )
}

export default EducationCard
