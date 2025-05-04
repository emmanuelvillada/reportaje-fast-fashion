import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Historieta() {
  const paneles = [
    {
      id: 1,
      imagen: "/placeholder.svg?height=400&width=300",
      titulo: "Diseño y producción",
      texto: "Una prenda es diseñada en Europa y producida en masa en fábricas asiáticas con bajos salarios.",
    },
    {
      id: 2,
      imagen: "/placeholder.svg?height=400&width=300",
      titulo: "Transporte global",
      texto: "Viaja miles de kilómetros en barcos y camiones, generando una enorme huella de carbono.",
    },
    {
      id: 3,
      imagen: "/placeholder.svg?height=400&width=300",
      titulo: "Venta en Medellín",
      texto: "Llega a tiendas locales donde se vende a bajo precio, compitiendo con productos nacionales.",
    },
    {
      id: 4,
      imagen: "/placeholder.svg?height=400&width=300",
      titulo: "Uso breve",
      texto: "Se usa pocas veces antes de ser descartada por seguir nuevas tendencias.",
    },
    {
      id: 5,
      imagen: "/placeholder.svg?height=400&width=300",
      titulo: "Destino final",
      texto: "Termina en vertederos donde tardará décadas en degradarse, contaminando suelos y aguas.",
    },
    {
      id: 6,
      imagen: "/placeholder.svg?height=400&width=300",
      titulo: "¿Y si...?",
      texto: "Imagina un ciclo diferente: producción local, materiales sostenibles y consumo consciente.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {paneles.map((panel) => (
        <Card key={panel.id} className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
          <div className="relative aspect-[3/4] w-full">
            <Image src={panel.imagen || "/placeholder.svg"} alt={panel.titulo} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-1">{panel.titulo}</h3>
            <p className="text-sm text-gray-600">{panel.texto}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
