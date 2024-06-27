export default function Timeline() {
  return (
    <div className="mb-10">
      <h1 className="mb-6 text-2xl font-bold bg-gradient-to-br from-sky-700 to-cyan-100 bg-clip-text text-transparent">
        Experience
      </h1>

      <div className="max-w-[calc(100%-theme(space.20))]">
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <time className="absolute top-0 w-full h-full -left-20">2013</time>
          <div className="left-10">
            <h3 className="font-medium">Equity Financial Press Limited</h3>
            <p>
              <i>Typesetter</i>
            </p>
            <ul className="list-disc list-inside font-thin">
              <li>Initialized and maintained HTML and XML files.</li>
              <li>
                Mastered Adobe software tools (InDesign, Illustrator, Photoshop)
                for formatting financial documents.
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <time className="absolute top-0 w-full h-full -left-20">2015</time>
          <div className="left-10">
            <h3 className="font-medium">Capital Financial Press Limited</h3>
            <p>
              <i>Typesetter</i>
            </p>
            <ul className="list-disc list-inside font-thin">
              <li>Formatted financial documents with Adobe softwares</li>
            </ul>
          </div>
        </div>
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <time className="absolute top-0 w-full h-full -left-20">
            2016
            <br />
          </time>
          <div className="left-10">
            <h3 className="font-medium">
              Wonderful Sky Financial Group Limited
            </h3>
            <p>
              <i>Typesetter and Programmer Trainee</i>
            </p>
            <ul className="list-disc list-inside font-thin">
              <li>
                Automated the typesetting process using self-taught JavaScript.
                <br />
                <b className="font-medium">Achievement:</b> Reduced processing
                time by onethird, leading to promotion to System Developer.
              </li>
              <li>
                Converted XML files into HTML files to comply with the EDGAR
                standard (electronic filing system for U.S. Securities and
                Exchange Commission).
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <time className="absolute top-0 w-full h-full -left-20">2020</time>
          <div className="left-10">
            <h3 className="font-medium">
              Powell Financial Press Company Limited
            </h3>
            <p>
              <i>System Developer</i>
            </p>
            <ul className="list-disc list-inside font-thin">
              <li>
                Developed a markup system in JavaScript for InDesign documents,
                enabling trackable changes across revisions.
              </li>
              <li>
                Authored scripts to enhance the efficiency of the production
                team.
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <div className="left-10">
            <h3 className="font-medium">
              Diploma in Creative Mobile Game Design
            </h3>
            <h4>FEVA WORKS IT Education Centre</h4>
          </div>
        </div>
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <time className="absolute top-0 w-full h-full -left-20">2021</time>
          <div className="left-10">
            <h3 className="font-medium">Computer Science (BSc)</h3>
            <h4>University of London</h4>
            <h4 className="font-light">
              <i>(suspended due to family issues)</i>
            </h4>
          </div>
        </div>
        <div className="relative border-white rounded-lg  p-2 left-20">
          <div className="absolute border-white border h-full -left-6">
            <div className="absolute size-4 bg-white rounded-full border-white border-24 -top-1 -left-2"></div>
          </div>
          <time className="absolute top-0 w-full h-full -left-20">2024</time>
          <div className="left-10">
            <h3 className="font-medium">
              Meta Front-End Developer Certificate
            </h3>
            <h4>Coursera (Offered by Meta)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
