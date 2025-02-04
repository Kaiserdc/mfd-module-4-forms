import {SigninForm} from "~/components/Signin/signin";

export function Welcome() {
    return (
        <>
            <div
                className="card">
                <div className="card-body px-4 py-3">
                    <h2 className="text-center mb-4">Добро пожаловать</h2>
                    <ul className={"list-unstyled d-flex flex-column items-center gap-4 mx-auto w-75"}>
                        {resources.map(({href, text}) => (
                            <li key={href}>
                                <a href={href}
                                   className="d-block btn btn-lg btn-outline-primary btn-block ">
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

const resources = [
    {
        href: "/signin",
        text: "Авторизация"
    },
    {
        href: "/signup",
        text: "Регистрация"
    },
];
