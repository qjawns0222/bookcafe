import { Row, Col, Button, Input } from "antd";
import { useRef } from "react";

import { Loginreqtype } from "../types";

interface Signinprops {
  login: (reqdate: Loginreqtype) => void;
}
const Sign: React.FC<Signinprops> = ({ login }) => {
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  function click() {
    const email = emailRef.current!.state.value;
    const password = passwordRef.current!.state.value;

    login({ email, password });
  }
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
              <Input
                ref={emailRef}
                placeholder="Email"
                autoComplete="email"
                name="email"
              />
            </div>
            <div>
              Password
              <span>*</span>
            </div>
            <div>
              <Input
                ref={passwordRef}
                type="password"
                autoComplete="current-password"
                name="email"
              />
            </div>
            <div>
              <Button onClick={click} size="large">
                로그인
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Sign;
