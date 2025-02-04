import {Input} from "~/components/Forms/TextInput/input";
import {TbUser} from "react-icons/tb";
import {type ChangeEvent, type FormEvent, useRef, useState} from "react";
import {RadioInput} from "~/components/Forms/RadioInput/radio";

export default function Signup() {
    const formDataRef = useRef({
        name: '',
        nickname: '',
        email: '',
        sex: '',
        password: '',
        password_repeat: '',
    })
    const formRef = useRef<HTMLFormElement | null>(null)
    const [sex, setSex] = useState('male')
    const [passwordError, setPasswordError] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const {name, value} = e.target
        formDataRef.current = {...formDataRef.current, [name]: value}
        setPasswordError(false);
    }
    const handleChangeSex = (value: string) => {
        setSex(value)
        formDataRef.current.sex = value
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formDataRef.current.password !== formDataRef.current.password_repeat) {
            setPasswordError((prev) => !prev);
            return;
        }
        handleReset()
        console.log(formDataRef.current)
    }
    const handleReset = () => {
        formRef.current?.reset();
    }
    return <>
        <form ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleChange}
              onReset={handleReset}
        >
            <div className="d-flex flex-column gap-3 mb-3">
                <Input type={'text'}
                       id={'name'}
                       name={'name'}
                       label={'Name'}
                       placeholder={'name'}
                       required={true}
                />
                <Input type={'text'}
                       id={'nickname'}
                       name={'nickname'}
                       label={'Nickname'}
                       placeholder={'nickname'}
                       required={true}
                />
                <Input type={'text'}
                       id={'email'}
                       name={'email'}
                       label={'Email'}
                       placeholder={'name'}
                       required={true}
                />
                <div className="d-flex flex-row gap-4">
                    <RadioInput label={'Male'} value={'male'} name={'sex'} checked={sex === 'male'}
                                onChange={handleChangeSex}/>
                    <RadioInput label={'Female'} value={'female'} name={'sex'} checked={sex === 'female'}
                                onChange={handleChangeSex}/>
                </div>
                <Input type={'password'}
                       id={'password'}
                       name={'password'}
                       label={'Password'}
                       placeholder={'*********'}
                       required={true}
                       error={passwordError ? "Incorrect password" : ""}
                />
                <Input type={'password'}
                       id={'passwordRepeat'}
                       name={'password_repeat'}
                       label={'Confirm Password'}
                       placeholder={'*********'}
                       required={true}
                       error={passwordError ? "Incorrect password" : ""}
                />

                <button type={'submit'} className="btn btn-primary">Register</button>
            </div>
        </form>
    </>
}