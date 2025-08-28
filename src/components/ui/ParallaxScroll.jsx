import { useRef } from "react";

const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const fourth = Math.ceil(images.length / 4);
  const firstPart = images.slice(0, fourth);
  const secondPart = images.slice(fourth, 2 * fourth);
  const thirdPart = images.slice(2 * fourth, 3 * fourth);
  const fourthPart = images.slice(3 * fourth);
  const firstPartLoop = [...firstPart, ...firstPart, ...firstPart];
  const secondPartLoop = [...secondPart, ...secondPart, ...secondPart];
  const thirdPartLoop = [...thirdPart, ...thirdPart, ...thirdPart];
  const fourthPartLoop = [...fourthPart, ...fourthPart, ...fourthPart];

  return (
    <>
      <style jsx>{`
        @keyframes moveUpSmooth {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        @keyframes moveDownSmooth {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .scroll-container {
          will-change: transform;
        }
      `}</style>

      <div
        className={`h-screen items-start overflow-hidden w-full ${className || ""}`}
        ref={gridRef}
      >

      <div
          className="
            grid 
            grid-cols-[repeat(3,250px)] md:grid-cols-4 lg:grid-cols-4
            justify-center gap-6 py-10 px-10
            overflow-hidden max-w-7xl mx-auto
          "
        >

          {/* First Part - Moving Up */}
          <div
            className="scroll-container"
            style={{
              animation: `moveUpSmooth 15s linear infinite`,
            }}
          >
            <div className="grid gap-6">
              {firstPartLoop.map((el, idx) => (
                <div
                  key={"grid-1" + idx}
                  className="border border-gray-300 rounded-3xl overflow-hidden shadow-sm"
                >
                  <img
                    src={el}
                    className="h-96 w-full object-cover object-left-top"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Part - Moving Down */}
          <div
            className="scroll-container"
            style={{
              animation: `moveDownSmooth 15s linear infinite`,
            }}
          >
            <div className="grid gap-6">
              {secondPartLoop.map((el, idx) => (
                <div
                  key={"grid-2" + idx}
                  className="border border-gray-300 rounded-3xl overflow-hidden shadow-sm"
                >
                  <img
                    src={el}
                    className="h-96 w-full object-cover object-left-top"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Third Part - Moving Up */}
          <div
            className="scroll-container"
            style={{
              animation: `moveUpSmooth 15s linear infinite`,
            }}
          >
            <div className="grid gap-6">
              {thirdPartLoop.map((el, idx) => (
                <div
                  key={"grid-3" + idx}
                  className="border border-gray-300 rounded-3xl overflow-hidden shadow-sm"
                >
                  <img
                    src={el}
                    className="h-96 w-full object-cover object-left-top"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fourth Part - Moving Down (⚡hidden on mobile) */}
          <div
            className="scroll-container hidden md:block"
            style={{
              animation: `moveDownSmooth 15s linear infinite`,
            }}
          >
            <div className="grid gap-6">
              {fourthPartLoop.map((el, idx) => (
                <div
                  key={"grid-4" + idx}
                  className="border border-gray-300 rounded-3xl overflow-hidden shadow-sm"
                >
                  <img
                    src={el}
                    className="h-96 w-full object-cover object-left-top"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxScroll;
