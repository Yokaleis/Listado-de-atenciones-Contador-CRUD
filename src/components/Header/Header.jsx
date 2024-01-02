
import { SlideCounter, SlideCounterInterconsultas } from '../Slider/SlideCounterComponent'


export function Header() {
    return (
        <>
            <header>
                <h1 className="text-3xl font-bold mb-10">Listado de Atenciones</h1>
            </header>
            <div className="grid grid-flow-col grid-cols-2/2 gap-2">
                <SlideCounter/>
                <SlideCounterInterconsultas/>
            </div>
            
        </>
    )
}