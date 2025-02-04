import {SigninForm} from "~/components/Signin/signin";

export default function Signin() {
    return <>

        <div
            className="card">
            <div className="card-header ">
                <h3>Login page</h3>
            </div>
            <div className="card-body px-4 py-3">
                <div className="text-sm font-light text-[#6B7280] pb-8 ">Login to your account.</div>
                <SigninForm/>
            </div>
        </div>
    </>
}