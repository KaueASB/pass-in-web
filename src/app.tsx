import { AttendeeList } from './components/attendee-list'
import { Header } from './components/header'

export function App() {
  return (
    <div className="mx-auto flex max-w-[80%] flex-col gap-5 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
