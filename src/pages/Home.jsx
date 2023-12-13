import { useSpring, animated } from "react-spring";

export default function Home() {
  //   animations
  const hero = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  return (
    <>
      <animated.div
        style={{
          ...hero,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://4kwallpapers.com/images/walls/thumbs_3t/13542.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="min-h-[75vh] flex flex-col gap-10 justify-center items-center"
      >
        <div className="absolute flex flex-col gap-3 justify-center items-center">
          <h1 className="text-6xl  text-white">Homepage</h1>
          <p className="text-3xl text-white">Welcome to the homepage</p>
        </div>
      </animated.div>
    </>
  );
}
