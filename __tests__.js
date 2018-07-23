import React from "react";
import { shallow, mount, render } from "enzyme";
import Container from "../Container";
// describe what we are testing
describe("Container Component", () => {
  const wrapper = shallow(<Container />);
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(wrapper.find(".container").exists()).toBe(true);
  });

  // make our assertion and what we expect to happen
  it("should trade with an appropriate value", () => {
    wrapper.setState({
      tradeAmount: 156.12
    });
    wrapper.instance().trade();
    expect(wrapper.state("usdBalance").toEqual(0));
    expect(wrapper.state("error").toEqual(null));
  });

  it("shouldnt trade with an inappropriate value", () => {
    wrapper.setState({
      tradeAmount: 158.12
    });
    wrapper.instance().trade();
    expect(wrapper.state("usdBalance").toEqual(156.12));
    expect(wrapper.state("error").toEqual("Insufficient balance"));

    wrapper.setState({
      tradeAmount: "a"
    });
    wrapper.instance().trade();
    expect(wrapper.state("usdBalance").toEqual(156.12));
    expect(wrapper.state("error").toEqual("Invalid trade amount"));
  });
});
