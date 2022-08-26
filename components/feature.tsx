type Props = {
    isPlusFeature?: boolean,
    isActive?: boolean,
    title?: string,
    description?: string,
    more?: boolean
}

const Feature = ({ isPlusFeature, isActive, title, description, more }: Props) => (
    <div className="py-3 px-5 flex items-center gap-4 hover:bg-gray-100">
        {
            (isPlusFeature) ?
                <div className="flex-none rounded-full w-6 h-6 border-2 border-black">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>

                </div>
                :
                <div className={`"flex-none rounded-full w-6 h-6 border-2 ${(isActive) ? "border-orange-300" : "border-orange-200"}`}>
                    {
                        (isActive) ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>
                    }
                </div>
        }

        <div className={`flex-auto ${(!isPlusFeature && !isActive) ? "text-gray-400" : ""}`}>
            <p className="font-bold">{title}</p>
            <pre className="text-sm font-sans">{description}</pre>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${(!isPlusFeature && !isActive) ? "stroke-orange-200" : "stroke-orange-300"} ${(more)? "" : "hidden"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    </div>
)

export default Feature;