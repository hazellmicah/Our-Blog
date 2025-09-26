function App() {
  return(
  <div className="w-screen h-screen flex flex-col items-center bg-red-200">
      <div className="mb-8">
      <h1 className="text-5xl underline">Our BLOG</h1>
    </div> {/* first row*/}
    <div className="flex">
      <div className="w-md p-4 flex flex-col items-center">
        <div>
            <img className="w-full" src="public/brunette-girl-wearing-black-blindfold-brunette-girl-wearing-black-blindfold-isolated-grey-129244123.webp" alt="Picture of Stairs"/>
        </div>
        <h2 className="text-3xl my-2">Teamwork</h2>
        <p className="text-center">We Help The Lost And Give Them Hope</p>
        <p className="my-2">Mon 23 2020</p>
        <button className="bg-slate-500 text-white py-1 px-5">Read More</button>
      </div> {/*First Column*/}
      <div className="w-md p-4 flex flex-col items-center">
        <div>
            <img className="w-full" src="public/happy-middle-aged-business-man-presenting-ads-isolated-white-background-entrepreneur-smiling-older-professional-manager-304349385.webp" alt="Picture of Stairs"/>
        </div>
        <h2 className="text-3xl my-2">Our Boss</h2>
        <p className="text-center">Our Ceo Of the Company, John Doe</p>
        <p className="my-2">Mon 23 2020</p>
        <button className="bg-slate-500 text-white py-1 px-5">Read More</button>
      </div> {/*First Column*/}
      <div className="w-md p-4 flex flex-col items-center">
        <div>
            <img className="w-full" src="public/Stairs.png" alt="Picture of Stairs"/>
        </div>
        <h2 className="text-3xl my-2">Rise Up</h2>
        <p className="text-center">We Rise People Who Are Struggling And Give Them Hope.</p>
        <p className="my-2">Mon 23 2020</p>
        <button className="bg-slate-500 text-white py-1 px-5">Read More</button>
      </div> {/*First Column*/}
    </div> {/*second row*/}

  </div>
  )
}

export default App;
