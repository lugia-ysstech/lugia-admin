import lugiax from '@lugia/lugiax';

export default async function doRequest(url: string, { ...rest }) {
  const apiUrls = lugiax
    .getState()
    .get('security')
    .get('apiUrls')
    .toJS();

  // if (apiUrls.indexOf(url) === -1) {
  //   return Promise.resolve({ error: "无访API问权限" });
  // }

  const res = await dofetch(url, { ...rest, });
  return res;
}

async function dofetch(url, { ...rest }) {
  return await fetch(url, {
    ...rest,
  }).then(response => response.json());
}
