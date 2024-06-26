export default function NavBar() {
  return (
    <div className="py-6 flex justify-between mb-10">
      <div
        className="flex items-center bg-gradient-to-br from-sky-700 to-cyan-100 
            bg-clip-text text-xl font-bold text-transparent"
      >
        {/* <SquareMenu className="mr-1 h-10 w-10 stroke-cyan-600" /> */}
        <div>Jeremy's Portfolio</div>
      </div>
      <ul className="flex gap-x-3 font-medium text-gray-200">
        <li className="hover:text-amber-200 cursor-pointer">About me</li>
        <li className="hover:text-amber-200 cursor-pointer">Projects</li>
        <li className="hover:text-amber-200 cursor-pointer">Skills</li>
        <li className="hover:text-amber-200 cursor-pointer">Education</li>
        <li className="hover:text-amber-200 cursor-pointer">Experience</li>
        <li className="hover:text-amber-200 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
