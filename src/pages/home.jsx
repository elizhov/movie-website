import {Button, Layout, Space, Typography} from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
    const navigate = useNavigate();

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    const handleMoviesRedirect = () => {
        navigate('/movies');
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
                backgroundImage: `url('https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?semt=ais_hybrid&w=740')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Content
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <Title level={1} style={{ color: 'white' }}>Welcome to 314movies</Title>
                <Title level={2} style={{ color: 'white' }}>
                    Create an account or sign in to have access to your favorite movies
                </Title>

                <Space>
                    <Button type="primary" size="large" onClick={handleSignUpRedirect}>
                        Sign up
                    </Button>
                    <Button type="primary" size="large">
                        Sign in
                    </Button>
                    <Button type="primary" size="large" onClick={handleMoviesRedirect}>
                        Movies
                    </Button>
                </Space>

            </Content>
        </Layout>
    );
}
