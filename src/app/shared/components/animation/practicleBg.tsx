import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function PracticleBg() {
  const practicleInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: any) => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={practicleInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "none",
          },
        },
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                color: "#FEC52F",
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 250,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#ff0000",
            },
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
export default PracticleBg;
