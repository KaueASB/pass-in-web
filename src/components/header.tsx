import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2 ">
      <img src={nlwUniteIcon} alt="Logo NLW Unite" />

      <nav className="flex gap-5">
        <a href="" className="text-sm font-medium text-zinc-300">
          Eventos
        </a>
        <a href="" className="text-sm font-medium">
          Participantes
        </a>
      </nav>
    </header>
  )
}
