import lugiax from "@lugia/lugiax";

export default function getComponents(component, resFunc: Function) {
  const powerList =
    lugiax
      .getState()
      .get("security")
      .get("powerList")
      .toJS() || [];
  return resFunc(componet, powerList);
}

const Com = getComponents(componet, powerList => {
  powerList; //
  return componet;
  return "";
  return null;
});
