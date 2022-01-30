import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const UserAvatar = (props, ref) => {
  const iconRef = useRef();
  let userImg = (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 0C17.9032 0 0 17.9032 0 40C0 62.0968 17.9032 80 40 80C62.0968 80 80 62.0968 80 40C80 17.9032 62.0968 0 40 0ZM40 15.4839C47.8387 15.4839 54.1935 21.8387 54.1935 29.6774C54.1935 37.5161 47.8387 43.871 40 43.871C32.1613 43.871 25.8064 37.5161 25.8064 29.6774C25.8064 21.8387 32.1613 15.4839 40 15.4839ZM40 70.9677C30.5323 70.9677 22.0484 66.6774 16.371 59.9677C19.4032 54.2581 25.3387 50.3226 32.2581 50.3226C32.6452 50.3226 33.0323 50.3871 33.4032 50.5C35.5 51.1774 37.6935 51.6129 40 51.6129C42.3064 51.6129 44.5161 51.1774 46.5968 50.5C46.9677 50.3871 47.3548 50.3226 47.7419 50.3226C54.6613 50.3226 60.5968 54.2581 63.629 59.9677C57.9516 66.6774 49.4677 70.9677 40 70.9677Z" />
    </svg>
  );
  useEffect(() => {
    // Make api call to fetch image
  }, []);

  useImperativeHandle(ref, () => {
    // console.log(iconRef);
    return iconRef.current;
  });
  return (
    <span className={props.className} ref={iconRef} onClick={props.onClick}>
      {/* image */}
      {userImg}
      {/* badge */}
      {props.messages && <span>1</span>}
    </span>
  );
};

export default forwardRef(UserAvatar);
