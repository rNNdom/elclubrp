import { CircleCheckIcon, InfoIcon } from "lucide-react"

export const SectionContent = ({ children, reference }: { children: React.ReactNode; reference?: string }) => {
  return (
    <div className='p-4 bg-white rounded-lg gap-4 flex flex-col' data-reference={reference}>
      {children}
    </div>
  )
}
export const SubSectionContent = ({ children, reference }: { children: React.ReactNode; reference?: string }) => {
  return (
    <div className={`border-b-1 border-gray-200`} data-reference={reference}>
      {children}
    </div>
  )
}

export const HeaderContent = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => {
  return (
    <div id={id} className='mb-8'>
      <h2 className='text-2xl font-bold mb-4 text-purple-700'>{title}</h2>
      <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4'>
        <p className='text-gray-800 leading-relaxed text-justify'>{children}</p>
      </div>
    </div>
  )
}
export const Content = ({ title, children, id, spaced }: { title: string; children: React.ReactNode; id: string; spaced?: boolean }) => {
  return (
    <div id={id} className={`mb-8 ${spaced && "pl-10"}`}>
      <h3 className={`text-xl font-bold mb-4 text-purple-600 `}>{title}</h3>
      <div className={`grid gap-4`}>{children}</div>
    </div>
  )
}
export const ListItemContent = ({ title, description, items }: { title?: string; description?: string; items?: string[] }) => {
  return (
    <div className='bg-white border border-purple-200 rounded-lg p-4 '>
      {title && <h4 className='font-bold text-purple-600 mb-2'>{title}</h4>}
      {description && (
        <label className='flex items-center gap-4'>
          <span>
            <CircleCheckIcon className='w-4 h-4 text-purple-600' />
          </span>
          <p className='text-gray-700'>{description}</p>
        </label>
      )}
      {items && (
        <ul className='list-disc list-inside text-gray-700 pl-4 mt-2 space-y-2'>
          {items.map((item, index) => (
            <li className='text-gray-700' key={index}>
              {item.includes(":") ? (
                <>
                  <span className='font-bold'>{item.split(":")[0]}:</span> <span>{item.split(":")[1]}</span>
                </>
              ) : (
                <span>{item}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export const ContentFooter = ({ children, name }: { children: React.ReactNode; name?: string }) => {
  return (
    <div className='bg-slate-100 rounded-lg p-6 mb-4'>
      <label className='flex items-center gap-2 flex-col'>
        <span className='flex items-center justify-start gap-2 w-full'>
          <InfoIcon className='w-5 h-5 text-blue-400' />
          <p className='text-blue-400 font-bold'>{name || "Nota:"}</p>
        </span>
        <p className='text-gray-800 leading-relaxed'>{children}</p>
      </label>
    </div>
  )
}
