export default function ProductManagementRadio({recent} : {recent:boolean}) {
    return (
        <>
            {
                recent ?
                <div className="flex gap-x-8">
                    <div className="relative">
                        <label htmlFor="true" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]" >✓</label>
                        <input className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="recent" id="true" value="true" defaultChecked/>
                        <label htmlFor="true" className="relative -top-1">True</label>
                    </div>
                    <div className="relative">
                        <label htmlFor="false" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]" >✓</label>
                        <input className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="recent" id="false" value="false"/>
                        <label htmlFor="false" className="relative -top-1">False</label>
                    </div>
                </div>
                :
                <div className="flex gap-x-8">
                    <div className="relative">
                        <label htmlFor="true" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]" >✓</label>
                        <input className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="recent" id="true" value="true"/>
                        <label htmlFor="true" className="relative -top-1">True</label>
                    </div>
                    <div className="relative">
                        <label htmlFor="false" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]" >✓</label>
                        <input className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="recent" id="false" value="false" defaultChecked/>
                        <label htmlFor="false" className="relative -top-1">False</label>
                    </div>
                </div>
            }
            
        </>
    )
}