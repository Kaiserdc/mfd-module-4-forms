import {Outlet} from "react-router";
import '../assets/css/app.css'

export default function BaseLayout() {
    return <>
        <main>
            <div className="container pt-5">
                <header className="d-flex flex-column align-items-center mb-4">
                    <h1>Модуль 4. React - 4. Формы</h1>
                </header>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-12">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </main>
    </>
}