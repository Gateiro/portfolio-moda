import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <div>
                {/*Inserir Logo*/}
                <div>
                    <Link href="">
                        Logo | Selma
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                        Ínicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        Sobre Mim
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                         Projetos
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        Contato
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}