/* export function BubbleSpan({nombreServicio}) {
    const serviciosMap = nombreServicio.map((servicio) =>
    
    <span key={servicio.id} className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                {servicio}
            </span> );
            console.log(serviciosMap)
    return(
        <div>
            {serviciosMap}
        </div>
    )
}
 */
export function BubbleSpan({ text }) {
  return (
    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
      {text}
    </span>
  );
}