
export function NuevaLista({atencionesDesp}){
    return (
        <table>
            <tbody>
                {atencionesDesp.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.servicio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}