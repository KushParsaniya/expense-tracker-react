import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useState} from "react";
import authService from "../services/authService.js";
import {login as storeLogin} from "../stores/slices/authSlice.js";
import {Button} from "./fields/Button.jsx";
import {Input} from "./fields/Input.jsx";
import {addExpenses} from "../stores/slices/expenseSlice.js";


export const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm()

    const [error, setError] = useState("")


    const login = async (data) => {
        setError("")
        try {
            const res = await authService.signIn(data);

            if (res.status === 200) {
                const jwtToken = res.data.jwtToken;
                dispatch(storeLogin({jwtToken}))
                console.log(res.data.expenses)
                dispatch(addExpenses(res.data.expenses))
            } else if (res.status === 401) {
                setError(res.data)
                navigate("/login")
            } else {
                setError("Something went wrong")
                navigate("/")
            }

        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter your Email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter Your Password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign In</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}