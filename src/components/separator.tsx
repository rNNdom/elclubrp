import React from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps {
  className?: string
}

export const Separator = ({ className }: SeparatorProps) => {
  return <div className={cn("w-full h-0.5 bg-gray-100 my-8", className)} />
}
