// import {Button} from "antd";
// import { useNavigate } from 'react-router-dom';
//
// export default function Home() {
//
//     const navigate = useNavigate();
//
//     const handleSignUpRedirect = () => {
//         navigate('/signup');
//     };
//
//     return (
//         <div>
//             <img src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/901370a7-ec10-4044-901c-82a189cc8036/d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg/v1/fill/w_1172,h_682,q_70,strp/imdb_top_250_movie_poster_by_saxon1964_d38rnod-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIwMCIsInBhdGgiOiJcL2ZcLzkwMTM3MGE3LWVjMTAtNDA0NC05MDFjLTgyYTE4OWNjODAzNlwvZDM4cm5vZC0yZjZjYjgxNS0wMTFkLTQ3YTgtYmI5Zi00NDhjMjBmOTk0YzkuanBnIiwid2lkdGgiOiI8PTU1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FcSQpnBlme8MsgOfMBtOUgWTDydsuIy1mPsgznkqdOw"/>
//             <h1>Welcome Home</h1>
//             <Button type="primary" onClick={handleSignUpRedirect}>
//                 Go to Sign up
//             </Button>
//         </div>
//     )
// }
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
    const navigate = useNavigate();

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
                backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/901370a7-ec10-4044-901c-82a189cc8036/d38rnod-2f6cb815-011d-47a8-bb9f-448c20f994c9.jpg')`,
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
            }}
        >
            <Content
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backdropFilter: 'brightness(0.7)', // optional for contrast
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <Title level={1} style={{ color: 'white' }}>Welcome Home</Title>
                <Button type="primary" size="large" onClick={handleSignUpRedirect}>
                    Sign up
                </Button>
            </Content>
        </Layout>
    );
}
