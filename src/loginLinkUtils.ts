interface Props {
  /* v: name of vendor */
  v: string;
  /* web: vendor url */
  web: string;
  /* id: vendor whitelisted G$ address */
  id: string;
  /* cbu: callback url */
  cbu?: string;
  /* rdu: redirect url */
  rdu?: string;
  /* r: an array with extra user information fields requested (ie mobile,location,email,avatar,name) */
  r: Array<string>;
}

export const createLoginLink = ({ v, web, id, cbu, rdu, r }: Props) => {
  const websiteLink = "http://localhost:3000/AppNavigation/LoginRedirect";
  const objectToEncode = { v, web, id, cbu, rdu, r };
  if (!cbu && !rdu) {
    throw new Error("Please provide either a cbu or rdu");
  }
  const encodedString = Buffer.from(JSON.stringify(objectToEncode)).toString(
    "base64"
  );
  return `${websiteLink}?login=${encodeURIComponent(encodedString)}`;
};

export const parseLoginLink = (link: string) => {
  return JSON.parse(
    Buffer.from(decodeURIComponent(link), "base64").toString("ascii")
  );
};
