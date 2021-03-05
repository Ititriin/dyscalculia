//testide jaoks ühendatakse vuetify'ga ära
// tehtud tests kaust, kus on kirjeldatud teha setup.js
// unit test hetkel on arvutuste testimiseks mõeldud (aga üldiselt nagu selleks, et muudatustega põhifunkts testimiseks)

import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("should add properly", () => {
    const wrapper = shallowMount(HelloWorld,{});
    const total = wrapper.vm.add(20, 5)//vue test util properties all, on mingi vm property, millega saab meetoditele ligi
    expect(total).toBe(25);
    expect(total).not.toBe(26);
  });

  it("should multiply properly", () => {
    const wrapper = shallowMount(HelloWorld,{});
    const total = wrapper.vm.multiply(20, 5)//vue test util properties all, on mingi vm property, millega saab meetoditele ligi
    expect(total).toBe(100);
  });
});

