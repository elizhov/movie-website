import {Button, Card, Input} from "antd";

export default function About() {
    return (
        <Card style={{ width: 300 }}>
            <Input placeholder="Type something..." style={{ marginBottom: 10 }} />
            <Button type="primary">Click Me</Button>
        </Card>
    )
}
