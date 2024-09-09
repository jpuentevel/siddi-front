import Link from 'next/link'

const ButtonVerDeteccion = (props) => {

    return (
        <Link
            className=" focus:outline-none text-purple-200 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-center sm:text-lg text-base px-3 py-2.5 mt-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            href={`/resultado/${props.infante}/${props.deteccion}`}
        >
            Ver
        </Link>
    )
}

export default ButtonVerDeteccion