const SideBarIcon = ({icon, text = 'tooltip'}) => (
  <div className="flex flex-row items-center group">
    <div
      className="border-l-4 border-l-gray-500 rounded-r border-l-white h-1/4 transition-all opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 ease-out"></div>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
    </div>
  </div>

);

export default SideBarIcon;