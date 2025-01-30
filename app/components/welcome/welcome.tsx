export function Welcome() {
    return (
        <>
            <div
                className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-2/5 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
              <div className="flex flex-col gap-3 pb-4">
                <h2 className="text-center text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto mb-5">Добро пожаловать</h2>
                <ul className={"flex flex-col items-center gap-4 min-h-0"}>
                  {resources.map(({href, text}) => (
                      <li key={href} className={"flex justify-center"}>
                        <a href={href}
                           className="flex items-center justify-center font-bold rounded-lg text-xl  w-80 h-16 bg-[#374151] text-[#ffffff] justify-center">
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
