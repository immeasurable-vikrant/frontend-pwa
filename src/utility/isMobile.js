/**
 * isMobile - utility for detecting user agent
 * @returns {Boolean} Returns boolean value
 * How to use it
 * Import isMobile
  return (
    <div>
     const mobile = isMobile()
    </div>
  );
 */

const isMobile = () => {
  const { userAgent } = navigator;
  const checkMobile = Boolean(
    userAgent.match(/Android | iPhone | Opera Mini | IEMobile /i)
  );
  return checkMobile;
};
export default isMobile;
