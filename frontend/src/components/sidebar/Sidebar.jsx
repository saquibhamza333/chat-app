import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500 w-2/5 min-w-">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar