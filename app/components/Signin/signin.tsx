import {
    type ChangeEvent,
    type FormEvent,
    useRef
} from "react";
import {Input} from "~/components/Forms/TextInput/input";
import {TbUser} from "react-icons/tb";

export const SigninForm = () => {
    const formDataRef = useRef({email: '', password: ''})
    const formRef = useRef<HTMLFormElement | null>(null)
    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const {name, value} = e.target
        formDataRef.current = {...formDataRef.current, [name]: value}
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleReset()
        console.log(formDataRef.current)
    }
    const handleReset = () => {
        formRef.current?.reset();
    }
    return (<>
        <form ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleChange}
              onReset={handleReset}
        >
            <div className="d-flex flex-column gap-3 mb-3">
                <Input type={'text'}
                       id={'email'}
                       name={'email'}
                       label={'Email'}
                       lefticon={<TbUser/>}
                       placeholder={'name'}
                       required
                />
                <Input type={'password'}
                       id={'password'}
                       name={'password'}
                       label={'Password'}
                       placeholder={'*********'}
                       required={true}
                />

                <button type={'submit'} className="btn btn-primary">Login</button>
            </div>
            <div>Don't have an account yet? <a href="/signup" title={'Sign Up'}>Sign Up</a></div>
        </form>
    </>)
}