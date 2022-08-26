type Props = {
    gift?: number
}

const Gift = ({gift} : Props) => (

    <div className="bg-blue-900 py-3 flex gap-3 relative hover:bg-blue-800">
        <svg className="stroke-white h-9 ml-5" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        <div className="bg-orange-400 rounded-full w-4 h-4 absolute left-11 bottom-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <div className="flex flex-col">
            <p className="text-white font-bold text-sm">{gift} € Online-Preisvorteil</p>
            <p className="text-white text-xs">zusätzlich sichern</p>
        </div>
    </div>

)

export default Gift