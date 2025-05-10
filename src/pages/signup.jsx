import { useState } from "react";
import validations from "../helpers/validations.js";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Layout} from 'antd';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const handleLogin = () => {
        const usernameResult = validations.usernameValidation(username);
        const emailResult = validations.emailValidation(email);
        const passwordResult = validations.passwordValidation(password);

        setUsernameError(usernameResult === true ? "" : usernameResult);
        setEmailError(emailResult === true ? "" : emailResult);
        setPasswordError(passwordResult === true ? "" : passwordResult);

        if (usernameResult === true && emailResult === true && passwordResult === true) {
            console.log("Login successful!");
            setSuccessMessage("Login successful!");
        }
    };

    return (
        <Layout>
            <Input size="large"
                   placeholder="Email"
                   prefix={<UserOutlined />}
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}

            <Input size="large"
                   placeholder="Username"
                   prefix={<UserOutlined />}
                   type="text"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p className="error">{usernameError}</p>}

            <Space direction="vertical">
                <Input.Password
                    placeholder="input password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                />
            </Space>

            {passwordError && <p className="error">{passwordError}</p>}

            <button onClick={handleLogin}>Sign up</button>
            {successMessage && <p className="success">{successMessage}</p>}
        </Layout>
    );
};

export default Signup;
