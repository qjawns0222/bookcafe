import { Row, Col, Button, Input } from "antd";

export default function Sign() {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}>
            <img src="/bg_signin.png" alt="#" />
          </Col>
          <Col span={12}>
            <div>나의책</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
              <span>*</span>
            </div>
            <div>
              <Input placeholder="Email" autoComplete="email" name="email" />
            </div>
            <div>
              Password
              <span>*</span>
            </div>
            <div>
              <Input
                type="password"
                autoComplete="current-password"
                name="email"
              />
            </div>
            <div>
              <Button size="large">로그인</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
