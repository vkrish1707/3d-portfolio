export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/vkrish1707", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("https://www.linkedin.com/in/vamsi-krishna-mylavarapu/", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://leetcode.com/", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://www.codechef.com", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://www.hackerrank.com/", "new");
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://www.capgemini.com/ca-en/", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://www.wipro.com/en-CA/", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://hexaware.com/", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://www.facebook.com/people/VZen-Innovations-Pvt-Ltd/100063804540060/", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open("https://www.accenture.com/ca-en", "new");
};

