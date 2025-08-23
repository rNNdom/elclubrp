import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import React from "react"

interface SidebarProps {
  isSidebarOpen: boolean
  navigationSections: {
    id: string
    title: string
    icon: string
    items: {
      id: string
      label: string
      level: number
    }[]
  }[]
  toggleSection: (id: string) => void
  expandedSections: Set<string>
  selectedOption: number
  handleItemClick: (id: string, itemIdx: number) => void
}

export default function Sidebar({ isSidebarOpen, navigationSections, toggleSection, expandedSections, selectedOption, handleItemClick }: SidebarProps) {
  return (
    <div
      className={cn(
        "sticky top-32 h-[calc(100vh-5rem)] w-80 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-30",
        isSidebarOpen ? "opacity-100" : " w-0.5 opacity-0"
      )}
    >
      <div className={cn("h-full flex flex-col", isSidebarOpen ? "" : "hidden")}>
        <div className='p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50'>
          <h2 className='text-lg font-bold text-gray-800 flex items-center gap-2'>🗂️ Índice de Contenido</h2>
        </div>

        <div className='flex-1 overflow-y-auto'>
          {navigationSections.map((section) => {
            return (
              <div key={section.id} className='border-b border-gray-100 last:border-b-0'>
                <button onClick={() => toggleSection(section.id)} className='w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group'>
                  <div className='flex items-center gap-3'>
                    <span className='text-lg'>{section.icon}</span>
                    <span className='font-semibold text-gray-800 group-hover:text-purple-600'>{section.title}</span>
                  </div>
                  <div className={`transition-transform duration-200 ${expandedSections.has(section.id) ? "rotate-0" : "-rotate-90"}`}>
                    <ChevronDownIcon className='w-4 h-4 text-gray-500' />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.has(section.id) ? " opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className='pb-2'>
                    {section.items.map((item, itemIdx) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id, itemIdx)}
                        className={`w-full text-left px-4 py-2 text-sm transition-all duration-200 flex items-center ${item.level === 1 ? "pl-12" : item.level === 2 ? "pl-16" : "pl-8"} ${
                          selectedOption === itemIdx
                            ? "bg-purple-100 text-purple-700 border-r-2 border-purple-500 transform  font-bold"
                            : "text-gray-600 hover:bg-gray-50 hover:text-purple-600 hover:transform "
                        }`}
                      >
                        {item.level === 1 && <span className='w-2 h-2 bg-gray-300 rounded-full mr-3 flex-shrink-0' />}
                        <span className='truncate'>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
