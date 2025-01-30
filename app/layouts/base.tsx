import {Outlet} from "react-router";

export default function BaseLayout(){
    return<>
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <h1>Модуль 4. React - 4. Формы</h1>
                </header>
                <Outlet/>
            </div>
        </main>
    </>
}