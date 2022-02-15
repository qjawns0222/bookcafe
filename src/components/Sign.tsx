import { Row, Col, Button } from "antd";

export default function Sign() {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>나의책</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email
              <span>*</span>
            </div>
            <div>
              <input placeholder="Email" autoComplete="email" name="Email" />
            </div>
            <div>
              password
              <span>*</span>
            </div>
            <div>
              <input
                type="password"
                autoComplete="current-password"
                name="Email"
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
