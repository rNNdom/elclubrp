import React, { useState } from "react"

export default function SancionesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSeverity, setFilterSeverity] = useState("all")

  const severityColors = {
    warning: { bg: "bg-green-100", text: "text-green-700", border: "border-green-500", label: "LDA", name: "Warning" },
    leve: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-500", label: "L", name: "Leve" },
    media: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-500", label: "M", name: "Media" },
    grave: { bg: "bg-red-100", text: "text-red-700", border: "border-red-500", label: "G", name: "Grave" },
    extrema: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-500", label: "E", name: "Extrema" },
    comunitario: { bg: "bg-red-100", text: "text-red-700", border: "border-red-500", label: "", name: "Comunitario" }
  }

  const SeverityBadge = ({ type }: { type: keyof typeof severityColors }) => {
    const colors = severityColors[type]
    return colors.label && <span className={`px-2 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} ${colors.border} border`}>{colors.label}</span>
  }

  const infractions = [
    { infraction: "Forzar rol", sanction: "Comunitario + Warn", duration: "50 Comunitarios", severity: "warning" },
    { infraction: "Revenge Kill (RK)", sanction: "Ban", duration: "", severity: "leve" },
    { infraction: "Volver al rol antes de 20 min tras morir", sanction: "Ban", duration: "", severity: "leve" },
    { infraction: "Cortar/Salirse de rol", sanction: "Ban", duration: "", severity: "leve" },
    { infraction: "Meta Gaming (MG)", sanction: "Warn/Ban", duration: "", severity: "leve" },
    { infraction: "Power Gaming (PG)", sanction: "Warn", duration: "", severity: "warning" },
    { infraction: "Uso de Cheats o Aplicaciones externas", sanction: "Ban", duration: "", severity: "extrema" },
    { infraction: "No valora vida", sanction: "Comunitario + Warn", duration: "50 Comunitarios", severity: "warning" },
    { infraction: "Bad Driving", sanction: "Warn", duration: "", severity: "warning" },
    { infraction: "Combat logging", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "Combat logging (repetidas ocasiones)", sanction: "Ban", duration: "", severity: "extrema" },
    { infraction: "Dupear", sanction: "Ban", duration: "", severity: "extrema" },
    { infraction: "Insultar servidor/staff", sanction: "Ban", duration: "", severity: "extrema" },
    { infraction: "Insultar OOC", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "VDM/CARKILL", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "No cumplir lo acordado en robo", sanction: "Comunitario + Warn", duration: "50 Comunitarios", severity: "warning" },
    { infraction: "Bug Abuse (BA)", sanction: "Ban", duration: "", severity: "extrema" },
    { infraction: "Deathmatch (DM)", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "Evadir rol", sanction: "Comunitarios", duration: "50 Comunitarios", severity: "comunitario" },
    { infraction: "Rol agresivo a facciones", sanction: "Comunitario + Warn", duration: "50 Comunitarios", severity: "warning" },
    { infraction: "No respetar RDE", sanction: "Comunitarios", duration: "50 Comunitarios", severity: "comunitario" },
    { infraction: "Ponerse ropa de facciones sin serlo", sanction: "Comunitarios", duration: "50 Comunitarios", severity: "comunitario" },
    { infraction: "Reportar en medio del rol", sanction: "Warn", duration: "", severity: "warning" },
    { infraction: "Matar en zona segura sin rol previo", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "No enviar entorno", sanction: "Comunitario + Warn", duration: "50 Comunitarios", severity: "warning" },
    { infraction: "No FairPlay", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "Toxicidad OOC tras perder roles", sanction: "Ban", duration: "", severity: "media" },
    { infraction: "Mentir en reportes", sanction: "Ban", duration: "", severity: "extrema" },
    {
      infraction: "Pruebas falsas",
      sanction: "Ban",
      duration: "",
      severity: "extrema"
    },
    { infraction: "Molestar al Staff", sanction: "Comunitarios", duration: "50 Comunitarios", severity: "comunitario" },
    { infraction: "Evadir al Staff", sanction: "Comunitarios", duration: "50 Comunitarios", severity: "comunitario" },
    { infraction: "No uso de /me", sanction: "Comunitarios", duration: "50 Comunitarios", severity: "comunitario" },
    { infraction: "Robo sin policías disponibles", sanction: "Comunitario + Warn", duration: "40 Comunitarios", severity: "warning" },
    { infraction: "No rolear choque (NRC)", sanction: "Comunitarios", duration: "40 Comunitarios", severity: "comunitario" },
    { infraction: "Robar comida y bebestibles", sanction: "Comunitarios", duration: "40 Comunitarios", severity: "comunitario" },
    { infraction: "No rolear IC en radio", sanction: "Comunitario + Warn", duration: "60 Comunitarios", severity: "warning" },
    { infraction: "Esconderse en un arbusto", sanction: "Ban", duration: "", severity: "extrema" }
  ]

  const filteredInfractions = infractions.filter((item) => {
    const matchesSearch = item.infraction.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSeverity = filterSeverity === "all" || item.severity === filterSeverity
    return matchesSearch && matchesSeverity
  })

  const getDurationDisplay = (severity: string, duration: string) => {
    const severityKey = severity as keyof typeof severityColors

    let timeRange = ""
    switch (severity) {
      case "warning":
        timeRange = "Llamado de atención"
        break
      case "leve":
        timeRange = "1 - 5 horas de BAN"
        break
      case "media":
        timeRange = "5 - 24 horas de BAN"
        break
      case "grave":
        timeRange = "24 - 72 horas de BAN"
        break
      case "extrema":
        timeRange = "5 días de BAN - BAN PERMANENTE"
        break
      case "comunitario":
        timeRange = ""
        break
    }

    return (
      <div className='flex items-center gap-2'>
        {duration && <span className='text-gray-700'>{duration}</span>}
        {duration && timeRange && <span className='text-gray-700'>+</span>}
        {timeRange && <span className='text-gray-700'>{timeRange}</span>}
        <SeverityBadge type={severityKey} />
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      {/* Search and Filter Controls */}
      <div className='flex flex-col sm:flex-row gap-4 mb-4'>
        <div className='flex-1'>
          <input
            type='text'
            placeholder='Buscar infracción...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
          />
        </div>
        <div>
          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
          >
            <option value='all'>Todas las severidades</option>
            <option value='warning'>Warning (LDA)</option>
            <option value='leve'>Leve (L)</option>
            <option value='media'>Media (M)</option>
            <option value='grave'>Grave (G)</option>
            <option value='extrema'>Extrema (E)</option>
          </select>
        </div>
      </div>

      {/* Results Counter */}
      <div className='text-sm text-gray-600 mb-2'>
        Mostrando {filteredInfractions.length} de {infractions.length} infracciones
      </div>

      {/* Table */}
      <div className='overflow-x-auto shadow-lg rounded-lg'>
        <table className='w-full border-collapse bg-white'>
          <thead>
            <tr className='bg-gradient-to-r from-gray-50 to-gray-100'>
              <th className='border-b-2 border-gray-200 p-4 text-left font-bold text-red-600'>🚫 INFRACCIÓN</th>
              <th className='border-b-2 border-gray-200 p-4 text-left font-bold text-blue-600'>⚖️ SANCIÓN</th>
              <th className='border-b-2 border-gray-200 p-4 text-left font-bold text-purple-600'>⏱️ DURACIÓN</th>
            </tr>
          </thead>
          <tbody>
            {filteredInfractions.map((item, index) => (
              <tr key={index} className='hover:bg-gray-50 transition-colors duration-200'>
                <td className='border-b border-gray-200 p-4'>
                  <div className='font-medium text-gray-900'>{item.infraction}</div>
                </td>
                <td className='border-b border-gray-200 p-4'>
                  <div className='text-gray-700'>{item.sanction}</div>
                </td>
                <td className='border-b border-gray-200 p-4'>{getDurationDisplay(item.severity, item.duration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredInfractions.length === 0 && <div className='text-center py-8 text-gray-500'>No se encontraron infracciones que coincidan con los criterios de búsqueda.</div>}
    </div>
  )
}
