import classNames from "classNames/bind";
import styles from "./sign-in.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email)

    return (
        <div className={cx("sign-in")}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className={cx("banner")}>
                            <img src="/public/imgs/unsplash_IH7wPsjwoMc.png" alt="Error" />
                            <div>
                                <h2>Turn Your Ideas into reality</h2>
                                <p>Start for free and get attractive offers from the community</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className={cx("sign-in-right")}>
                            <strong>Interactive Brand</strong>
                            <h3>Login</h3>
                            <p>Welcome Back! Please enter your details</p>
                            <form>
                                <input type="email" value={email} name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" value={password} name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                <div className={cx("form-box")}>
                                    <span className="d-flex align-items-center gap-2">
                                        <input type="checkbox" />
                                        <b>Remember me for 30 days</b>
                                    </span>
                                    <strong>Forgot Password ?</strong>
                                </div>
                                <button className={cx("btn-sign-in")}>Log In</button>
                                <button className={cx("btn-register")}>Register</button>
                                <div className={cx("underline")}>
                                    <div></div>
                                    <span>or</span>
                                </div>
                                <button className="d-flex align-items-center justify-content-center gap-2 mt-2"><img src="/public/imgs/google-icon-2048x2048-pks9lbdv.png" alt="Google" />Sign In With Google</button>
                            </form>
                            <div className={cx("navigation")}>
                                <p>Dont have a account? <a href="/">Sign up for free</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;