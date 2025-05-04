"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Flag } from "lucide-react"

interface Comentario {
  id: number
  autor: string
  avatar: string
  fecha: string
  contenido: string
  likes: number
}

const comentariosIniciales: Comentario[] = [
  {
    id: 1,
    autor: "María Gómez",
    avatar: "/placeholder.svg?height=40&width=40",
    fecha: "Hace 2 días",
    contenido: "Excelente reportaje. Nunca había pensado en el impacto ambiental de mi ropa.",
    likes: 12,
  },
  {
    id: 2,
    autor: "Carlos Restrepo",
    avatar: "/placeholder.svg?height=40&width=40",
    fecha: "Hace 1 día",
    contenido:
      "Como empresario textil, puedo confirmar que la competencia con el fast fashion es brutal. Necesitamos más conciencia del consumidor.",
    likes: 8,
  },
]

export function Comentarios() {
  const [comentarios, setComentarios] = useState<Comentario[]>(comentariosIniciales)
  const [nuevoComentario, setNuevoComentario] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nuevoComentario.trim()) return

    const comentario: Comentario = {
      id: Date.now(),
      autor: "Usuario",
      avatar: "/placeholder.svg?height=40&width=40",
      fecha: "Ahora",
      contenido: nuevoComentario,
      likes: 0,
    }

    setComentarios([comentario, ...comentarios])
    setNuevoComentario("")
  }

  const darLike = (id: number) => {
    setComentarios(
      comentarios.map((comentario) =>
        comentario.id === id ? { ...comentario, likes: comentario.likes + 1 } : comentario,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Comentarios ({comentarios.length})</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Comparte tu opinión sobre este reportaje..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit">Publicar comentario</Button>
      </form>

      <div className="space-y-4">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="p-4 border rounded-lg">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={comentario.avatar || "/placeholder.svg"} alt={comentario.autor} />
                <AvatarFallback>{comentario.autor.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{comentario.autor}</span>
                    <span className="text-xs text-muted-foreground ml-2">{comentario.fecha}</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Flag className="h-4 w-4" />
                    <span className="sr-only">Reportar</span>
                  </Button>
                </div>
                <p>{comentario.contenido}</p>
                <div className="flex items-center gap-4 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 h-auto p-1"
                    onClick={() => darLike(comentario.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comentario.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 h-auto p-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Responder</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
