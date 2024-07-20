export default function NavBar() {
  return (
    <div className="sticky top-0 w-full mx-auto">
      <div className="py-6 flex justify-between bg-slate-900 z-10">
        <div
          className="flex items-center bg-gradient-to-br from-sky-700 to-cyan-100 
            bg-clip-text text-xl font-bold text-transparent "
        >
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
    </div>
  );
}
