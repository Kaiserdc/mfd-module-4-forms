export function SignupForm() {
    return <form className="flex flex-col">
        <div className="pb-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">Имя</label>
            <div className="relative text-gray-400">
                <input type="text"
                       name="name"
                       id="name"
                       className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                       placeholder="Your Name" autoComplete="off"/>
            </div>
        </div>
        <div className="pb-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">Email</label>
            <div className="relative text-gray-400"><span
                className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path
                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>
                <input type="email" name="email" id="email"
                       className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                       placeholder="name@company.com" autoComplete="off"/>
            </div>
        </div>
        <div className="pb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">Password</label>
            <div className="relative text-gray-400"><span
                className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3"
                                                                rx="2"></rect><path d="M12 8v8"></path><path
                d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span>
                <input type="password" name="password" id="password" placeholder="••••••••••"
                       className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                       autoComplete="new-password"/>
            </div>
        </div>
        <button type="submit"
                className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Sign
            Up
        </button>
        <div className="text-sm  text-[#6B7280] ">Уже есть аккаунт? <a href="#"
                                                                       className="font-medium text-[#4F46E5] hover:underline">Войти</a>

        </div>
    </form>
}
